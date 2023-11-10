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
    public function findWithParams(Request $request)
    {
        $email = $request->email;
        $params = $request->searchParams;
        $infs = $this->callSearch($email, $params);
        return json_encode($infs);
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
                $where['is_verified'] = "1";
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
                if ($params["avg_comments"] == "All")
                    array_push($commentsinfs, $inf);
                else if ($params["avg_comments"] == "< 0.5 %") {
                    if (100 * (double) $inf->avg_comment / (double) $inf->follower_count < 0.5)
                        array_push($commentsinfs, $inf);
                } else if ($params["avg_comments"] == "0.5 % - 1 %") {
                    if (100 * (double) $inf->avg_comment / (double) $inf->follower_count >= 0.5 && 100 * (double) $inf->avg_comment / (double) $inf->follower_count < 1)
                        array_push($commentsinfs, $inf);
                } else if ($params["avg_comments"] == "1 % - 2 %") {
                    if (100 * (double) $inf->avg_comment / (double) $inf->follower_count >= 1 && 100 * (double) $inf->avg_comment / (double) $inf->follower_count < 2)
                        array_push($commentsinfs, $inf);
                } else if ($params["avg_comments"] == "> 2 %") {
                    if (100 * (double) $inf->avg_comment / (double) $inf->follower_count >= 2)
                        array_push($commentsinfs, $inf);
                }
            }
            $likesinfs = array();
            foreach ($commentsinfs as $key => $cominf) {
                if ($params["avg_likes"] == "All")
                    array_push($likesinfs, $cominf);
                if ($params["avg_likes"] == "< 1 %") {
                    if (100 * (double) $cominf->avg_like / (double) $cominf->follower_count < 1)
                        array_push($likesinfs, $cominf);
                } else if ($params["avg_likes"] == "1 % - 2 %") {
                    if (100 * (double) $cominf->avg_like / (double) $cominf->follower_count >= 1 && 100 * (double) $cominf->avg_like / (double) $cominf->follower_count < 2)
                        array_push($likesinfs, $cominf);
                } else if ($params["avg_likes"] == "2 % - 3 %") {
                    if (100 * (double) $cominf->avg_like / (double) $cominf->follower_count >= 2 && 100 * (double) $cominf->avg_like / (double) $cominf->follower_count < 3)
                        array_push($likesinfs, $cominf);
                } else if ($params["avg_likes"] == "> 3 %") {
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
                if ($params["avg_comments"] == "All")
                    array_push($commentsinfs, $inf);
                else if ($params["avg_comments"] == "< 0.5 %") {
                    if (
                        100 * (double) 
                        $inf->avg_comments / (double) $inf->follower_count < 0.5
                    )
                        array_push($commentsinfs, $inf);
                } else if
                ($params["avg_comments"] == "0.5 % - 1 %") {
                    if (
                        100 *
                        (double) $inf->avg_comments / (double) $inf->follower_count
                        >= 0.5 && 100 * (double) $inf->avg_comments / (double) 
                        $inf->follower_count < 1
                    )
                        array_push($commentsinfs, $inf);
                } else if ($params["avg_comments"] == "1 % - 2 %") {
                    if
                    (
                        100 * (double) $inf->avg_comments / (double) 
                        $inf->follower_count >= 1 && 100 * (double) 
                        $inf->avg_comments / (double) $inf->follower_count < 2
                    )
                        array_push($commentsinfs, $inf);
                } else if
                ($params["avg_comments"] == "> 2 %") {
                    if (
                        100 *
                        (double) $inf->avg_comments / (double) 
                        $inf->follower_count >= 2
                    )
                        array_push($commentsinfs, $inf);
                }
            }
            $likesinfs = array();
            foreach ($commentsinfs as $key => $cominf) {
                if ($params["avg_likes"] == "All")
                    array_push($likesinfs, $cominf);
                if ($params["avg_likes"] == "< 1 %") {
                    if (
                        100 *
                        (double) $cominf->avg_like / (double) 
                        $cominf->follower_count < 1
                    )
                        array_push($likesinfs, $cominf);
                } else if
                ($params["avg_likes"] == "1 % - 2 %") {
                    if
                    (
                        100 * (double) $cominf->avg_like / (double) 
                        $cominf->follower_count >= 1 && 100 *
                        (double) $cominf->avg_like / (double) 
                        $cominf->follower_count < 2
                    )
                        array_push($likesinfs, $cominf);
                } else
                    if ($params["avg_likes"] == "2 % - 3 %") {
                        if (
                            100 * (double) $cominf->avg_like /
                            (double) $cominf->follower_count >= 2 &&
                            100 * (double) $cominf->avg_like /
                            (double) $cominf->follower_count < 3
                        )
                            array_push($likesinfs, $cominf);
                    } else if
                    ($params["avg_likes"] == "> 3 %") {
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
