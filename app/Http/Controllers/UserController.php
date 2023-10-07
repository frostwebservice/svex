<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Niche;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Auth\Events\Registered;
use Illuminate\Database\Eloquent\JsonEncodingException;
use ReCaptcha\ReCaptcha;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    //
    private $status_code = 200;

    public function userSignUp(Request $request)
    {

        $userDataArray  =  array(
            "fullname"           =>          $request->name,
            "email"              =>          $request->email,
            "password"           =>          md5($request->password),
            "condition"          =>          $request->condition
        );

        $user_status = User::where("email", $request->email)->first();

        if (!is_null($user_status)) {
            return response()->json(["status" => "failed", "success" => false, "message" => "Whoops! email already registered"]);
        }
        $user_status = User::where("fullname", $request->name)->first();

        if (!is_null($user_status)) {
            return response()->json(["status" => "failed", "success" => false, "message" => "Whoops! username already registered"]);
        }

        $user  =  User::create($userDataArray);

        if (!is_null($user)) {

            $user->generateVerificationToken();
            $user->sendEmailVerificationNotification();
            // $user = Auth::user();
            return response()->json(["status" => $this->status_code, "success" => true, "message" => "Verification Code Sent Successfully", "data" => $user]);
        } else {
            return response()->json(["status" => "failed", "success" => false, "message" => "Verification Code Send Failed"]);
        }
    }
    public function userReset(Request $request)
    {

        $userDataArray  =  array(
            "email"              =>          $request->email,
            "password"           =>          md5($request->password)
        );

        $user = User::where("email", $request->email)->first();

        if (!is_null($user)) {

            $user->password = md5($request->password);
            $user->save();

            // $user = Auth::user();
            return response()->json(["status" => $this->status_code, "success" => true, "message" => "Password Reset Success", "data" => $user]);
        } else {
            return response()->json(["status" => "failed", "success" => false, "message" => "Password Reset Failed"]);
        }
    }
    public function sendReset(Request $request)
    {
        $user = User::where("email", $request->email)->first();
        $user->generateResetToken();
        $user->sendResetNotification();
        return response()->json(["status" => $this->status_code, "success" => true, "message" => "Reset request Sent Successfully", "data" => $user]);
    }
    public function resendVerify(Request $request)
    {

        $user = User::where("email", $request->email)->first();

        if (!is_null($user)) {


            $user->generateVerificationToken();
            $user->sendEmailVerificationNotification();
            // $user = Auth::user();

            return response()->json(["status" => $this->status_code, "success" => true, "message" => "Verification Code Sent Successfully", "data" => $user]);
        } else {
            return response()->json(["status" => "failed", "success" => false, "message" => "Verification Code Send Failed"]);
        }
    }




    // -------------------- first Business Infomation Update ---------------------------------//

    public function firstInfo(Request $request)
    {

        $userDataArray  =  array(
            "firstname"             =>   $request->firstname,
            "lastname"              =>   $request->lastname,
            "phonenumber"           =>   $request->phonenumber,
            "companyname"           =>   $request->companyname,
            "companywebsite"        =>   $request->companywebsite,
            "companylocation"       =>   $request->companylocation,

        );
        $user_status = User::where("email", $request->email)->first();



        if (!is_null($user_status)) {

            $user_status->firstname     =                       $request->firstname;
            $user_status->lastname     =                        $request->lastname;
            $user_status->phonenumber     =                     $request->phonenumber;
            $user_status->companyname     =                     $request->companyname;
            $user_status->companywebsite     =                  $request->companywebsite;
            $user_status->companylocation     =                 $request->companylocation;
            $user = $user_status->save();

            if (!is_null($user)) {
                return response()->json(["status" => $this->status_code, "success" => true, "message" => "Update completed successfully", "data" => $user]);
            } else {
                return response()->json(["status" => "failed", "success" => false, "message" => "failed to update"]);
            }
        } else {
            return response()->json(["status" => "failed", "success" => false, "message" => "Whoops! there is no such email"]);
        }

        // $user  =  User::create($userDataArray);


    }

    // -------------------- second Business Infomation Update ---------------------------------//
    public function getBrandInfo(Request $request)
    {
        $id = $request->brandID;
        $brand = User::find($id);
        $niches = User::find($id)->niches;
        $brand['niches'] = $niches;
        return json_encode($brand);
    }
    public function getUserInfo(Request $request)
    {
        $email = $request->email;
        $user = User::where("email", $email)->first();
        $niches = User::where("email", $email)->first()->niches;
        $user['niches'] = $niches;
        return json_encode($user);
    }
    public function getSocialProfile(Request $request)
    {
        $infname = $request->infname;
        $socialtype = $request->socialtype;
        $table_name = "influencers_" . $socialtype;
        $socialinfo = DB::table($table_name)->where('username', $infname)->first();
        return json_encode($socialinfo);
    }
    public function uploadCover(Request $request)
    {
        if ($request->kind == "cover")
            $path = $request->file('file')->store('public/covers');
        else $path = $request->file('file')->store('public/avatars');
        $user = User::where('email', $request->email)->first();
        $tmpArr = explode("/", $path);
        $tmp = "";
        foreach ($tmpArr as $key => $value) {
            $tmp = $tmp . "/";
            if ($key == 0) $tmp = $tmp . "storage";
            else $tmp = $tmp . $value;
        }
        if ($request->kind == "cover")
            $user->cover_photo = $tmp;
        else $user->avatar = $tmp;
        $user->save();
        return response()->json(["status" => "success", "success" => true, "message" => "Success to upload"]);
    }
    public function secondInfo(Request $request)
    {
        $count = count($request->nichecategory);
        if ($count > 5) {
            return response()->json(["status" => "failed", "success" => false, "message" => "Niche category field should not over 5 items"]);
        }
        $userDataArray  =  array(
            "nichecategory"              =>   $request->nichecategory,
            "budget"                   =>   $request->budget,
            "companysize"              =>   $request->companysize,
            "companyfounded"           =>   $request->companyfounded,
            "aboutbusiness"            =>   $request->aboutbusiness,
        );

        $user_status = User::where("email", $request->email)->first();

        if (!is_null($user_status)) {

            // $user_status->nichecategory     =                            $request->nichecategory;
            $user_status->budget             =                         $request->budget;
            $user_status->companysize     =                            $request->companysize;
            $user_status->companyfounded     =                         $request->companyfounded;
            $user_status->aboutbusiness     =                          $request->aboutbusiness;
            $user = $user_status->save();
            Niche::where('user_id', $user_status->id)->delete();
            foreach ($userDataArray["nichecategory"] as $key => $niche) {
                $insert = array(
                    "niche" => $niche['label'],
                    "user_id" => $user_status->id
                );
                // $tmp = Niche::where(array("niche" => $niche, "user_id" => $user_status->id))->count();
                // if ($tmp == 0)        
                $inserted = Niche::create($insert);
            }

            if (!is_null($user)) {
                return response()->json(["status" => $this->status_code, "success" => true, "message" => "Update completed successfully", "data" => $user]);
            } else {
                return response()->json(["status" => "failed", "success" => false, "message" => "failed to update"]);
            }
        } else {
            return response()->json(["status" => "failed", "success" => false, "message" => "Whoops! there is no such email"]);
        }

        // $user  =  User::create($userDataArray);


    }
    // -------------------- social Infomation Update ---------------------------------//

    public function socialInfo(Request $request)
    {

        $userDataArray  =  array(
            "instagram"            =>    $request->instagram,
            "tiktok"              =>    $request->tiktok,
            "youtube"             =>    $request->youtube,
            "facebook"            =>    $request->facebook,
            "twiter"              =>    $request->twitter,
            "pinterest"           =>    $request->pinterest,
            "linkedin"            =>    $request->linkedin,
            "blogurl"             =>    $request->blogurl,
        );
        $user_status = User::where("email", $request->email)->first();

        if (!is_null($user_status)) {

            //  $company = User::find($request->email);
            $user_status->instagram     =                            $request->instagram;
            $user_status->tiktok             =                         $request->tiktok;
            $user_status->youtube     =                            $request->youtube;
            $user_status->facebook     =                         $request->facebook;
            $user_status->twitter     =                          $request->twitter;
            $user_status->pinterest     =                          $request->pinterest;
            $user_status->linkedin     =                          $request->linkedin;
            $user_status->blogurl     =                          $request->blogurl;


            $user = $user_status->save();


            if (!is_null($user)) {
                return response()->json(["status" => $this->status_code, "success" => true, "message" => "Update completed successfully", "data" => $user]);
            } else {
                return response()->json(["status" => "failed", "success" => false, "message" => "failed to update"]);
            }
        } else {
            return response()->json(["status" => "failed", "success" => false, "message" => "Whoops! there is no such email"]);
        }

        // $user  =  User::create($userDataArray);


    }
    // ------------ [ User Login ] -------------------
    public function userLogin(Request $request)
    {

        // $validator          =       Validator::make($request->all(),
        //     [
        //         "email"             =>          "required|email",
        //         "password"          =>          "required"
        //     ]
        // );

        // if($validator->fails()) {
        //     return response()->json(["status" => "failed", "validation_error" => $validator->errors()]);
        // }


        // check if entered email exists in db
        $email_status       =       User::where("email", $request->email)->first();


        // if email exists then we will check password for the same email

        if (!is_null($email_status)) {

            if ($request->from == "success") {
                $password_status    =   User::where("email", $request->email)->first();
            } else {
                $password_status = "passed";
            }

            // if password is correct
            if (!is_null($password_status)) {
                $user = $this->userDetail($request->email);
                //api_token generate
                $api_token = Str::random(60);
                $user->api_token = $api_token;
                $user->save();
                return response()->json(["status" => $this->status_code, "success" => true, "message" => "You have logged in successfully", "data" => $user]);
            } else {
                return response()->json(["status" => "failed", "success" => false, "message" => "Unable to login. Incorrect password."]);
            }
        } else {
            return response()->json(["status" => "failed", "success" => false, "message" => "Unable to login. Email doesn't exist."]);
        }
    }

    // ------------------ [ User Detail ] ---------------------
    public function userDetail($email)
    {
        $user =  array();
        if ($email != "") {
            $user = User::where("email", $email)->first();
            return $user;
        }
    }

    // -------------------- trial Infomation Update ---------------------------------//

    public function Usertrial(Request $request)
    {

        $user_status = User::where("email", $request->email)->first();


        if (!is_null($user_status)) {

            // $user = $user_status->update( $request->all());
            $user_status->trial     =      $request->trial;
            $user = $user_status->save();

            if (!is_null($user)) {
                return response()->json(["status" => $this->status_code, "success" => true, "message" => "Update completed successfully", "data" => $user]);
            } else {
                return response()->json(["status" => "failed", "success" => false, "message" => "failed to update"]);
            }
        } else {
            return response()->json(["status" => "failed", "success" => false, "message" => "Whoops! there is no such email"]);
        }

        // $user  =  User::create($userDataArray);


    }

    public function verifytoken(Request  $request)
    {
        // // $recaptcha = new ReCaptcha(config('services.recaptcha.secret'));
        // // $response = $recaptcha->verify($request->input('recaptcha_token'), $request->ip());

        // if ($response->isSuccess()) {
        //     // Recaptcha verification successful
        //     return response()->json(['success' => true]);
        // } else {
        //     // Recaptcha verification failed
        //     return response()->json(['success' => false, 'error' => 'Recaptcha verification failed']);
        // }


        $reCAPTCHA_TOKEN = $request->token;
        $Secret_Key = $request->secret;
        $response = axios . post(`https://www.google.com/recaptcha/api/siteverify?secret=${Secret_Key}&response=${reCAPTCHA_TOKEN}`);
        return response()->json(['success' => $Secret_Key, 'token' => $reCAPTCHA_TOKEN]);
    }
}
