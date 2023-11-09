<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\BillingInfo;
use App\Models\LoginHistory;
use App\Models\Niche;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Auth\Events\Registered;
use Illuminate\Database\Eloquent\JsonEncodingException;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;

class FinderController extends Controller
{
    //
    private $status_code = 200;
    public function findWithParams(Request $request)
    {
        // print_r($request->searchParams["username"]);
        $email = $request->email;

        $tab = $request->searchParams["tab"];
        if ($tab == "instagram") {
            $infs = DB::table("influencers_instagram")->where("username", $request->searchParams["username"])->get()->toArray();
            foreach ($infs as $key => $value) {
                $count = DB::table("favorites")->where(array("tab" => "instagram", "email" => $email, "inf_id" => $value->id))->count();
                $infs[$key]->liked = $count;
            }
            return json_encode($infs);
        }
        if ($tab == "tiktok") {
            $infs = DB::table("influencers_tiktok")->where("username", $request->searchParams["username"])->get()->toArray();
            foreach ($infs as $key => $value) {
                $count = DB::table("favorites")->where(array("tab" => "tiktok", "email" => $email, "inf_id" => $value->id))->count();
                $infs[$key]->liked = $count;
            }
            return json_encode($infs);
        }
    }
    public function saveSearch(Request $request)
    {
        $params = $request->values;

        $flag = DB::table('searchs')->insert($params);
        return response()->json(["status" => $this->status_code, "success" => true, "message" => "Save data successfully", "data" => $flag]);
    }
    public function getSearchs(Request $request)
    {
        $searchs = DB::table('searchs')->where('email', $request->email)->get();
        print_r(json_encode($searchs));
    }
    public function handleLike(Request $request)
    {
        $data = array(
            "email" => $request->email,
            "tab" => $request->tab,
            "inf_id" => $request->inf_id
        );
        if ($request->liked == "1") {

            $insert = DB::table("favorites")->insert($data);
        } else if ($request->liked == "0") {

            $delete = DB::table("favorites")->where($data)->delete();
        }
        // $searchs = DB::table('searchs')->where('email', $request->email)->get();
        // print_r(json_encode($searchs));
    }

}
