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
}

