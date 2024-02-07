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

class JobController extends Controller
{
    //
    private $status_code = 200;
    public function update_jobactivity(Request $request){
        $jobID = $request->jobID;
        $isActive = $request->isActive;
        if($isActive=="1") $isActive = 0;
        else if($isActive=="0") $isActive =1;
        $update = DB::table("jobs")->where("id",$jobID)->update(array("is_active"=>$isActive));
        print_r(json_encode($update));
    }
    public function invite_influencer(Request $request){
        $where = array(
            'job_id' => $request->job_id,
            'inf_id' => $request->inf_id,
            'tab' => $request->tab
        );
        $res = DB::table('applicants')->where($where)->get()->count();
        if($res==0){
            $data = array(
                'job_id' => $request->job_id,
                'inf_id' => $request->inf_id,
                'tab' => $request->tab,
                'invited' =>1
            );
            $res = DB::table('applicants')->insert($data);
        }
        print_r(json_encode($res));

    }
    public function uploadShoutout(Request $request){
        $len = $request->len;
        $res = "";
        for($i=0;$i<$len;$i++){
            $file = $request->file('file'.$i);
            if($file){
                $filename = $file->getClientOriginalName();
                $location = 'shoutouts'; 
                $file->move($location, $filename);
                $ins = DB::table($request->kind)->insert(array("location"=>$filename));
                $id = DB::table($request->kind)->orderBy('id','desc')->first()->id;
                if($i==$len-1)$res = $res.$id;
                else $res = $res.$id.",";
            }
        }
        print_r(json_encode($res));
    }
    public function invite_group(Request $request){
        $data = array(
            'job_id'=>$request->job_id,
            'group_id'=>$request->group_id
        );
        $email = $request->email;
        $ins = DB::table("job_group")->insert($data);
        if($request->group_id=='0'){
            $favs = DB::table('favorites')->where('email',$email)->get()->toArray();
            foreach($favs as $key=>$fav){
                $fdata = array(
                    'job_id'=>$request->job_id,
                    'inf_id'=>$fav->inf_id,
                    'tab'=>$fav->tab,
                    'invited'=>1
                );
                DB::table('applicants')->insert($fdata);
            }
        }
        else{
            $infs = DB::table('group_infs')->where('group_id',$request->group_id)->get()->toArray();
            foreach($infs as $key=>$inf){
                $idata = array(
                    'job_id'=>$request->job_id,
                    'inf_id'=>$inf->inf_id,
                    'tab'=>$inf->social_type,
                    'invited'=>1
                );
                DB::table('applicants')->insert($idata);
            }
        }
    }
    public function get_applicants(Request $request){
        $jobID = $request->jobID;
        $applicants = DB::table("applicants")->where("job_id",$jobID)->where(array("invited"=>0,"hired"=>0))->get()->toArray();
        foreach($applicants as $key=>$value){
            $applicants[$key]->inf = DB::table("influencers_".$value->tab)->where("id",$value->inf_id)->get()->toArray()[0];
            $applicants[$key]->inf->liked = DB::table("favorites")->where(array("tab"=>$value->tab,"inf_id"=>$value->inf_id,"email"=>$request->email))->count();
        }

        print_r(json_encode($applicants));
    }
    public function hire_inf(Request $request){
        $data = array(
            'inf_id'=>$request->inf_id,
            'job_id'=>$request->job_id,
            'tab'=>$request->tab
        );
        $res = DB::table("applicants")->where($data)->update(array("hired"=>1));
        print_r(json_encode($res));

    }
    public function get_hired(Request $request){
        $jobID = $request->jobID;
        $applicants = DB::table("applicants")->where("job_id",$jobID)->where(array("hired"=>1))->get()->toArray();
        foreach($applicants as $key=>$value){
            $applicants[$key]->inf = DB::table("influencers_".$value->tab)->where("id",$value->inf_id)->get()->toArray()[0];
            $applicants[$key]->inf->liked = DB::table("favorites")->where(array("tab"=>$value->tab,"inf_id"=>$value->inf_id,"email"=>$request->email))->count();
        }

        print_r(json_encode($applicants));
    }
    public function get_current_job(Request $request){
        $jobId = $request->jobId;
        $job = DB::table("jobs")->where('id',$jobId)->get()->toArray()[0];
        $favorites = $job->favorites;
        $favorites = explode(",",$favorites);
        $arr = array();
        foreach($favorites as $key=>$value){
            $fav = DB::table("favorites")->where("id",$value)->first();
            if(isset($fav)){
                $name = DB::table("influencers_".$fav->tab)->where("id",$fav->inf_id)->first()->username;
                array_push($arr,array("value"=>$value,"label"=>$name));
            }
            
        }
        $job->favarray = $arr;

        print_r(json_encode($job));
    }
    public function get_invited(Request $request){
        $jobID = $request->jobID;
        $applicants = DB::table("applicants")->where("job_id",$jobID)->where(array("invited"=>1,"hired"=>0))->distinct()->get()->toArray();
        foreach($applicants as $key=>$value){
            $applicants[$key]->inf = DB::table("influencers_".$value->tab)->where("id",$value->inf_id)->get()->toArray()[0];
            $applicants[$key]->inf->liked = DB::table("favorites")->where(array("tab"=>$value->tab,"inf_id"=>$value->inf_id,"email"=>$request->email))->count();
        }

        print_r(json_encode($applicants));
    }
    public function create_job(Request $request)
    {   
        
        $data = $request->job;
        unset($data["typesarray"]);
        unset($data["favarray"]);
        unset($data["payselected"]);
        $res = DB::table("jobs")->insert($data);
        print_r($res);
    }
    public function update_job(Request $request)
    {   
        $jobID = $request->jobID;
        $data = $request->job;
        unset($data["typesarray"]);
        unset($data["favarray"]);
        unset($data["payselected"]);
        $res = DB::table("jobs")->where("id",$jobID)->update($data);
        print_r($res);
    }
    public function get_jobs(Request $request){
        $email= $request->email;
        $active = $request->active;
        $res = DB::table("jobs")
        ->where("jobs.email",$email)
        ->join('users','users.email','=','jobs.email')
        ->select(
            'users.*',
            'jobs.*',
            "users.email as uemail"
        )
        ->get()
        ->toArray();
        foreach($res as $key=>$value){
            $cnt = DB::table('applicants')->where("job_id",$value->id)->where("invited",0)->count();
            $res[$key]->cnt = $cnt;
            $res[$key]->time = date('Y-m-d H:i:s');
        }

        print_r(json_encode($res));
    }
    public function get_files(Request $request){
        $kind=$request->kind;
        $ids = $request->arr;
        $files = array();
        if($ids[0]!=''){
            foreach($ids as $key=>$id){
                $file = DB::table($kind)->where("id",$id)->first()->location;
                array_push($files,array('filename'=>$file,'fid'=>$id));
            }
            print_r(json_encode($files));
        }
        else{
            print_r(json_encode(array()));
        }

    }

}
