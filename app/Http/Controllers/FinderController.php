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

class FinderController extends Controller
{
    //
    private $status_code = 200;
    public function update_group(Request $request){
        $data = array(
            "group_name"=>$request->group_name,
            "brief_group"=>$request->brief_group
        );
        $res = DB::table("outreachs")->where('id',$request->id)->update($data);
        print_r($res);
    }
    public function delete_group(Request $request){
        $id = $request->id;
        $res = DB::table("outreachs")->where("id",$id)->delete();
        $res = DB::table("group_infs")->where("group_id",$id)->delete();
        print_r(json_encode($res));
    }
    public function get_possible_infs(Request $request){
        $infs = array();
        $igs = DB::table('influencers_instagram')->select('public_email','username')->distinct()->get()->toArray();
        $yts = DB::table('influencers_youtube')->select('public_email','username')->distinct()->get()->toArray();
        $tts = DB::table('influencers_tiktok')->select('public_email','username')->distinct()->get()->toArray();
        $tws = DB::table('influencers_twitter')->select('public_email','username')->distinct()->get()->toArray();
        $pts = DB::table('influencers_pinterest')->select('public_email','username')->distinct()->get()->toArray();
        foreach($igs as $ig){
            if(!in_array($ig, $infs, true)&&$ig->public_email!=""){
                array_push($infs, $ig);
            }
        }
        foreach($tts as $tt){
            if(!in_array($tt, $infs, true)&&$tt->public_email!=""){
                array_push($infs, $tt);
            }
        }
        foreach($yts as $yt){
            if(!in_array($yt, $infs, true)&&$yt->public_email!=""){
                array_push($infs, $yt);
            }
        }
        foreach($tws as $tw){
            if(!in_array($tw, $infs, true)&&$tw->public_email!=""){
                array_push($infs, $tw);
            }
        }
        foreach($pts as $pt){
            if(!in_array($pt, $infs, true)&&$pt->public_email!=""){
                array_push($infs, $pt);
            }
        }
        print_r(json_encode($infs));
    }
    public function findWithParams(Request $request)
    {
        $email = $request->email;
        $params = $request->searchParams;
        $infs = $this->callSearch($email, $params);
        if($request->type=="count"){
            $search_cnt = DB::table("users")->where("email",$request->email)->first()->search_cnt+1;
            $res = DB::table("users")->where("email",$request->email)->update(array("search_cnt"=>$search_cnt));
        }

        return json_encode($infs);
    }
    public function get_inf_name(Request $request){
        $infs = DB::table($request->table)->select('username')->get();
        print_r(json_encode($infs));
    }
    public function get_total_infs(Request $request){
        $total = 0;
        $ig = DB::table('influencers_instagram')->count();
        $tt = DB::table('influencers_tiktok')->count();
        $yt = DB::table('influencers_youtube')->count();
        $pt = DB::table('influencers_pinterest')->count();
        $tw = DB::table('influencers_twitter')->count();
        $total = $ig+$tt+$yt+$tw+$pt;
        print_r(json_encode($total));

    }
    public function update_search_cnt(Request $request){
        $email = $request->email;
        $search_cnt = DB::table("users")->where("email",$request->email)->first()->search_cnt+1;
        $res = DB::table("users")->where("email",$request->email)->update(array("search_cnt"=>$search_cnt));
        print_r(json_encode($search_cnt));
    }
    public function add_group(Request $request){
        $data = array(
            'group_id' =>$request->group_id,
            'inf_id' =>$request->inf_id,
            'social_type' =>$request->tab
        );
        $exist = DB::table('group_infs')->where($data)->count();
        if($exist==0){
            $res = DB::table("group_infs")->insert($data);
        }      
       
        print_r(json_encode(1));
    }
    public function delete_user_group(Request $request){
        $id = $request-> group_inf_id;
        DB::table("group_infs")->where("id",$id)->delete();
        

    }
    public function getoutreachs(Request $request)
    {
        $email=$request->email;
        $results=array();
        $favs = DB::table("favorites")->where("email",$email)->get()->toArray();
        foreach($favs as $key=>$value){
            $favs[$key]->detail = DB::table("influencers_".$value->tab)->where("id",$value->inf_id)->get()->toArray()[0];
        }
        array_push($results,$favs);
        $reachs = DB::table("outreachs")->where("email",$email)->get()->toArray();
        foreach($reachs as $key=>$value){
            $group_inf = DB::table("group_infs")->where("group_id",$value->id)->get()->toArray();
            if(count($group_inf)==0){
                $value->detail=null;
                $arr = array();
                array_push($arr,$value);
                array_push($results,$arr);
            }
            else{
                foreach($group_inf as $key1=>$value1){
                    $group_inf[$key1]->detail = DB::table("influencers_".$value1->social_type)->where("id",$value1->inf_id)->get()->toArray()[0]; 
                    $group_inf[$key1]->group_name = DB::table("outreachs")->where("id",$value1->group_id)->get()->toArray()[0]->group_name;
                }
                array_push($results,$group_inf);
            }

        }
        print_r(json_encode($results));
    }
    public function newgroup(Request $request){
        $data=array(
            "group_name"=>$request->group_name,
            "brief_group"=>$request->brief_group,
            "email"=>$request->email
        );
        $res= DB::table("outreachs")->insert($data);
        $group_cnt = DB::table("users")->where("email",$request->email)->first()->group_cnt+1;
        $res = DB::table("users")->where("email",$request->email)->update(array("group_cnt"=>$group_cnt));
        return json_encode($res);
    }
    public function callSearch($email, $params)
    {
        $tab = $params["tab"];
        if ($tab == "instagram") {
            $where = array();
            if ($params["keywords"] != "") {
                $where['keywords'] = $params["url"];
            }
            if ($params["username"] != "") {
                $where['username'] = $params["username"];
            }
            if ($params["language"] != "All") {
                $where['language'] = $params["language"];
            }
            if ($params["location"] != "All") {
                $where['Country'] = $params["location"];
            }
            if ($params["url"] != "") {
                $where['external_url'] = $params["url"];
            }
            if ($params["verified"] == true) {
                $where['verified'] = "1";
            }
            $hashtag = (string) $params["hashtags"];
            $category = (string) $params["category"];
            $infs = DB::table("influencers_instagram")->where($where)
                ->when($params["hasPhone"] == true, function ($query) {
                    return $query->where("phone_country_code", ">", "0");
                })
                ->when($hashtag != "", function ($query) use ($hashtag) {
                    return $query->where('hashtag', 'LIKE', '%' . $hashtag . '%');
                })
                ->when($category != "All", function ($query) use ($category) {
                    return $query->where('category_niche', 'LIKE', '%' . $category . '%');
                })
                ->when($params["engagement"] == "< 1 %", function ($query) {
                    return $query->where("engagement_rate", "<", "1");
                })
                ->when($params["engagement"] == "1 % - 3.5 %", function ($query) {
                    return $query->whereBetween("engagement_rate", ["1", "3.5"]);
                })
                ->when($params["engagement"] == "3.5 % - 6 %", function ($query) {
                    return $query->whereBetween("engagement_rate", ["3.5", "6"]);
                })
                ->when($params["engagement"] == "> 6 %", function ($query) {
                    return $query->where("engagement_rate", ">", "6");
                })
                ->when($params["age"] == "Under 18", function ($query) {
                    return $query->where("age", "<", "18");
                })
                ->when($params["age"] == "18 - 24", function ($query) {
                    return $query->whereBetween("age", ["18", "24"]);
                })
                ->when($params["age"] == "25 - 29", function ($query) {
                    return $query->whereBetween("age", ["25", "29"]);
                })
                ->when($params["age"] == "30 - 34", function ($query) {
                    return $query->whereBetween("age", ["30", "34"]);
                })
                ->when($params["age"] == "35 - 39", function ($query) {
                    return $query->whereBetween("age", ["35", "39"]);
                })
                ->when($params["age"] == "40 - 44", function ($query) {
                    return $query->whereBetween("age", ["40", "44"]);
                })
                ->when($params["age"] == "45 - 49", function ($query) {
                    return $query->whereBetween("age", ["45", "49"]);
                })
                ->when($params["age"] == "50 - 54", function ($query) {
                    return $query->whereBetween("age", ["50", "54"]);
                })
                ->when($params["age"] == "55 - 59", function ($query) {
                    return $query->whereBetween("age", ["55", "59"]);
                })
                ->when($params["age"] == "60 - 64", function ($query) {
                    return $query->whereBetween("age", ["60", "64"]);
                })
                ->when($params["age"] == "65 and Over", function ($query) {
                    return $query->where("age", ">", "64");
                })
                ->when($params["gender"] == "Male", function ($query) {
                    return $query->where("gender", "male");
                })
                ->when($params["gender"] == "Female", function ($query) {
                    return $query->where("gender", "female");
                })
                ->when($params["followers_from"] == "1K", function ($query) {
                    return $query->where("follower_count", ">=", "1000");
                })
                ->when($params["followers_from"] == "5K", function ($query) {
                    return $query->where("follower_count", ">=", "5000");
                })
                ->when($params["followers_from"] == "10K", function ($query) {
                    return $query->where("follower_count", ">=", "10000");
                })
                ->when($params["followers_from"] == "25K", function ($query) {
                    return $query->where("follower_count", ">=", "25000");
                })
                ->when($params["followers_from"] == "50K", function ($query) {
                    return $query->where("follower_count", ">=", "50000");
                })
                ->when($params["followers_from"] == "100K", function ($query) {
                    return $query->where("follower_count", ">=", "100000");
                })
                ->when($params["followers_from"] == "250K", function ($query) {
                    return $query->where("follower_count", ">=", "250000");
                })
                ->when($params["followers_from"] == "500K", function ($query) {
                    return $query->where("follower_count", ">=", "500000");
                })
                ->when($params["followers_from"] == "1M", function ($query) {
                    return $query->where("follower_count", ">=", "1000000");
                })
                ->when($params["followers_from"] == "5M", function ($query) {
                    return $query->where("follower_count", ">=", "5000000");
                })
                ->when($params["followers_from"] == "10M +", function ($query) {
                    return $query->where("follower_count", ">=", "10000000");
                })
                ->when($params["followers_to"] == "5K", function ($query) {
                    return $query->where("follower_count", "<=", "5000");
                })
                ->when($params["followers_to"] == "10K", function ($query) {
                    return $query->where("follower_count", "<=", "10000");
                })
                ->when($params["followers_to"] == "25K", function ($query) {
                    return $query->where("follower_count", "<=", "25000");
                })
                ->when($params["followers_to"] == "50K", function ($query) {
                    return $query->where("follower_count", "<=", "50000");
                })
                ->when($params["followers_to"] == "100K", function ($query) {
                    return $query->where("follower_count", "<=", "100000");
                })
                ->when($params["followers_to"] == "250K", function ($query) {
                    return $query->where("follower_count", "<=", "250000");
                })
                ->when($params["followers_to"] == "500K", function ($query) {
                    return $query->where("follower_count", "<=", "500000");
                })
                ->when($params["followers_to"] == "1M", function ($query) {
                    return $query->where("follower_count", "<=", "1000000");
                })
                ->when($params["followers_to"] == "5M", function ($query) {
                    return $query->where("follower_count", "<=", "5000000");
                })
                ->when($params["followers_to"] == "10M +", function ($query) {
                    return $query->where("follower_count", "<=", "10000000");
                });
            $commentsinfs = array();
            $infs = $infs->get()->toArray();
            foreach ($infs as $key1 => $inf) {
                if ($params["avg_comment"] == "All")
                    array_push($commentsinfs, $inf);
                else if ($params["avg_comment"] == "< 0.5 %") {
                    if (100 * (double) $inf->avg_comment / (double) $inf->follower_count < 0.5)
                        array_push($commentsinfs, $inf);
                } else if ($params["avg_comment"] == "0.5 % - 1 %") {
                    if (100 * (double) $inf->avg_comment / (double) $inf->follower_count >= 0.5 && 100 * (double) $inf->avg_comment / (double) $inf->follower_count < 1)
                        array_push($commentsinfs, $inf);
                } else if ($params["avg_comment"] == "1 % - 2 %") {
                    if (100 * (double) $inf->avg_comment / (double) $inf->follower_count >= 1 && 100 * (double) $inf->avg_comment / (double) $inf->follower_count < 2)
                        array_push($commentsinfs, $inf);
                } else if ($params["avg_comment"] == "> 2 %") {
                    if (100 * (double) $inf->avg_comment / (double) $inf->follower_count >= 2)
                        array_push($commentsinfs, $inf);
                }
            }
            $likesinfs = array();
            foreach ($commentsinfs as $key => $cominf) {
                if ($params["avg_like"] == "All")
                    array_push($likesinfs, $cominf);
                if ($params["avg_like"] == "< 1 %") {
                    if (100 * (double) $cominf->avg_like / (double) $cominf->follower_count < 1)
                        array_push($likesinfs, $cominf);
                } else if ($params["avg_like"] == "1 % - 2 %") {
                    if (100 * (double) $cominf->avg_like / (double) $cominf->follower_count >= 1 && 100 * (double) $cominf->avg_like / (double) $cominf->follower_count < 2)
                        array_push($likesinfs, $cominf);
                } else if ($params["avg_like"] == "2 % - 3 %") {
                    if (100 * (double) $cominf->avg_like / (double) $cominf->follower_count >= 2 && 100 * (double) $cominf->avg_like / (double) $cominf->follower_count < 3)
                        array_push($likesinfs, $cominf);
                } else if ($params["avg_like"] == "> 3 %") {
                    if (100 * (double) $cominf->avg_like / (double) $cominf->follower_count >= 3)
                        array_push($likesinfs, $cominf);
                }
            }
            foreach ($likesinfs as $key => $value) {
                $count = DB::table("favorites")->where(array("tab" => "instagram", "email" => $email, "inf_id" => $value->id))->count();
                $likesinfs[$key]->liked = $count;
            }
            return $likesinfs;
        }
        if ($tab == "tiktok") {
            $where = array();
            if ($params["keywords"] != "") {
                $where['keywords'] = $params["url"];
            }
            if ($params["username"] != "") {
                $where['username'] = $params["username"];
            }
            if ($params["language"] != "All") {
                $where['language'] = $params["language"];
            }
            if ($params["location"] != "All") {
                $where['Country'] = $params["location"];
            }
            if ($params["url"] != "") {
                $where['external_url'] = $params["url"];
            }
            if ($params["verified"] == true) {
                $where['verified'] = "1";
            }
            $hashtag = (string) $params["hashtags"];
            $category = (string) $params["category"];
            $infs = DB::table("influencers_tiktok")->where($where)
                ->when($params["hasPhone"] == true, function ($query) {
                    return $query->where("phone_country_code", ">", "0");
                })
                ->when($hashtag != "", function ($query) use ($hashtag) {
                    return $query->where('hashtag', 'LIKE', '%' . $hashtag . '%');
                })
                ->when($category != "All", function ($query) use ($category) {
                    return $query->where('category_niche', 'LIKE', '%' . $category . '%');
                })
                ->when($params["engagement"] == "< 7 %", function ($query) {
                    return $query->where("engagement_rate", "<", "7");
                })->
                when($params["engagement"] == "7 % - 12 %", function ($query) {
                    return $query->whereBetween("engagement_rate", ["7", "12"]);
                })
                ->when($params["engagement"] == "12 % - 17 %", function ($query) {
                    return $query->whereBetween("engagement_rate", ["12", "17"]);
                })
                ->when($params["engagement"] == "> 18 %", function ($query) {
                    return $query->where("engagement_rate", ">", "17");
                })
                ->when($params["age"] == "Under 18", function ($query) {
                    return $query->where("age", "<", "18");
                })
                ->when($params["age"] == "18 - 24", function ($query) {
                    return $query->whereBetween("age", ["18", "24"]);
                })
                ->when($params["age"] == "25 - 29", function ($query) {
                    return $query->whereBetween("age", ["25", "29"]);
                })
                ->when($params["age"] == "30 - 34", function ($query) {
                    return $query->whereBetween("age", ["30", "34"]);
                })
                ->when($params["age"] == "35 - 39", function ($query) {
                    return $query->whereBetween("age", ["35", "39"]);
                })
                ->when($params["age"] == "40 - 44", function ($query) {
                    return $query->whereBetween("age", ["40", "44"]);
                })
                ->when($params["age"] == "45 - 49", function ($query) {
                    return $query->whereBetween("age", ["45", "49"]);
                })
                ->when($params["age"] == "50 - 54", function ($query) {
                    return $query->whereBetween("age", ["50", "54"]);
                })
                ->when($params["age"] == "55 - 59", function ($query) {
                    return $query->whereBetween("age", ["55", "59"]);
                })
                ->when($params["age"] == "60 - 64", function ($query) {
                    return $query->whereBetween("age", ["60", "64"]);
                })
                ->when($params["age"] == "65 and Over", function ($query) {
                    return $query->where("age", ">", "64");
                })
                ->when($params["gender"] == "Male", function ($query) {
                    return $query->where("gender", "male");
                })
                ->when($params["gender"] == "Female", function ($query) {
                    return $query->where("gender", "female");
                })
                ->when($params["followers_from"] == "1K", function ($query) {
                    return $query->where("follower_count", ">=", "1000");
                })
                ->when($params["followers_from"] == "5K", function ($query) {
                    return $query->where("follower_count", ">=", "5000");
                })
                ->when($params["followers_from"] == "10K", function ($query) {
                    return $query->where("follower_count", ">=", "10000");
                })
                ->when($params["followers_from"] == "25K", function ($query) {
                    return $query->where("follower_count", ">=", "25000");
                })
                ->when($params["followers_from"] == "50K", function ($query) {
                    return $query->where("follower_count", ">=", "50000");
                })
                ->when($params["followers_from"] == "100K", function ($query) {
                    return $query->where("follower_count", ">=", "100000");
                })
                ->when($params["followers_from"] == "250K", function ($query) {
                    return $query->where("follower_count", ">=", "250000");
                })
                ->when($params["followers_from"] == "500K", function ($query) {
                    return $query->where("follower_count", ">=", "500000");
                })
                ->when($params["followers_from"] == "1M", function ($query) {
                    return $query->where("follower_count", ">=", "1000000");
                })
                ->when($params["followers_from"] == "5M", function ($query) {
                    return $query->where("follower_count", ">=", "5000000");
                })
                ->when($params["followers_from"] == "10M +", function ($query) {
                    return $query->where("follower_count", ">=", "10000000");
                })
                ->when($params["followers_to"] == "5K", function ($query) {
                    return $query->where("follower_count", "<=", "5000");
                })
                ->when($params["followers_to"] == "10K", function ($query) {
                    return $query->where("follower_count", "<=", "10000");
                })
                ->when($params["followers_to"] == "25K", function ($query) {
                    return $query->where("follower_count", "<=", "25000");
                })
                ->when($params["followers_to"] == "50K", function ($query) {
                    return $query->where("follower_count", "<=", "50000");
                })
                ->when($params["followers_to"] == "100K", function ($query) {
                    return $query->where("follower_count", "<=", "100000");
                })
                ->when($params["followers_to"] == "250K", function ($query) {
                    return $query->where("follower_count", "<=", "250000");
                })
                ->when($params["followers_to"] == "500K", function ($query) {
                    return $query->where("follower_count", "<=", "500000");
                })
                ->when($params["followers_to"] == "1M", function ($query) {
                    return $query->where("follower_count", "<=", "1000000");
                })
                ->when($params["followers_to"] == "5M", function ($query) {
                    return $query->where("follower_count", "<=", "5000000");
                })
                ->when($params["followers_to"] == "10M +", function ($query) {
                    return $query->where("follower_count", "<=", "10000000");
                });
            $commentsinfs = array();
            $infs = $infs->get()->toArray();
            foreach ($infs as $key1 => $inf) {
                if ($params["avg_comment"] == "All")
                    array_push($commentsinfs, $inf);
                else if ($params["avg_comment"] == "< 0.5 %") {
                    if (
                        100 * (double) 
                        $inf->avg_comment / (double) $inf->follower_count < 0.5
                    )
                        array_push($commentsinfs, $inf);
                } else if
                ($params["avg_comment"] == "0.5 % - 1 %") {
                    if (
                        100 *
                        (double) $inf->avg_comment / (double) $inf->follower_count
                        >= 0.5 && 100 * (double) $inf->avg_comment / (double) 
                        $inf->follower_count < 1
                    )
                        array_push($commentsinfs, $inf);
                } else if ($params["avg_comment"] == "1 % - 2 %") {
                    if
                    (
                        100 * (double) $inf->avg_comment / (double) 
                        $inf->follower_count >= 1 && 100 * (double) 
                        $inf->avg_comment / (double) $inf->follower_count < 2
                    )
                        array_push($commentsinfs, $inf);
                } else if
                ($params["avg_comment"] == "> 2 %") {
                    if (
                        100 *
                        (double) $inf->avg_comment / (double) 
                        $inf->follower_count >= 2
                    )
                        array_push($commentsinfs, $inf);
                }
            }
            $likesinfs = array();
            foreach ($commentsinfs as $key => $cominf) {
                if ($params["avg_like"] == "All")
                    array_push($likesinfs, $cominf);
                if ($params["avg_like"] == "< 1 %") {
                    if (
                        100 *
                        (double) $cominf->avg_like / (double) 
                        $cominf->follower_count < 1
                    )
                        array_push($likesinfs, $cominf);
                } else if
                ($params["avg_like"] == "1 % - 2 %") {
                    if
                    (
                        100 * (double) $cominf->avg_like / (double) 
                        $cominf->follower_count >= 1 && 100 *
                        (double) $cominf->avg_like / (double) 
                        $cominf->follower_count < 2
                    )
                        array_push($likesinfs, $cominf);
                } else
                    if ($params["avg_like"] == "2 % - 3 %") {
                        if (
                            100 * (double) $cominf->avg_like /
                            (double) $cominf->follower_count >= 2 &&
                            100 * (double) $cominf->avg_like /
                            (double) $cominf->follower_count < 3
                        )
                            array_push($likesinfs, $cominf);
                    } else if
                    ($params["avg_like"] == "> 3 %") {
                        if (
                            100 * (double) $cominf->avg_like
                            / (double) $cominf->follower_count
                            >= 3
                        )
                            array_push($likesinfs, $cominf);
                    }
            }
            foreach ($likesinfs as $key => $value) {
                $count =
                    DB::table("favorites")->where(
                        array(
                            "tab"
                            => "tiktok",
                            "email" => $email,
                            "inf_id" => $value->id
                        )
                    )->count();
                $likesinfs[$key]->liked = $count;
            }
            return $likesinfs;
        }
        if ($tab == "youtube") {
            $where = array();
            if ($params["keywords"] != "") {
                $where['keywords'] = $params["url"];
            }
            if ($params["username"] != "") {
                $where['username'] = $params["username"];
            }
            if ($params["language"] != "All") {
                $where['language'] = $params["language"];
            }
            if ($params["location"] != "All") {
                $where['Country'] = $params["location"];
            }
            if ($params["url"] != "") {
                $where['external_url'] = $params["url"];
            }
            if ($params["verified"] == true) {
                $where['verified'] = "1";
            }
            $category = (string) $params["category"];
            $infs = DB::table("influencers_youtube")->where($where)
                ->when($params["hasPhone"] == true, function ($query) {
                    return $query->where("phone_country_code", ">", "0");
                })
                ->when($category != "All", function ($query) use ($category) {
                    return $query->where('category_niche', 'LIKE', '%' . $category . '%');
                })
                ->when($params["engagement"] == "< 0.5 %", function ($query) {
                    return $query->where("engagement_rate", "<", "0.5");
                })
                ->when($params["engagement"] == "0.5 % - 3 %", function ($query) {
                    return $query->whereBetween("engagement_rate", ["0.5", "3"]);
                })
                ->when($params["engagement"] == "3 % - 5 %", function ($query) {
                    return $query->whereBetween("engagement_rate", ["3", "5"]);
                })
                ->when($params["engagement"] == "> 5 %", function ($query) {
                    return $query->where("engagement_rate", ">", "5");
                })
                ->when($params["age"] == "Under 18", function ($query) {
                    return $query->where("age", "<", "18");
                })
                ->when($params["age"] == "18 - 24", function ($query) {
                    return $query->whereBetween("age", ["18", "24"]);
                })
                ->when($params["age"] == "25 - 29", function ($query) {
                    return $query->whereBetween("age", ["25", "29"]);
                })
                ->when($params["age"] == "30 - 34", function ($query) {
                    return $query->whereBetween("age", ["30", "34"]);
                })
                ->when($params["age"] == "35 - 39", function ($query) {
                    return $query->whereBetween("age", ["35", "39"]);
                })
                ->when($params["age"] == "40 - 44", function ($query) {
                    return $query->whereBetween("age", ["40", "44"]);
                })
                ->when($params["age"] == "45 - 49", function ($query) {
                    return $query->whereBetween("age", ["45", "49"]);
                })
                ->when($params["age"] == "50 - 54", function ($query) {
                    return $query->whereBetween("age", ["50", "54"]);
                })
                ->when($params["age"] == "55 - 59", function ($query) {
                    return $query->whereBetween("age", ["55", "59"]);
                })
                ->when($params["age"] == "60 - 64", function ($query) {
                    return $query->whereBetween("age", ["60", "64"]);
                })
                ->when($params["age"] == "65 and Over", function ($query) {
                    return $query->where("age", ">", "64");
                })
                ->when($params["gender"] == "Male", function ($query) {
                    return $query->where("gender", "male");
                })
                ->when($params["gender"] == "Female", function ($query) {
                    return $query->where("gender", "female");
                })
                ->when($params["subscribers_from"] == "1K", function ($query) {
                    return $query->where("follower_count", ">=", "1000");
                })
                ->when($params["subscribers_from"] == "5K", function ($query) {
                    return $query->where("follower_count", ">=", "5000");
                })
                ->when($params["subscribers_from"] == "10K", function ($query) {
                    return $query->where("follower_count", ">=", "10000");
                })
                ->when($params["subscribers_from"] == "25K", function ($query) {
                    return $query->where("follower_count", ">=", "25000");
                })
                ->when($params["subscribers_from"] == "50K", function ($query) {
                    return $query->where("follower_count", ">=", "50000");
                })
                ->when($params["subscribers_from"] == "100K", function ($query) {
                    return $query->where("follower_count", ">=", "100000");
                })
                ->when($params["subscribers_from"] == "250K", function ($query) {
                    return $query->where("follower_count", ">=", "250000");
                })
                ->when($params["subscribers_from"] == "500K", function ($query) {
                    return $query->where("follower_count", ">=", "500000");
                })
                ->when($params["subscribers_from"] == "1M", function ($query) {
                    return $query->where("follower_count", ">=", "1000000");
                })
                ->when($params["subscribers_from"] == "5M", function ($query) {
                    return $query->where("follower_count", ">=", "5000000");
                })
                ->when($params["subscribers_from"] == "10M +", function ($query) {
                    return $query->where("follower_count", ">=", "10000000");
                })
                ->when($params["subscribers_to"] == "5K", function ($query) {
                    return $query->where("follower_count", "<=", "5000");
                })
                ->when($params["subscribers_to"] == "10K", function ($query) {
                    return $query->where("follower_count", "<=", "10000");
                })
                ->when($params["subscribers_to"] == "25K", function ($query) {
                    return $query->where("follower_count", "<=", "25000");
                })
                ->when($params["subscribers_to"] == "50K", function ($query) {
                    return $query->where("follower_count", "<=", "50000");
                })
                ->when($params["subscribers_to"] == "100K", function ($query) {
                    return $query->where("follower_count", "<=", "100000");
                })
                ->when($params["subscribers_to"] == "250K", function ($query) {
                    return $query->where("follower_count", "<=", "250000");
                })
                ->when($params["subscribers_to"] == "500K", function ($query) {
                    return $query->where("follower_count", "<=", "500000");
                })
                ->when($params["subscribers_to"] == "1M", function ($query) {
                    return $query->where("follower_count", "<=", "1000000");
                })
                ->when($params["subscribers_to"] == "5M", function ($query) {
                    return $query->where("follower_count", "<=", "5000000");
                })
                ->when($params["subscribers_to"] == "10M +", function ($query) {
                    return $query->where("follower_count", "<=", "10000000");
                });
            $commentsinfs = array();
            $infs = $infs->get()->toArray();
            foreach ($infs as $key1 => $inf) {
                if ($params["avg_comment"] == "All")
                    array_push($commentsinfs, $inf);
                else if ($params["avg_comment"] == "< 0.5 %") {
                    if (100 * (double) $inf->avg_comment / (double) $inf->follower_count < 0.5)
                        array_push($commentsinfs, $inf);
                } else if ($params["avg_comment"] == "0.5 % - 1 %") {
                    if (100 * (double) $inf->avg_comment / (double) $inf->follower_count >= 0.5 && 100 * (double) $inf->avg_comment / (double) $inf->follower_count < 1)
                        array_push($commentsinfs, $inf);
                } else if ($params["avg_comment"] == "1 % - 2 %") {
                    if (100 * (double) $inf->avg_comment / (double) $inf->follower_count >= 1 && 100 * (double) $inf->avg_comment / (double) $inf->follower_count < 2)
                        array_push($commentsinfs, $inf);
                } else if ($params["avg_comment"] == "> 2 %") {
                    if (100 * (double) $inf->avg_comment / (double) $inf->follower_count >= 2)
                        array_push($commentsinfs, $inf);
                }
            }
            $likesinfs = array();
            foreach ($commentsinfs as $key => $cominf) {
                if ($params["avg_like"] == "All")
                    array_push($likesinfs, $cominf);
                if ($params["avg_like"] == "< 1 %") {
                    if (100 * (double) $cominf->avg_like / (double) $cominf->follower_count < 1)
                        array_push($likesinfs, $cominf);
                } else if ($params["avg_like"] == "1 % - 2 %") {
                    if (100 * (double) $cominf->avg_like / (double) $cominf->follower_count >= 1 && 100 * (double) $cominf->avg_like / (double) $cominf->follower_count < 2)
                        array_push($likesinfs, $cominf);
                } else if ($params["avg_like"] == "2 % - 3 %") {
                    if (100 * (double) $cominf->avg_like / (double) $cominf->follower_count >= 2 && 100 * (double) $cominf->avg_like / (double) $cominf->follower_count < 3)
                        array_push($likesinfs, $cominf);
                } else if ($params["avg_like"] == "> 3 %") {
                    if (100 * (double) $cominf->avg_like / (double) $cominf->follower_count >= 3)
                        array_push($likesinfs, $cominf);
                }
            }
            $dislikesinfs = array();
            foreach ($likesinfs as $key => $likesinf) {
                if ($params["avg_dislike"] == "All")
                    array_push($dislikesinfs, $likesinf);
                if ($params["avg_dislike"] == "< 1 %") {
                    if (100 * (double) $likesinf->avg_dislike / (double) $likesinf->follower_count < 1)
                        array_push($dislikesinfs, $likesinf);
                } else if ($params["avg_dislike"] == "1 % - 2 %") {
                    if (100 * (double) $likesinf->avg_dislike / (double) $likesinf->follower_count >= 1 && 100 * (double) $likesinf->avg_dislike / (double) $likesinf->follower_count < 2)
                        array_push($dislikesinfs, $likesinf);
                } else if ($params["avg_dislike"] == "2 % - 3 %") {
                    if (100 * (double) $likesinf->avg_dislike / (double) $likesinf->follower_count >= 2 && 100 * (double) $likesinf->avg_dislike / (double) $likesinf->follower_count < 3)
                        array_push($dislikesinfs, $likesinf);
                } else if ($params["avg_dislike"] == "> 3 %") {
                    if (100 * (double) $likesinf->avg_dislike / (double) $likesinf->follower_count >= 3)
                        array_push($dislikesinfs, $likesinf);
                }
            }
            $avgviews = array();
            foreach ($dislikesinfs as $key => $dislikesinf) {
                if ($params["avg_view"] == "All")
                    array_push($avgviews, $dislikesinf);
                if ($params["avg_view"] == "< 50 %") {
                    if (100 * (double) $dislikesinf->avg_view / (double) $dislikesinf->follower_count < 50)
                        array_push($avgviews, $dislikesinf);
                } else if ($params["avg_view"] == "50 % - 60 %") {
                    if (100 * (double) $dislikesinf->avg_view / (double) $dislikesinf->follower_count >= 50 && 100 * (double) $dislikesinf->avg_view / (double) $dislikesinf->follower_count < 60)
                        array_push($avgviews, $dislikesinf);
                } else if ($params["avg_view"] == "60 % - 70 %") {
                    if (100 * (double) $dislikesinf->avg_view / (double) $dislikesinf->follower_count >= 60 && 100 * (double) $dislikesinf->avg_view / (double) $dislikesinf->follower_count < 70)
                        array_push($avgviews, $dislikesinf);
                } else if ($params["avg_view"] == "> 70 %") {
                    if (100 * (double) $dislikesinf->avg_view / (double) $dislikesinf->follower_count >= 70)
                        array_push($avgviews, $dislikesinf);
                }
            }
            foreach ($avgviews as $key => $value) {
                $count = DB::table("favorites")->where(array("tab" => "youtube", "email" => $email, "inf_id" => $value->id))->count();
                $avgviews[$key]->liked = $count;
            }
            return $avgviews;
        }
        if ($tab == "twitter") {
            $where = array();
            if ($params["keywords"] != "") {
                $where['keywords'] = $params["url"];
            }
            if ($params["username"] != "") {
                $where['username'] = $params["username"];
            }
            if ($params["language"] != "All") {
                $where['language'] = $params["language"];
            }
            if ($params["location"] != "All") {
                $where['Country'] = $params["location"];
            }
            if ($params["url"] != "") {
                $where['external_url'] = $params["url"];
            }
            if ($params["verified"] == true) {
                $where['verified'] = "1";
            }
            $category = (string) $params["category"];
            $infs = DB::table("influencers_twitter")->where($where)
                ->when($params["hasPhone"] == true, function ($query) {
                    return $query->where("phone_country_code", ">", "0");
                })
                ->when($category != "All", function ($query) use ($category) {
                    return $query->where('category_niche', 'LIKE', '%' . $category . '%');
                })
                ->when($params["engagement"] == "< 0.5 %", function ($query) {
                    return $query->where("engagement_rate", "<", "0.5");
                })
                ->when($params["engagement"] == "0.5 % - 0.75 %", function ($query) {
                    return $query->whereBetween("engagement_rate", ["0.5", "0.75"]);
                })
                ->when($params["engagement"] == "0.75 % - 1.25 %", function ($query) {
                    return $query->whereBetween("engagement_rate", ["0.75", "1.25"]);
                })
                ->when($params["engagement"] == "> 1.25 %", function ($query) {
                    return $query->where("engagement_rate", ">", "1.25");
                })
                ->when($params["age"] == "Under 18", function ($query) {
                    return $query->where("age", "<", "18");
                })
                ->when($params["age"] == "18 - 24", function ($query) {
                    return $query->whereBetween("age", ["18", "24"]);
                })
                ->when($params["age"] == "25 - 29", function ($query) {
                    return $query->whereBetween("age", ["25", "29"]);
                })
                ->when($params["age"] == "30 - 34", function ($query) {
                    return $query->whereBetween("age", ["30", "34"]);
                })
                ->when($params["age"] == "35 - 39", function ($query) {
                    return $query->whereBetween("age", ["35", "39"]);
                })
                ->when($params["age"] == "40 - 44", function ($query) {
                    return $query->whereBetween("age", ["40", "44"]);
                })
                ->when($params["age"] == "45 - 49", function ($query) {
                    return $query->whereBetween("age", ["45", "49"]);
                })
                ->when($params["age"] == "50 - 54", function ($query) {
                    return $query->whereBetween("age", ["50", "54"]);
                })
                ->when($params["age"] == "55 - 59", function ($query) {
                    return $query->whereBetween("age", ["55", "59"]);
                })
                ->when($params["age"] == "60 - 64", function ($query) {
                    return $query->whereBetween("age", ["60", "64"]);
                })
                ->when($params["age"] == "65 and Over", function ($query) {
                    return $query->where("age", ">", "64");
                })
                ->when($params["gender"] == "Male", function ($query) {
                    return $query->where("gender", "male");
                })
                ->when($params["gender"] == "Female", function ($query) {
                    return $query->where("gender", "female");
                })
                ->when($params["followers_from"] == "1K", function ($query) {
                    return $query->where("follower_count", ">=", "1000");
                })
                ->when($params["followers_from"] == "5K", function ($query) {
                    return $query->where("follower_count", ">=", "5000");
                })
                ->when($params["followers_from"] == "10K", function ($query) {
                    return $query->where("follower_count", ">=", "10000");
                })
                ->when($params["followers_from"] == "25K", function ($query) {
                    return $query->where("follower_count", ">=", "25000");
                })
                ->when($params["followers_from"] == "50K", function ($query) {
                    return $query->where("follower_count", ">=", "50000");
                })
                ->when($params["followers_from"] == "100K", function ($query) {
                    return $query->where("follower_count", ">=", "100000");
                })
                ->when($params["followers_from"] == "250K", function ($query) {
                    return $query->where("follower_count", ">=", "250000");
                })
                ->when($params["followers_from"] == "500K", function ($query) {
                    return $query->where("follower_count", ">=", "500000");
                })
                ->when($params["followers_from"] == "1M", function ($query) {
                    return $query->where("follower_count", ">=", "1000000");
                })
                ->when($params["followers_from"] == "5M", function ($query) {
                    return $query->where("follower_count", ">=", "5000000");
                })
                ->when($params["followers_from"] == "10M +", function ($query) {
                    return $query->where("follower_count", ">=", "10000000");
                })
                ->when($params["followers_to"] == "5K", function ($query) {
                    return $query->where("follower_count", "<=", "5000");
                })
                ->when($params["followers_to"] == "10K", function ($query) {
                    return $query->where("follower_count", "<=", "10000");
                })
                ->when($params["followers_to"] == "25K", function ($query) {
                    return $query->where("follower_count", "<=", "25000");
                })
                ->when($params["followers_to"] == "50K", function ($query) {
                    return $query->where("follower_count", "<=", "50000");
                })
                ->when($params["followers_to"] == "100K", function ($query) {
                    return $query->where("follower_count", "<=", "100000");
                })
                ->when($params["followers_to"] == "250K", function ($query) {
                    return $query->where("follower_count", "<=", "250000");
                })
                ->when($params["followers_to"] == "500K", function ($query) {
                    return $query->where("follower_count", "<=", "500000");
                })
                ->when($params["followers_to"] == "1M", function ($query) {
                    return $query->where("follower_count", "<=", "1000000");
                })
                ->when($params["followers_to"] == "5M", function ($query) {
                    return $query->where("follower_count", "<=", "5000000");
                })
                ->when($params["followers_to"] == "10M +", function ($query) {
                    return $query->where("follower_count", "<=", "10000000");
                });
            $commentsinfs = array();
            $infs = $infs->get()->toArray();
            foreach ($infs as $key1 => $inf) {
                if ($params["avg_comment"] == "All")
                    array_push($commentsinfs, $inf);
                else if ($params["avg_comment"] == "< 0.5 %") {
                    if (100 * (double) $inf->avg_comment / (double) $inf->follower_count < 0.5)
                        array_push($commentsinfs, $inf);
                } else if ($params["avg_comment"] == "0.5 % - 1 %") {
                    if (100 * (double) $inf->avg_comment / (double) $inf->follower_count >= 0.5 && 100 * (double) $inf->avg_comment / (double) $inf->follower_count < 1)
                        array_push($commentsinfs, $inf);
                } else if ($params["avg_comment"] == "1 % - 2 %") {
                    if (100 * (double) $inf->avg_comment / (double) $inf->follower_count >= 1 && 100 * (double) $inf->avg_comment / (double) $inf->follower_count < 2)
                        array_push($commentsinfs, $inf);
                } else if ($params["avg_comment"] == "> 2 %") {
                    if (100 * (double) $inf->avg_comment / (double) $inf->follower_count >= 2)
                        array_push($commentsinfs, $inf);
                }
            }
            $likesinfs = array();
            foreach ($commentsinfs as $key => $cominf) {
                if ($params["avg_like"] == "All")
                    array_push($likesinfs, $cominf);
                if ($params["avg_like"] == "< 1 %") {
                    if (100 * (double) $cominf->avg_like / (double) $cominf->follower_count < 1)
                        array_push($likesinfs, $cominf);
                } else if ($params["avg_like"] == "1 % - 2 %") {
                    if (100 * (double) $cominf->avg_like / (double) $cominf->follower_count >= 1 && 100 * (double) $cominf->avg_like / (double) $cominf->follower_count < 2)
                        array_push($likesinfs, $cominf);
                } else if ($params["avg_like"] == "2 % - 3 %") {
                    if (100 * (double) $cominf->avg_like / (double) $cominf->follower_count >= 2 && 100 * (double) $cominf->avg_like / (double) $cominf->follower_count < 3)
                        array_push($likesinfs, $cominf);
                } else if ($params["avg_like"] == "> 3 %") {
                    if (100 * (double) $cominf->avg_like / (double) $cominf->follower_count >= 3)
                        array_push($likesinfs, $cominf);
                }
            }
            foreach ($likesinfs as $key => $value) {
                $count = DB::table("favorites")->where(array("tab" => "twitter", "email" => $email, "inf_id" => $value->id))->count();
                $likesinfs[$key]->liked = $count;
            }
            return $likesinfs;
        }
        if ($tab == "pinterest") {
            $where = array();
            if ($params["keywords"] != "") {
                $where['keywords'] = $params["url"];
            }
            if ($params["username"] != "") {
                $where['username'] = $params["username"];
            }
            if ($params["language"] != "All") {
                $where['language'] = $params["language"];
            }
            if ($params["location"] != "All") {
                $where['Country'] = $params["location"];
            }
            if ($params["url"] != "") {
                $where['external_url'] = $params["url"];
            }
            if ($params["verified"] == true) {
                $where['verified'] = "1";
            }
            $category = (string) $params["category"];
            $infs = DB::table("influencers_pinterest")->where($where)
                ->when($params["hasPhone"] == true, function ($query) {
                    return $query->where("phone_country_code", ">", "0");
                })
                ->when($category != "All", function ($query) use ($category) {
                    return $query->where('category_niche', 'LIKE', '%' . $category . '%');
                })
                ->when($params["engagement"] == "< 0.5 %", function ($query) {
                    return $query->where("engagement_rate", "<", "0.5");
                })
                ->when($params["engagement"] == "0.5 % - 0.75 %", function ($query) {
                    return $query->whereBetween("engagement_rate", ["0.5", "0.75"]);
                })
                ->when($params["engagement"] == "0.75 % - 1.25 %", function ($query) {
                    return $query->whereBetween("engagement_rate", ["0.75", "1.25"]);
                })
                ->when($params["engagement"] == "> 1.25 %", function ($query) {
                    return $query->where("engagement_rate", ">", "1.25");
                })
                ->when($params["age"] == "Under 18", function ($query) {
                    return $query->where("age", "<", "18");
                })
                ->when($params["age"] == "18 - 24", function ($query) {
                    return $query->whereBetween("age", ["18", "24"]);
                })
                ->when($params["age"] == "25 - 29", function ($query) {
                    return $query->whereBetween("age", ["25", "29"]);
                })
                ->when($params["age"] == "30 - 34", function ($query) {
                    return $query->whereBetween("age", ["30", "34"]);
                })
                ->when($params["age"] == "35 - 39", function ($query) {
                    return $query->whereBetween("age", ["35", "39"]);
                })
                ->when($params["age"] == "40 - 44", function ($query) {
                    return $query->whereBetween("age", ["40", "44"]);
                })
                ->when($params["age"] == "45 - 49", function ($query) {
                    return $query->whereBetween("age", ["45", "49"]);
                })
                ->when($params["age"] == "50 - 54", function ($query) {
                    return $query->whereBetween("age", ["50", "54"]);
                })
                ->when($params["age"] == "55 - 59", function ($query) {
                    return $query->whereBetween("age", ["55", "59"]);
                })
                ->when($params["age"] == "60 - 64", function ($query) {
                    return $query->whereBetween("age", ["60", "64"]);
                })
                ->when($params["age"] == "65 and Over", function ($query) {
                    return $query->where("age", ">", "64");
                })
                ->when($params["gender"] == "Male", function ($query) {
                    return $query->where("gender", "male");
                })
                ->when($params["gender"] == "Female", function ($query) {
                    return $query->where("gender", "female");
                })
                ->when($params["followers_from"] == "1K", function ($query) {
                    return $query->where("follower_count", ">=", "1000");
                })
                ->when($params["followers_from"] == "5K", function ($query) {
                    return $query->where("follower_count", ">=", "5000");
                })
                ->when($params["followers_from"] == "10K", function ($query) {
                    return $query->where("follower_count", ">=", "10000");
                })
                ->when($params["followers_from"] == "25K", function ($query) {
                    return $query->where("follower_count", ">=", "25000");
                })
                ->when($params["followers_from"] == "50K", function ($query) {
                    return $query->where("follower_count", ">=", "50000");
                })
                ->when($params["followers_from"] == "100K", function ($query) {
                    return $query->where("follower_count", ">=", "100000");
                })
                ->when($params["followers_from"] == "250K", function ($query) {
                    return $query->where("follower_count", ">=", "250000");
                })
                ->when($params["followers_from"] == "500K", function ($query) {
                    return $query->where("follower_count", ">=", "500000");
                })
                ->when($params["followers_from"] == "1M", function ($query) {
                    return $query->where("follower_count", ">=", "1000000");
                })
                ->when($params["followers_from"] == "5M", function ($query) {
                    return $query->where("follower_count", ">=", "5000000");
                })
                ->when($params["followers_from"] == "10M +", function ($query) {
                    return $query->where("follower_count", ">=", "10000000");
                })
                ->when($params["followers_to"] == "5K", function ($query) {
                    return $query->where("follower_count", "<=", "5000");
                })
                ->when($params["followers_to"] == "10K", function ($query) {
                    return $query->where("follower_count", "<=", "10000");
                })
                ->when($params["followers_to"] == "25K", function ($query) {
                    return $query->where("follower_count", "<=", "25000");
                })
                ->when($params["followers_to"] == "50K", function ($query) {
                    return $query->where("follower_count", "<=", "50000");
                })
                ->when($params["followers_to"] == "100K", function ($query) {
                    return $query->where("follower_count", "<=", "100000");
                })
                ->when($params["followers_to"] == "250K", function ($query) {
                    return $query->where("follower_count", "<=", "250000");
                })
                ->when($params["followers_to"] == "500K", function ($query) {
                    return $query->where("follower_count", "<=", "500000");
                })
                ->when($params["followers_to"] == "1M", function ($query) {
                    return $query->where("follower_count", "<=", "1000000");
                })
                ->when($params["followers_to"] == "5M", function ($query) {
                    return $query->where("follower_count", "<=", "5000000");
                })
                ->when($params["followers_to"] == "10M +", function ($query) {
                    return $query->where("follower_count", "<=", "10000000");
                });
            $commentsinfs = array();
            $infs = $infs->get()->toArray();
            foreach ($infs as $key1 => $inf) {
                if ($params["avg_comment"] == "All")
                    array_push($commentsinfs, $inf);
                else if ($params["avg_comment"] == "< 0.5 %") {
                    if (100 * (double) $inf->avg_comment / (double) $inf->follower_count < 0.5)
                        array_push($commentsinfs, $inf);
                } else if ($params["avg_comment"] == "0.5 % - 1 %") {
                    if (100 * (double) $inf->avg_comment / (double) $inf->follower_count >= 0.5 && 100 * (double) $inf->avg_comment / (double) $inf->follower_count < 1)
                        array_push($commentsinfs, $inf);
                } else if ($params["avg_comment"] == "1 % - 2 %") {
                    if (100 * (double) $inf->avg_comment / (double) $inf->follower_count >= 1 && 100 * (double) $inf->avg_comment / (double) $inf->follower_count < 2)
                        array_push($commentsinfs, $inf);
                } else if ($params["avg_comment"] == "> 2 %") {
                    if (100 * (double) $inf->avg_comment / (double) $inf->follower_count >= 2)
                        array_push($commentsinfs, $inf);
                }
            }
            $likesinfs = array();
            foreach ($commentsinfs as $key => $cominf) {
                if ($params["avg_like"] == "All")
                    array_push($likesinfs, $cominf);
                if ($params["avg_like"] == "< 1 %") {
                    if (100 * (double) $cominf->avg_like / (double) $cominf->follower_count < 1)
                        array_push($likesinfs, $cominf);
                } else if ($params["avg_like"] == "1 % - 2 %") {
                    if (100 * (double) $cominf->avg_like / (double) $cominf->follower_count >= 1 && 100 * (double) $cominf->avg_like / (double) $cominf->follower_count < 2)
                        array_push($likesinfs, $cominf);
                } else if ($params["avg_like"] == "2 % - 3 %") {
                    if (100 * (double) $cominf->avg_like / (double) $cominf->follower_count >= 2 && 100 * (double) $cominf->avg_like / (double) $cominf->follower_count < 3)
                        array_push($likesinfs, $cominf);
                } else if ($params["avg_like"] == "> 3 %") {
                    if (100 * (double) $cominf->avg_like / (double) $cominf->follower_count >= 3)
                        array_push($likesinfs, $cominf);
                }
            }
            foreach ($likesinfs as $key => $value) {
                $count = DB::table("favorites")->where(array("tab" => "pinterest", "email" => $email, "inf_id" => $value->id))->count();
                $likesinfs[$key]->liked = $count;
            }
            return $likesinfs;
        }
        if ($tab == "linkedin") {
            $where = array();
            if ($params["keywords"] != "") {
                $where['keywords'] = $params["url"];
            }
            if ($params["username"] != "") {
                $where['username'] = $params["username"];
            }
            if ($params["language"] != "All") {
                $where['language'] = $params["language"];
            }
            if ($params["location"] != "All") {
                $where['Country'] = $params["location"];
            }
            if ($params["url"] != "") {
                $where['external_url'] = $params["url"];
            }
            if ($params["verified"] == true) {
                $where['verified'] = "1";
            }
            $category = (string) $params["category"];
            $industry = (string) $params["industry"];
            $skill = (string) $params["skills"];
            $infs = DB::table("influencers_linkedin")->where($where)
                ->when($params["hasPhone"] == true, function ($query) {
                    return $query->where("phone_country_code", ">", "0");
                })
                ->when($category != "All", function ($query) use ($category) {
                    return $query->where('category_niche', 'LIKE', '%' . $category . '%');
                })
                ->when($industry != "All", function ($query) use ($industry) {
                    return $query->where('industry', 'LIKE', '%' . $industry . '%');
                })
                ->when($skill != "All", function ($query) use ($skill) {
                    return $query->where('skills', 'LIKE', '%' . $skill . '%');
                })
                ->when($params["engagement"] == "< 0.5 %", function ($query) {
                    return $query->where("engagement_rate", "<", "0.5");
                })
                ->when($params["engagement"] == "0.5 % - 0.75 %", function ($query) {
                    return $query->whereBetween("engagement_rate", ["0.5", "0.75"]);
                })
                ->when($params["engagement"] == "0.75 % - 1.25 %", function ($query) {
                    return $query->whereBetween("engagement_rate", ["0.75", "1.25"]);
                })
                ->when($params["engagement"] == "> 1.25 %", function ($query) {
                    return $query->where("engagement_rate", ">", "1.25");
                })
                ->when($params["age"] == "Under 18", function ($query) {
                    return $query->where("age", "<", "18");
                })
                ->when($params["age"] == "18 - 24", function ($query) {
                    return $query->whereBetween("age", ["18", "24"]);
                })
                ->when($params["age"] == "25 - 29", function ($query) {
                    return $query->whereBetween("age", ["25", "29"]);
                })
                ->when($params["age"] == "30 - 34", function ($query) {
                    return $query->whereBetween("age", ["30", "34"]);
                })
                ->when($params["age"] == "35 - 39", function ($query) {
                    return $query->whereBetween("age", ["35", "39"]);
                })
                ->when($params["age"] == "40 - 44", function ($query) {
                    return $query->whereBetween("age", ["40", "44"]);
                })
                ->when($params["age"] == "45 - 49", function ($query) {
                    return $query->whereBetween("age", ["45", "49"]);
                })
                ->when($params["age"] == "50 - 54", function ($query) {
                    return $query->whereBetween("age", ["50", "54"]);
                })
                ->when($params["age"] == "55 - 59", function ($query) {
                    return $query->whereBetween("age", ["55", "59"]);
                })
                ->when($params["age"] == "60 - 64", function ($query) {
                    return $query->whereBetween("age", ["60", "64"]);
                })
                ->when($params["age"] == "65 and Over", function ($query) {
                    return $query->where("age", ">", "64");
                })
                ->when($params["gender"] == "Male", function ($query) {
                    return $query->where("gender", "male");
                })
                ->when($params["gender"] == "Female", function ($query) {
                    return $query->where("gender", "female");
                })
                ->when($params["followers_from"] == "1K", function ($query) {
                    return $query->where("follower_count", ">=", "1000");
                })
                ->when($params["followers_from"] == "5K", function ($query) {
                    return $query->where("follower_count", ">=", "5000");
                })
                ->when($params["followers_from"] == "10K", function ($query) {
                    return $query->where("follower_count", ">=", "10000");
                })
                ->when($params["followers_from"] == "25K", function ($query) {
                    return $query->where("follower_count", ">=", "25000");
                })
                ->when($params["followers_from"] == "50K", function ($query) {
                    return $query->where("follower_count", ">=", "50000");
                })
                ->when($params["followers_from"] == "100K", function ($query) {
                    return $query->where("follower_count", ">=", "100000");
                })
                ->when($params["followers_from"] == "250K", function ($query) {
                    return $query->where("follower_count", ">=", "250000");
                })
                ->when($params["followers_from"] == "500K", function ($query) {
                    return $query->where("follower_count", ">=", "500000");
                })
                ->when($params["followers_from"] == "1M", function ($query) {
                    return $query->where("follower_count", ">=", "1000000");
                })
                ->when($params["followers_from"] == "5M", function ($query) {
                    return $query->where("follower_count", ">=", "5000000");
                })
                ->when($params["followers_from"] == "10M +", function ($query) {
                    return $query->where("follower_count", ">=", "10000000");
                })
                ->when($params["followers_to"] == "5K", function ($query) {
                    return $query->where("follower_count", "<=", "5000");
                })
                ->when($params["followers_to"] == "10K", function ($query) {
                    return $query->where("follower_count", "<=", "10000");
                })
                ->when($params["followers_to"] == "25K", function ($query) {
                    return $query->where("follower_count", "<=", "25000");
                })
                ->when($params["followers_to"] == "50K", function ($query) {
                    return $query->where("follower_count", "<=", "50000");
                })
                ->when($params["followers_to"] == "100K", function ($query) {
                    return $query->where("follower_count", "<=", "100000");
                })
                ->when($params["followers_to"] == "250K", function ($query) {
                    return $query->where("follower_count", "<=", "250000");
                })
                ->when($params["followers_to"] == "500K", function ($query) {
                    return $query->where("follower_count", "<=", "500000");
                })
                ->when($params["followers_to"] == "1M", function ($query) {
                    return $query->where("follower_count", "<=", "1000000");
                })
                ->when($params["followers_to"] == "5M", function ($query) {
                    return $query->where("follower_count", "<=", "5000000");
                })
                ->when($params["followers_to"] == "10M +", function ($query) {
                    return $query->where("follower_count", "<=", "10000000");
                });
            $connectionsinfs = array();
            $infs = $infs->get()->toArray();
            foreach ($infs as $key1 => $inf) {
                if ($params["connections"] == "All")
                    array_push($connectionsinfs, $inf);
                else if ($params["connections"] == "< 500") {
                    if ($inf->connections < "500")
                        array_push($connectionsinfs, $inf);
                } else if ($params["connections"] == "500 - 750") {
                    if ($inf->connections >= "500" && $inf->avg_comment < "750")
                        array_push($connectionsinfs, $inf);
                } else if ($params["connections"] == "750 - 1000") {
                    if ($inf->connections >= "750" && $inf->avg_comment < "1000")
                        array_push($connectionsinfs, $inf);
                } else if ($params["connections"] == "> 1000") {
                    if ($inf->connections >= "1000")
                        array_push($connectionsinfs, $inf);
                }
            }
            foreach ($connectionsinfs as $key => $value) {
                $count = DB::table("favorites")->where(array("tab" => "linkedin", "email" => $email, "inf_id" => $value->id))->count();
                $connectionsinfs[$key]->liked = $count;
            }
            return $connectionsinfs;
        }
    }
    public function cvf_convert_object_to_array($data)
    {
        if (is_object($data)) {
            $data = get_object_vars($data);
            return $data;
        }
        return $data;

    }
    public function getSearchs(Request $request)
    {
        $email = $request->email;
        $searchs = DB::table('searchs')->where('email', $email)->get()->toArray();
        foreach ($searchs as $key => $value) {

            $rlt = $this->callSearch($email, $this->cvf_convert_object_to_array($value));
            $searchs[$key]->counter = count($rlt);
        }
        print_r(json_encode($searchs));
    }
    public function getFavs(Request $request)
    {
        $email = $request->email;
        $favs = DB::table("favorites")->where("favorites.email", $email)->get()->toArray();
        foreach ($favs as $key => $value) {
            $table = "influencers_" . $value->tab;
            $refs = DB::table($table)->where("id", $value->inf_id)->get();
            foreach ($refs as $key1 => $value1) {
                $refs[$key1]->liked = 1;
            }
            $favs[$key]->data = $refs;
            $favs[$key]->tab = $value->tab;
        }
        return json_encode($favs);
    }
    public function saveSearch(Request $request)
    {
        $params = $request->values;

        $flag = DB::table('searchs')->insert($params);
        return response()->json(["status" => $this->status_code, "success" => true, "message" => "Save data successfully", "data" => $flag]);
    }
    public function updateSearch(Request $request)
    {
        $params = $request->values;
        if($params["type"]=="update")
            $flag = DB::table('searchs')->where("id",$params["id"])->update(array("search_name"=>$params["search_name"],"brief_description"=>$params["brief_description"]));
        else
            $flag = DB::table("searchs")->where("id",$params["id"])->delete();
            return response()->json(["status" => $this->status_code, "success" => true, "message" => "Save data successfully", "data" => $flag]);
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
            return response()->json(["status" => $this->status_code, "success" => true, "message" => "Delete data successfully", "data" => $delete]);
        }
        // $searchs = DB::table('searchs')->where('email', $request->email)->get();
        // print_r(json_encode($searchs));
    }

}
