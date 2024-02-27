<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Exception;
use Webklex\IMAP\Facades\Client;
use Webklex\PHPIMAP\Exceptions\AuthFailedException;
use App\Mail\SendMessage;
use Illuminate\Support\Facades\Mail;
use Illuminate\Routing\UrlGenerator;
class MailController extends Controller
{
    public $client;

    public $folder;
    protected $url;
    public $messages;
    public function __construct(UrlGenerator $url)
    {
        $this->url = $url;
    }
    public function get_emails(Request $request)
    {
        if($request->label!="favorites"){
            try {
                $this->checkConnect($request->email,$request->label);
                $paginators = $this->messages;

            }catch (AuthFailedException $e){
                print_r(json_encode(['error' => 'Failed to authenticate...']));exit(0);
            }catch (Exception $e) {
                print_r(json_encode(['error' => 'Failed to connect and gathering data...']));exit(0);
            }
            $result = array();
            if($request->label=="inbox"){
                foreach($paginators as $key=>$paginator){
                    $structure = $paginator->getStructure();
                    $attachments = array();
                    if(isset($structure->parts) && count($structure->parts)) 
                    {
                        for($i = 0; $i < count($structure->parts); $i++) 
                        {
                            $attachment = array(
                                'id'=>'',
                                'is_attachment' => false,
                                'filename' => '',
                                'name' => '',
                                'attachment' => '',
                                'size'=>'',
                                'type'=>'',
                                'url'=>''
                            );
                            if($structure->parts[$i]->ifdisposition) 
                            {
                                
                                $attachment['is_attachment'] = true;
                                $attachment['filename'] = $structure->parts[$i]->filename->values[0];
                                $attachment['name'] = $structure->parts[$i]->name->values[0];
                                $attachment['id'] = $structure->parts[$i]->id->values[0];
                                $attachment['size'] = $structure->parts[$i]->bytes;
                                
                                $attachment['type'] = $structure->parts[$i]->content_type;

                                $attachment['attachment'] = $structure->parts[$i]->raw;

                                array_push($attachments,$attachment);
                            }
                            
                        }
                    }
                    $arr = new \stdClass();
                    $arr->createdAt = $paginator->date->values[0];
                    $arr->attachments = $attachments;

                    $arr->folder = 'inbox';
                    $arr->realfolder = 'inbox';

                    $arr->isImportant = false;
                    $arr->isStarred = false;
                    $arr->labelIds = array();
                    if(!isset($paginator->bodies['html'])) $arr->message = $paginator->bodies['text'];
                    else $arr->message = $paginator->bodies['html'];
                    $arr->plain = $paginator->bodies['text'];
                    $arr->isUnread =$paginator->flags;
                    $arr->subject = $paginator->getSubject()->values[0];
                    $arr->id = $paginator->getUid();
                    $arr->key_id = $paginator->getUid()."-".'inbox';

                    $user_name = DB::table('users')->where('email',$request->email)->first()->fullname;
                    $user_name = str_replace(" ","",$user_name);
                    $user_name = strtolower($user_name);

                    $favs = DB::table('fav_mails')->where(array('email'=>$user_name.'@socialvex.net','label'=>'inbox','uid'=>$paginator->getUid()))->count();
                    $arr->favorite = $favs>0?1:0;

                    $arr->from = array("avatar"=>"","email"=>$paginator->from->values[0]->mail,"name"=>$paginator->from->values[0]->personal);
                    $to = array("avatar"=>"","email"=>$paginator->to->values[0]->mail,"name"=>$paginator->to->values[0]->personal);
                    $arr_to = array();
                    array_push($arr_to,$to);
                    $arr->to = $arr_to;
                    array_push($result,$arr);
                }
            }
            else if($request->label=="sent"){
                foreach($paginators as $key=>$paginator){

                    $structure = $paginator->getStructure();
                    $attachments = array();
                    if(isset($structure->parts) && count($structure->parts)) 
                    {
                        for($i = 0; $i < count($structure->parts); $i++) 
                        {
                            $attachment = array(
                                'id'=>'',
                                'is_attachment' => false,
                                'filename' => '',
                                'name' => '',
                                'attachment' => '',
                                'size'=>'',
                                'type'=>'',
                                'url'=>''
                            );
                            if($structure->parts[$i]->ifdisposition) 
                            {
                                $attachment['is_attachment'] = true;
                                $attachment['filename'] = $structure->parts[$i]->name->values[0];
                                $attachment['name'] = $structure->parts[$i]->name->values[0];
                                $attachment['id'] = '';
                                $attachment['size'] = $structure->parts[$i]->bytes;
                                
                                $attachment['type'] = $structure->parts[$i]->content_type;
        
                                $attachment['attachment'] = $structure->parts[$i]->raw;
        
                                array_push($attachments,$attachment);
                            }
                            
                        }
                    }
                    $arr = new \stdClass();
                    $arr->createdAt = $paginator->date->values[0];
                    $arr->attachments = $attachments;
        
                    $arr->folder = 'sent';
                    $arr->realfolder = 'sent';

                    $arr->isImportant = false;
                    $arr->isStarred = false;
                    $arr->labelIds = array();
                    
                    $arr->message = $paginator->bodies['html'];
                    if(!isset($paginator->bodies['text'])) $arr->plain = $paginator->bodies['html'];
                    else $arr->plain = $paginator->bodies['text'];
                    $arr->isUnread =$paginator->flags;
                    $arr->subject = $paginator->getSubject()->values[0];
                    $arr->id = $paginator->getUid();
                    $arr->key_id = $paginator->getUid()."-".'sent';

                    $user_name = DB::table('users')->where('email',$request->email)->first()->fullname;
                    $user_name = str_replace(" ","",$user_name);
                    $user_name = strtolower($user_name);

                    $favs = DB::table('fav_mails')->where(array('email'=>$user_name.'@socialvex.net','label'=>'sent','uid'=>$paginator->getUid()))->count();
                    $arr->favorite = $favs>0?1:0;
                    $arr->from = array("avatar"=>"","email"=>$paginator->from->values[0]->mail,"name"=>$paginator->from->values[0]->personal);
                    
                    $to = array("avatar"=>"","email"=>$paginator->to->values[0]->mail,"name"=>$paginator->to->values);
                    $arr_to = array();
                    array_push($arr_to,$to);
                    $arr->to = $arr_to;
                    array_push($result,$arr);
                }  
            }
            print_r(json_encode($result));
        }
        else{
            try {
                $this->checkConnect($request->email,'inbox');
                $paginators = $this->messages;

            }catch (AuthFailedException $e){
                print_r(json_encode(['error' => 'Failed to authenticate...']));
            }catch (Exception $e) {
                print_r(json_encode(['error' => 'Failed to connect and gathering data...']));
            }
            $result = array();

            foreach($paginators as $key=>$paginator){
                $structure = $paginator->getStructure();
                $attachments = array();
                if(isset($structure->parts) && count($structure->parts)) 
                {
                    for($i = 0; $i < count($structure->parts); $i++) 
                    {
                        $attachment = array(
                            'id'=>'',
                            'is_attachment' => false,
                            'filename' => '',
                            'name' => '',
                            'attachment' => '',
                            'size'=>'',
                            'type'=>'',
                            'url'=>''
                        );
                        if($structure->parts[$i]->ifdisposition) 
                        {
                            
                            $attachment['is_attachment'] = true;
                            $attachment['filename'] = $structure->parts[$i]->filename->values[0];
                            $attachment['name'] = $structure->parts[$i]->name->values[0];
                            $attachment['id'] = $structure->parts[$i]->id->values[0];
                            $attachment['size'] = $structure->parts[$i]->bytes;
                            
                            $attachment['type'] = $structure->parts[$i]->content_type;

                            $attachment['attachment'] = $structure->parts[$i]->raw;

                            array_push($attachments,$attachment);
                        }
                        
                    }
                }
                $arr = new \stdClass();
                $arr->createdAt = $paginator->date->values[0];
                $arr->attachments = $attachments;

                $arr->folder = 'favorites';
                $arr->realfolder = 'inbox';

                $arr->isImportant = false;
                $arr->isStarred = false;
                $arr->labelIds = array();
                    if(!isset($paginator->bodies['html'])) $arr->message = $paginator->bodies['text'];
                    else $arr->message = $paginator->bodies['html'];
                    $arr->plain = $paginator->bodies['text'];
                    $arr->isUnread =$paginator->flags;
                $arr->subject = $paginator->getSubject()->values[0];
                $arr->id = $paginator->getUid();
                $arr->key_id = $paginator->getUid()."-".'inbox';

                $user_name = DB::table('users')->where('email',$request->email)->first()->fullname;
                $user_name = str_replace(" ","",$user_name);
                $user_name = strtolower($user_name);

                $favs = DB::table('fav_mails')->where(array('email'=>$user_name.'@socialvex.net','label'=>'inbox','uid'=>$paginator->getUid()))->count();
                $arr->favorite = $favs>0?1:0;
                if($favs==0) continue;
                $arr->from = array("avatar"=>"","email"=>$paginator->from->values[0]->mail,"name"=>$paginator->from->values[0]->personal);
                $to = array("avatar"=>"","email"=>$paginator->to->values[0]->mail,"name"=>$paginator->to->values[0]->personal);
                $arr_to = array();
                array_push($arr_to,$to);
                $arr->to = $arr_to;
                array_push($result,$arr);
            }
            try {
                $this->checkConnect($request->email,'sent');
                $paginators = $this->messages;

            }catch (AuthFailedException $e){
                print_r(json_encode(['error' => 'Failed to authenticate...']));
            }catch (Exception $e) {
                print_r(json_encode(['error' => 'Failed to connect and gathering data...']));
            }

            foreach($paginators as $key=>$paginator){

                $structure = $paginator->getStructure();
                $attachments = array();
                if(isset($structure->parts) && count($structure->parts)) 
                {
                    for($i = 0; $i < count($structure->parts); $i++) 
                    {
                        $attachment = array(
                            'id'=>'',
                            'is_attachment' => false,
                            'filename' => '',
                            'name' => '',
                            'attachment' => '',
                            'size'=>'',
                            'type'=>'',
                            'url'=>''
                        );
                        if($structure->parts[$i]->ifdisposition) 
                        {
                            $attachment['is_attachment'] = true;
                            $attachment['filename'] = $structure->parts[$i]->name->values[0];
                            $attachment['name'] = $structure->parts[$i]->name->values[0];
                            $attachment['id'] = '';
                            $attachment['size'] = $structure->parts[$i]->bytes;
                            
                            $attachment['type'] = $structure->parts[$i]->content_type;
    
                            $attachment['attachment'] = $structure->parts[$i]->raw;
    
                            array_push($attachments,$attachment);
                        }
                        
                    }
                }
                $arr = new \stdClass();
                $arr->createdAt = $paginator->date->values[0];
                $arr->attachments = $attachments;
    
                $arr->folder = 'favorites';
                $arr->realfolder = 'sent';
                $arr->isImportant = false;
                $arr->isStarred = false;
                $arr->labelIds = array();
                $arr->message = $paginator->bodies['html'];
                    if(!isset($paginator->bodies['text'])) $arr->plain = $paginator->bodies['html'];
                    else $arr->plain = $paginator->bodies['text'];
                    $arr->isUnread =$paginator->flags;
                $arr->subject = $paginator->getSubject()->values[0];
                $arr->id = $paginator->getUid();
                $arr->key_id = $paginator->getUid()."-".'sent';

                $user_name = DB::table('users')->where('email',$request->email)->first()->fullname;
                $user_name = str_replace(" ","",$user_name);
                $user_name = strtolower($user_name);

                $favs = DB::table('fav_mails')->where(array('email'=>$user_name.'@socialvex.net','label'=>'sent','uid'=>$paginator->getUid()))->count();
                $arr->favorite = $favs>0?1:0;
                if($favs==0) continue;

                $arr->from = array("avatar"=>"","email"=>$paginator->from->values[0]->mail,"name"=>$paginator->from->values[0]->personal);
                $to = array("avatar"=>"","email"=>$paginator->to->values[0]->mail,"name"=>$paginator->to->values[0]->personal);
                $arr_to = array();
                array_push($arr_to,$to);
                $arr->to = $arr_to;
                array_push($result,$arr);
            }  
            print_r(json_encode($result));
            
        }
    }

    public function show(int $UID)
    {
        return view('show', [
            'message' => $this->getItemById($UID)
        ]);
    }

    public function getItemById(int $UID)
    {
        try {
            $this->checkConnect();
        } catch (Exception $e) {
            return view('error', [
                'error' => 'Failed to connect and gathering data...'
            ]);
        }
        foreach ($this->messages as $oMessage) {
            if ($UID == $oMessage->getUid()) {
                return $oMessage;
            }
        }
    }

    public function checkConnect($email,$type)
    {
        $dir = "";
        if($type=="inbox") $dir = "INBOX";
        else if($type=="sent") $dir = "Sent"; 
        $user_name = DB::table('users')->where('email',$email)->first()->fullname;
        $user_name = str_replace(" ","",$user_name);
        $user_name = strtolower($user_name);
        config(['imap.accounts.default.username' => $user_name."@socialvex.net"]);
        config(['imap.accounts.default.password' => "123456789"]);

        $this->client = Client::account('default');

        if (!$this->client->isConnected()) {
            $this->client->connect();
            $this->folder = $this->client->getFolderByName($dir);
            $this->messages = $this->folder->messages()->all()->get();
        }
        $this->client->disconnect();
    }
    public function unread_set(Request $request){

        $user_name = DB::table('users')->where('email',$request->email)->first()->fullname;
        $user_name = str_replace(" ","",$user_name);
        $user_name = strtolower($user_name);
        config(['imap.accounts.default.username' => $user_name."@socialvex.net"]);
        config(['imap.accounts.default.password' => "123456789"]);

        $client = Client::account('default');

        if (!$client->isConnected()) {
            $client->connect();
            $folder = $client->getFolderByName("INBOX");
            $messages = $folder->messages()->all()->get();
            $res="no";
            foreach($messages as $message){
                if($message->getUid()==$request->uid){
                    $res = $message->setflag("seen");
                }
            }
            print_r($res);
        }

    }
    public function del_mail(Request $request){

        $dir = "";
        if($request->label=="inbox") $dir = "INBOX";
        else if($request->label=="sent") $dir = "Sent"; 
        $user_name = DB::table('users')->where('email',$request->email)->first()->fullname;
        $user_name = str_replace(" ","",$user_name);
        $user_name = strtolower($user_name);
        config(['imap.accounts.default.username' => $user_name."@socialvex.net"]);
        config(['imap.accounts.default.password' => "123456789"]);
        
        $client = Client::account('default');

        if (!$client->isConnected()) {
            $client->connect();
            $folder = $client->getFolderByName($dir);
            $messages = $folder->messages()->all()->get();
            $res="no";
            foreach($messages as $message){
                if($message->getUid()==$request->uid){
                    $res = $message->delete();
                }
            }
            print_r($res);
        }

    }
    public function update_fav(Request $request){
        $flag = $request->flag;
        $user_name = DB::table('users')->where('email',$request->email)->first()->fullname;
        $user_name = str_replace(" ","",$user_name);
        $user_name = strtolower($user_name);

        if($flag==1){
            $res = DB::table('fav_mails')->where(array('email'=>$user_name.'@socialvex.net','uid'=>$request->uid,'label'=>$request->label))->delete();
        }else{
            $res = DB::table('fav_mails')->insert(array('email'=>$user_name.'@socialvex.net','uid'=>$request->uid,'label'=>$request->label));
        }
        print_r($res);
    }
    public function upload_inline(Request $request){
        $data = $request->data;
        $uri = $request->uri;
        if (preg_match('/^data:image\/(\w+);base64,/', $data, $type)) {
            $data = substr($data, strpos($data, ',') + 1);
            $type = strtolower($type[1]); // jpg, png, gif
        
            if (!in_array($type, [ 'jpg', 'jpeg', 'gif', 'png' ])) {
                throw new \Exception('invalid image type');
            }
            $data = str_replace( ' ', '+', $data );
            $data = base64_decode($data);
        
            if ($data === false) {
                throw new \Exception('base64_decode failed');
            }
        } else {
            throw new \Exception('did not match data URI with image data');
        }
        
        $res = file_put_contents("inlines/".$uri.".".$type, $data);
        print_r(json_encode($type));
    }
    public function send_mail(Request $request){
        $message = $request->message;
        $inlines = explode(",",$request->inlineImgs);
        foreach($inlines as $key=>$inline){
            if($inline=='') break;
            $last = explode("/",$inline)[3];
            if(isset(explode(".",$last)[1])){

                $first = explode(".",$inline)[0];
                //replace first with last value;
                $message= str_replace($first,$this->url->to('/')."/inlines/".$last,$message);
                // $message= str_replace($first,"http://app.socialvex.com/longlogo.png",$message);
            }
        }
        //living server
        // foreach($inlines as $key=>$inline){
        //     if($inline=='') break;
        //     $last = explode("/",$inline)[3];
        //     if(isset(explode(".",$last)[1])){

        //         $first = explode(".",$inline)[0].".".explode(".",$inline)[1].".".explode(".",$inline)[2];
        //         //replace first with last value;
        //         $message= str_replace($first,$this->url->to('/')."/inlines/".$last,$message);
        //         // $message= str_replace($first,"http://app.socialvex.com/longlogo.png",$message);
        //     }
        // }
        // print_r($message);
        // die();
        $to_arr = explode(",",$request->to);
        $len=0;
        $files = array();
        if(isset($request->len)){
            $len = $request->len;
            for($i=0;$i<$len;$i++){
                array_push($files,$request->file('file'.$i));
            }
        }
        $request->validate([
            'to' => 'required|max:255',
          ]);
        $user_name = DB::table('users')->where('email',$request->email)->first()->fullname;
        $user_name = str_replace(" ","",$user_name);
        $user_name = strtolower($user_name);
        config(['mail.mailers.smtp.username' => $user_name."@socialvex.net"]);
        config(['mail.mailers.smtp.password' => "123456789"]);
        config(['mail.from.address' =>$user_name."@socialvex.net"]);

        $mail = Mail::to($to_arr)
        ->send(new SendMessage(['subject' => $request->subject, 'message' => $message,'len'=>$len,"files"=>$files]));

        config(['imap.accounts.default.username' => $user_name."@socialvex.net"]);
        config(['imap.accounts.default.password' => "123456789"]);
        $client = Client::account('default');
        $client->connect();
        $folder = $client->getFolderByName('Sent');
        $result = $folder->appendMessage($mail->getSymfonySentMessage()->toString(), ['\Seen'], now()->format("d-M-Y h:i:s O"));
        $client->disconnect();

        $email = $request->email;
        $mail_cnt = DB::table("users")->where("email",$request->email)->first()->message_cnt+1;
        $res = DB::table("users")->where("email",$request->email)->update(array("message_cnt"=>$mail_cnt));
        print_r(json_encode($res));
        die();
    
    }
}