<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\BillingInfo;
use App\Models\LoginHistory;
use App\Models\Niche;
use Illuminate\Contracts\Database\Query\Builder;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Auth\Events\Registered;
use Illuminate\Database\Eloquent\JsonEncodingException;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
class DashboardController extends Controller
{
    //
    public function index()
    {
        return view('dashboard.index');
    }
    public function get_tips(Request $request){
        $tips = DB::table("tips")->get()->toArray();
        print_r(json_encode($tips));
    }
    public function update_tips(Request $request){
        $id = $request->id;
        $array = array(
            "tip_title"=>$request->tip_title,
            "tip_content"=>$request->tip_content
        );
        $res = DB::table("tips")->where("id",$id)->update($array);
        print_r(json_encode($res));
    }
    public function get_announcements(Request $request){
        $announcements = DB::table("announcements")->orderBy("updated_at","DESC")->get();
        print_r(json_encode($announcements));
    }
    public function delete_announcement(Request $request){
        $id = $request->id;
        $del = DB::table("announcements")->where("id",$id)->delete();
        $announcements = DB::table("announcements")->orderBy("updated_at","DESC")->get();
        print_r(json_encode($announcements));
    }
    public function update_announcement(Request $request){
        $id = $request->id;
        $data=array(
            "a_title"=>$request->a_title,
            "a_content"=>$request->a_content
        );
        $update = DB::table("announcements")->where("id",$id)->update($data);
        $announcements = DB::table("announcements")->orderBy("updated_at","DESC")->get();
        print_r(json_encode($announcements));
    }
    public function get_paypal(Request $request){
        $pp = DB::table('paypal_setting')->where("id",1)->get()->toArray()[0];
        print_r(json_encode($pp));
    }
    public function get_stripe(Request $request){
        $pp = DB::table('stripe_setting')->where("id",1)->get()->toArray()[0];
        print_r(json_encode($pp));
    }
    public function update_paypal(Request $request){
        $data = array(
            "mode"=>$request->values['paypal_mode'],
            "client_id"=>$request->values['paypal_client_id'],
            "secret"=>$request->values['paypal_secret'],
            "plain_id"=>$request->values['paypal_plain_id'],
            "currency"=>$request->values['currency'],
            "unlimited_access"=>$request->values['costofunlimited_access']
        );
        $update = DB::table("paypal_setting")->where("id",1)->update($data);
        print_r(json_encode($update));
    }
    public function update_stripe(Request $request){
        $data = array(
            "pub_key"=>$request->values['stripe_publishable_key'],
            "sec_key"=>$request->values['stripe_secret_key'],
            "webhook_sec"=>$request->values['stripe_webhook_secret'],
            "sub_id"=>$request->values['stripe_subscription_plan_id'],
            "currency"=>$request->values['currency'],
            "unlimited_access"=>$request->values['costofunlimited_access']
        );
        $update = DB::table("stripe_setting")->where("id",1)->update($data);
        print_r(json_encode($update));
    }
    public function uploadCSV(Request $request)
	{
		if ($request->kind == "instagram")
			$path = $request->file('file')->store('public/covers');
		else
			$path = $request->file('file')->store('public/avatars');
		$user = User::where('email', $request->email)->first();

        $file = $request->file('file');
        if ($file) {
            $filename = $file->getClientOriginalName();
            $extension = $file->getClientOriginalExtension(); //Get extension of uploaded file
            $tempPath = $file->getRealPath();
            $fileSize = $file->getSize(); //Get size of uploaded file in bytes
            //Check for file extension and size
            $this->checkUploadedFileProperties($extension, $fileSize);
            //Where uploaded file will be stored on the server 
            $location = 'public/csv'; //Created an "uploads" folder for that
            // Upload file
            $file->move($location, $filename);
            // In case the uploaded file path is to be stored in the database 
            $filepath = public_path($location . "/" . $filename);
            // Reading file
            $file = fopen($filepath, "r");
            $importData_arr = array(); // Read through the file and store the contents as an array
            $i = 0;
            //Read the contents of the uploaded file 
            while (($filedata = fgetcsv($file, 3000, ",")) !== FALSE) {
                $num = count($filedata);
                // Skip first row (Remove below comment if you want to skip the first row)
                if ($i == 0) {
                    $i++;
                    continue;
                }
                for ($c = 0; $c < $num; $c++) {
                    $importData_arr[$i][] = $filedata[$c];
                }
                $i++;
            }
            fclose($file); //Close after reading
            $j = 0;
            foreach ($importData_arr as $importData) {
                $j++;
                try {
                    if($request->kind=="instagram"){
                        $data = array(
                            'username' => $importData[1],
                            'full_name' => $importData[2],
                            'biography' => $importData[3],
                            'verified' => $importData[4],
                            'is_business' => $importData[5],
                            'public_email' => $importData[6],
                            'external_url' => $importData[7],
                            'category_niche' => $importData[8],
                            'follower_count' => $importData[9],
                            'following_count' => $importData[10],
                            'avg_like' => $importData[11],
                            'avg_comment' => $importData[12],
                            'engagement_rate' => $importData[13],
                            'comment_rate' => $importData[14],
                            'lc_ratio' => $importData[15],
                            'likes_spread' => $importData[16],
                            'last_post' => $importData[17],
                            'avg_post_interval' => $importData[18],
                            'profile_pic_url_hd' => $importData[19],
                            'hashtag' => $importData[20],
                            'mentions' => $importData[21],
                            'phone_country_code' => $importData[22],
                            'phone_number' => $importData[23],
                            'city' => $importData[24],
                            'zip' => $importData[25],
                            'Country' => $importData[26],
                            'account_type' => $importData[27],
                            'language' => $importData[28],
                            'gender' => $importData[29],
                            'age' => $importData[30],
                            'ethnicity' => $importData[31]
                        );
                        $res = DB::table('influencers_instagram')->insert($data); 
                    }
                    if($request->kind=="tiktok"){
                        $data = array(
                            'username' => $importData[1],
                            'full_name' => $importData[2],
                            'category_niche' => $importData[3],
                            'public_email' => $importData[4],
                            'biography' => $importData[5],
                            'external_url' => $importData[6],
                            'subscribers' => $importData[7],
                            'follower_count' => $importData[8],
                            'following_count' => $importData[9],
                            'engagement_rate' => $importData[10],
                            'avg_like' => $importData[11],
                            'avg_comment' => $importData[12],
                            'avg_share' => $importData[13],
                            'avg_play_video' => $importData[14],
                            'total_likes' => $importData[15],
                            'comment_rate' => $importData[16],
                            'comment_like_ratio' => $importData[17],
                            'video_count' => $importData[18],
                            'avg_post_interval' => $importData[19],
                            'private_account' => $importData[20],
                            'verified' => $importData[21],
                            'phone_country_code' => $importData[22],
                            'phone_number' => $importData[23],
                            'city' => $importData[24],
                            'zip' => $importData[25],
                            'Country' => $importData[26],
                            'account_type' => $importData[27],
                            'language' => $importData[28],
                            'gender' => $importData[29],
                            'age' => $importData[30],
                            'ethnicity' => $importData[31],
                            'hashtag' => $importData[32],
                            'mentions' => $importData[33]
                        );
                        $res = DB::table('influencers_tiktok')->insert($data); 
                    }
                    if($request->kind=="pinterest"){
                        $data = array(
                            'username' => $importData[1],
                            'full_name' => $importData[2],
                            'biography' => $importData[3],
                            'verified' => $importData[4],
                            'is_business' => $importData[5],
                            'public_email' => $importData[6],
                            'external_url' => $importData[7],
                            'category_niche' => $importData[8],
                            'follower_count' => $importData[9],
                            'following_count' => $importData[10],
                            'engagement_rate' => $importData[11],
                            'avg_like' => $importData[12],
                            'avg_save' => $importData[13],
                            'avg_comment' => $importData[14],
                            'comment_rate' => $importData[15],
                            'comment_like_ratio' => $importData[16],
                            'likes_spread' => $importData[17],
                            'avg_post_interval' => $importData[18],
                            'profile_pic_url_hd' => $importData[19],
                            'phone_country_code' => $importData[20],
                            'phone_number' => $importData[21],
                            'city' => $importData[22],
                            'zip' => $importData[23],
                            'Country' => $importData[24],
                            'account_type' => $importData[25],
                            'language' => $importData[26],
                            'gender' => $importData[27],
                            'age' => $importData[28],
                            'ethnicity' => $importData[29],
                            'hashtag' => $importData[30],
                            'mentions' => $importData[31]
                        );
                        $res = DB::table('influencers_pinterest')->insert($data); 
                    }
                    if($request->kind=="twitter"){
                        $data = array(
                            'username' => $importData[1],
                            'full_name' => $importData[2],
                            'biography' => $importData[3],
                            'verified' => $importData[4],
                            'is_business' => $importData[5],
                            'public_email' => $importData[6],
                            'external_url' => $importData[7],
                            'category_niche' => $importData[8],
                            'follower_count' => $importData[9],
                            'following_count' => $importData[10],
                            'avg_like' => $importData[11],
                            'avg_comment' => $importData[12],
                            'engagement_rate' => $importData[13],
                            'total_likes' => $importData[14],
                            'video_count' => $importData[15],
                            'comment_rate' => $importData[16],
                            'lc_ratio' => $importData[17],
                            'likes_spread' => $importData[18],
                            'last_post' => $importData[19],
                            'avg_post_interval' => $importData[20],
                            'profile_pic_url_hd' => $importData[21],
                            'hashtag' => $importData[22],
                            'mentions' => $importData[23],
                            'phone_country_code' => $importData[24],
                            'phone_number' => $importData[25],
                            'city' => $importData[26],
                            'zip' => $importData[27],
                            'Country' => $importData[28],
                            'account_type' => $importData[29],
                            'language' => $importData[30],
                            'gender' => $importData[31],
                            'age' => $importData[32],
                            'ethnicity' => $importData[33]
                        );
                        $res = DB::table('influencers_twitter')->insert($data); 
                    }
                    if($request->kind=="youtube"){
                        $data = array(
                            'youtube_id' => $importData[1],
                            'username' => $importData[2],
                            'full_name' => $importData[3],
                            'biography' => $importData[4],
                            's_country' => $importData[5],
                            'public_email' => $importData[6],
                            'category_niche' => $importData[7],
                            'profile_pic_url_hd' => $importData[8],
                            'follower_count' => $importData[9],
                            'views' => $importData[10],
                            'engagement_rate' => $importData[11],
                            'avg_view' => $importData[12],
                            'avg_like' => $importData[13],
                            'avg_dislike' => $importData[14],
                            'avg_comment' => $importData[15],
                            'like_view_ratio' => $importData[16],
                            'comment_view_ratio' => $importData[17],
                            'comment_like_ratio' => $importData[18],
                            'like_spread' => $importData[19],
                            'videos' => $importData[20],
                            'languare' => $importData[21],
                            'hashtag' => $importData[22],
                            'mentions' => $importData[23],
                            'phone_country_code' => $importData[24],
                            'phone_number' => $importData[25],
                            'city' => $importData[26],
                            'zip' => $importData[27],
                            'Country' => $importData[28],
                            'account_type' => $importData[29],
                            'language' => $importData[30],
                            'gender' => $importData[31],
                            'age' => $importData[32],
                            'ethnicity' => $importData[33],
                            'verified' => $importData[34]
                        );
                        $res = DB::table('influencers_youtube')->insert($data); 
                    }
                } catch (\Exception $e) {
                    DB::rollBack();
                    return response()->json([
                        'message' => "DB structure wrong"
                    ]);
                }
            }
            return response()->json([
                'message' => "$j records successfully uploaded"
            ]);
        } 
        else {
            //no file was uploaded
        throw new \Exception('No file was uploaded', Response::HTTP_BAD_REQUEST);
        }

		return response()->json(["status" => "success", "success" => true, "message" => "Success to upload"]);
	}
    public function checkUploadedFileProperties($extension, $fileSize)
    {
        $valid_extension = array("csv"); //Only want csv and excel files
        $maxFileSize = 3097152; // Uploaded file size limit is 2mb
        if (in_array(strtolower($extension), $valid_extension)) {
            if ($fileSize <= $maxFileSize) {
            } else {
                throw new \Exception('No file was uploaded', Response::HTTP_REQUEST_ENTITY_TOO_LARGE); //413 error
            }
        } else {
            throw new \Exception('Invalid file extension', Response::HTTP_UNSUPPORTED_MEDIA_TYPE); //415 error
        }
    }
}

