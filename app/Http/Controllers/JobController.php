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
    public function create_job(Request $request)
    {   
        
        $data = $request->job;
        unset($data["typesarray"]);
        unset($data["payselected"]);
        $res = DB::table("jobs")->insert($data);
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
