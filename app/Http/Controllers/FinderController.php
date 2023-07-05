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
        print_r($request->searchParams);
    }
    public function saveSearch(Request $request)
    {
        $params = $request->searchParams;
        $type = $params["tab"];
        if($type=="instagram"){
            print_r($params);
        }
        $flag = DB::table('searchs')->insert($params);
		return response()->json(["status" => $this->status_code, "success" => true, "message" => "Save data successfully", "data" => $flag]);
	}

    
}
