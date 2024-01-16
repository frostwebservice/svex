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
    public function get_applicants(Request $request){
        $jobID = $request->jobID;
        $applicants = DB::table("applicants")->where("job_id",$jobID)->where("invited",0)->get()->toArray();
        foreach($applicants as $key=>$value){
            $applicants[$key]->inf = DB::table("influencers_".$value->tab)->where("id",$value->inf_id)->get()->toArray()[0];
            $applicants[$key]->inf->liked = DB::table("favorites")->where(array("tab"=>$value->tab,"inf_id"=>$value->inf_id,"email"=>$request->email))->count();
        }

        print_r(json_encode($applicants));
    }
    public function get_current_job(Request $request){
        $jobId = $request->jobId;
        $job = DB::table("jobs")->where('id',$jobId)->get()->toArray()[0];
        print_r(json_encode($job));
    }
    public function get_invited(Request $request){
        $jobID = $request->jobID;
        $applicants = DB::table("applicants")->where("job_id",$jobID)->where("invited",1)->get()->toArray();
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
        unset($data["payselected"]);
        $res = DB::table("jobs")->insert($data);
        print_r($res);
    }
    public function update_job(Request $request)
    {   
        $jobID = $request->jobID;
        $data = $request->job;
        unset($data["typesarray"]);
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
        print_r(json_encode($res));
    }


}
