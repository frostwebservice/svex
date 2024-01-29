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
}

