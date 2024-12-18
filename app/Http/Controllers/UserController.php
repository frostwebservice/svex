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
use ReCaptcha\ReCaptcha;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use App\Providers\PurelyMailService;
class UserController extends Controller
{
	//
	private $status_code = 200;
	public function create_purelyuser($user){
		$purelyMail = new PurelyMailService();
		$res=$purelyMail->createUser($user);
		return $res;
	}
	public function delete_purelyuser($user){
		$purelyMail = new PurelyMailService();
		$res=$purelyMail->deleteUser($user);
		return $res;
	}
	public function userSignUp(Request $request)
	{

		$userDataArray = array(
			"fullname" => $request->name,
			"email" => $request->email,
			"password" => md5($request->password),
			"condition" => $request->condition
		);

		$user_status = User::where("email", $request->email)->first();

		if (!is_null($user_status)) {
			return response()->json(["status" => "failed", "success" => false, "message" => "Whoops! email already registered"]);
		}
		$user_status = User::where("fullname", $request->name)->first();

		$pure['fullname']=str_replace(" ","",$request->name)."@socialvex.net";
		// $pure['password']="123456789";
		// $pure['email']=$request->email;
		// $pure['phonenumber']="";


		$purely_status = $this->delete_purelyuser($pure);

		$pure['fullname']=str_replace(" ","",$request->name);
		$pure['password']="123456789";
		$pure['email']=$request->email;
		$pure['phonenumber']="";


		if (!is_null($user_status)) {
			return response()->json(["status" => "failed", "success" => false, "message" => "Whoops! username already registered"]);
		}

		$user = User::create($userDataArray);
		$purely_status = $this->create_purelyuser($pure);
		if($purely_status['type']=="success") {
			//success creation of auto email
		}
		else{
			//error creation of auto email
		}
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

		$userDataArray = array(
			"email" => $request->email,
			"password" => md5($request->password)
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
	public function resetAccountPassword(Request $request)
	{
		$email = $request->email;
		$old = $request->oldpassword;
		$new = $request->newpassword;
		$user = User::where("email", $email)->first();
		if ($user->password == md5($old)) {
			$arr = array("password" => md5($new));
			User::where("email", $email)->update($arr);
			return response()->json(["status" => $this->status_code, "success" => true, "message" => "Password Reset Success", "data" => $user]);

		} else {
			return response()->json(["status" => "failed", "success" => true, "message" => "Old Password Is Wrong!", "data" => $user]);

		}
	}
	public function handleTfa(Request $request)
	{
		$email = $request->email;
		$kind = $request->kind;
		$user = User::where("email", $email)->first();
		if ($kind == "app") {
			$value = $user->tfaapp;
			User::where("email", $email)->update(array("tfaapp" => abs($value - 1)));
			return response()->json(["status" => $this->status_code, "success" => true, "message" => "Setting Success", "data" => $user]);

		} else {
			$value = $user->tfasms;
			User::where("email", $email)->update(array("tfasms" => abs($value - 1)));
			return response()->json(["status" => "failed", "success" => true, "message" => "Setting Success", "data" => $user]);

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

		$userDataArray = array(
			"firstname" => $request->firstname,
			"lastname" => $request->lastname,
			"phonenumber" => $request->phonenumber,
			"companyname" => $request->companyname,
			"companywebsite" => $request->companywebsite,
			"companylocation" => $request->companylocation,

		);
		$user_status = User::where("email", $request->email)->first();



		if (!is_null($user_status)) {

			$user_status->firstname = $request->firstname;
			$user_status->lastname = $request->lastname;
			$user_status->phonenumber = $request->phonenumber;
			$user_status->companyname = $request->companyname;
			$user_status->companywebsite = $request->companywebsite;
			$user_status->companylocation = $request->companylocation;
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
		if ($id == 0) {
			return json_encode("sss");
		}
		$brand = User::find($id);

		$niches = User::find($id)->niches;
		$brand['niches'] = $niches;
		return json_encode($brand);
	}
	public function getBillingInfo(Request $request)
	{
		$user_email = $request->email;

		$arr = array(
			"email" => $user_email,
			"billing_name" => "",
			"card_number" => "",
			"country" => "",
			"zip_code" => ""
		);
		$cnt = BillingInfo::where("email", $user_email)->count();
		if ($cnt == 0) {
			$info = BillingInfo::create($arr);
		}
		$info = BillingInfo::where("email", $user_email)->first();
		return response()->json(["status" => $this->status_code, "success" => true, "message" => "Get data successfully", "data" => $info]);
	}
	public function updateBillingInfo(Request $request)
	{
		$value = $request->value;
		$arr = array(
			"billing_name" => $value['billing_name'],
			"card_number" => $value['card_number'],
			"country" => $value['country'],
			"zip_code" => $value['zip_code']
		);
		$status = BillingInfo::where("email", $request->user_email)->update($arr);
		return response()->json(["status" => $this->status_code, "success" => true, "message" => "Get data successfully", "data" => $status]);
	}
	public function getUsers(Request $request){
		$users = DB::table("users")->where("is_admin",0)->get();
		print_r(json_encode($users));
	}
	public function deleteUser(Request $request){
		$id = $request->id;
		$res = DB::table("users")->where("id",$id)->delete();
		print_r(json_encode($res));
	}
	public function getUserInfo(Request $request)
	{
		$email = $request->email;
		$user = User::where("email", $email)->first();

		$niches = User::where("email", $email)->first()->niches;
		$paid="0";
		if(!$user->pay_date){
			$paid = "0";
		}else{
			$paid = "0";
			$diff = date_diff(date_create($user->pay_date),date_create(date('Y-m-d')),true);
			$diff = (int)$diff->format("%a");
			if($diff<=30&&$user->pay_amt=="1") $paid="1";
			if($diff<=30&&$user->pay_amt=="2") $paid="2";
			if($diff>30) $paid="0";

		}
		$user['paid'] = $paid;
		$user['niches'] = $niches;

		$date=date_create($user->pay_date);
		date_add($date,date_interval_create_from_date_string("30 days"));
		$diff = date_diff($date,date_create(date('Y-m-d')),true);
		$user['time'] = (int)$diff->format("%a");
		return json_encode($user);
	}
	public function getNotifysettings(Request $request)
	{
		$user_email = $request->user_email;
		$count = DB::table('notify_settings')->where('user_email', $user_email)->count();

		if ($count == 0) {
			$arr = array(
				"user_email" => $user_email,
				"app_message" => 0,
				"app_job" => 0,
				"app_signup" => 0,
				"app_add" => 0,
				"app_membership" => 0,
				"mail_message" => 0,
				"mail_job" => 0,
				"mail_signup" => 0,
				"mail_add" => 0,
				"mail_membership" => 0
			);

			$flag = DB::table('notify_settings')->insert($arr);
			$notifysettings = DB::table('notify_settings')->where('user_email', $user_email)->first();
		} else {
			$notifysettings = DB::table('notify_settings')->where('user_email', $user_email)->first();
		}
		return response()->json(["status" => $this->status_code, "success" => true, "message" => "Get data successfully", "data" => $notifysettings]);
	}
	public function updateNotifysettings(Request $request)
	{

		$user_email = $request->user_email;
		$notifysettings = $request->notifysettings;
		$count = DB::table('notify_settings')->where('user_email', $user_email)->count();


		$arr = array(
			"app_message" => $notifysettings["app_message"],
			"app_job" => $notifysettings["app_job"],
			"app_signup" => $notifysettings["app_signup"],
			"app_add" => $notifysettings["app_add"],
			"app_membership" => $notifysettings["app_membership"],
			"mail_message" => $notifysettings["mail_message"],
			"mail_job" => $notifysettings["mail_job"],
			"mail_signup" => $notifysettings["mail_signup"],
			"mail_add" => $notifysettings["mail_add"],
			"mail_membership" => $notifysettings["mail_membership"]
		);

		$flag = DB::table('notify_settings')->where("user_email", $user_email)->update($arr);


		return response()->json(["status" => $this->status_code, "success" => true, "message" => "Get data successfully", "data" => $flag]);
	}
	public function updateGeneralinfo(Request $request)
	{
		$user_email = $request->user_email;
		$val = array(
			"email" => $request->email,
			"firstname" => $request->firstname,
			"lastname" => $request->lastname,
			"timezone" => $request->timezone
		);
		if ($user_email != $request->email) {
			$cnt = User::where("email", $request->email)->count();
			if ($cnt > 0) {
				return response()->json(["status" => "failed", "success" => true, "message" => "unchanged"]);
			}
		}
		$user = User::where("email", $user_email)->first();
		if ($user->email && $user->email == $request->email) {
			User::where("email", $user_email)->update($val);
			return response()->json(["status" => "success", "success" => true, "message" => "unchanged"]);
		} else {
			User::where("email", $user_email)->update($val);
			return response()->json(["status" => "success", "success" => true, "message" => "changed"]);
		}
	}
	public function getSocialProfile(Request $request)
	{
		$infname = $request->infname;
		$socialtype = $request->socialtype;
		if ($socialtype != "total") {
			$table_name = "influencers_" . $socialtype;
			$socialinfo = DB::table($table_name)->where('username', $infname)->first();
			return json_encode($socialinfo);
		} else {
			$total = array(
				"instagram" => array(),
				"youtube" => array(),
				"tiktok" => array(),
				"twitter" => array(),
				"pinterest" => array(),
				"basic" => ""
			);
			$count=0;
			$table_name = "influencers_pinterest";
			$socialinfo = DB::table($table_name)->where('username', $infname)->first();
			if($socialinfo) 
			{
				$count = DB::table("favorites")->where(array("tab" => "pinterest", "email" => $request->email, "inf_id" => $socialinfo->id))->count();
				$socialinfo->liked = $count;
			}
			if ($socialinfo)
				$total["basic"] = "pinterest";
			$total["pinterest"] = $socialinfo;

			$table_name = "influencers_twitter";
			$socialinfo = DB::table($table_name)->where('username', $infname)->first();
			if($socialinfo) 
			{
				$count = DB::table("favorites")->where(array("tab" => "twitter", "email" => $request->email, "inf_id" => $socialinfo->id))->count();
				$socialinfo->liked = $count;
			}
			if ($socialinfo)
				$total["basic"] = "twitter";
			$total["twitter"] = $socialinfo;

			$table_name = "influencers_tiktok";
			$socialinfo = DB::table($table_name)->where('username', $infname)->first();
			if($socialinfo) 
			{
				$count = DB::table("favorites")->where(array("tab" => "tiktok", "email" => $request->email, "inf_id" => $socialinfo->id))->count();
				$socialinfo->liked = $count;
			}
			if ($socialinfo)
				$total["basic"] = "tiktok";
			$total["tiktok"] = $socialinfo;

			$table_name = "influencers_youtube";
			$socialinfo = DB::table($table_name)->where('username', $infname)->first();
			if($socialinfo) 
			{
				$count = DB::table("favorites")->where(array("tab" => "youtube", "email" => $request->email, "inf_id" => $socialinfo->id))->count();
				$socialinfo->liked = $count;
			}
			if ($socialinfo)
				$total["basic"] = "youtube";
			$total["youtube"] = $socialinfo;
			$table_name = "influencers_instagram";

			$socialinfo = DB::table($table_name)->where('username', $infname)->first();
			if($socialinfo) 
			{
				$count = DB::table("favorites")->where(array("tab" => "instagram", "email" => $request->email, "inf_id" => $socialinfo->id))->count();
				$socialinfo->liked = $count;
			}
			if ($socialinfo)
				$total["basic"] = "instagram";

			$total["instagram"] = $socialinfo;
			return json_encode($total);
		}

	}
	public function getTeamInfo(Request $request)
	{
		$brand_id = $request->brand_id;
		$teams = DB::table("invites")
			->join('roles', 'invites.role_id', '=', 'roles.id')
			->join('influencers_instagram', 'invites.inf_email', '=', 'influencers_instagram.public_email')
			->where("invites.brand_id", $brand_id)
			->where("invites.accepted", 1)
			->get();
		return response()->json(["status" => $this->status_code, "success" => true, "data" => $teams]);
	}
	public function sendInviteEmail(Request $request)
	{
		$brand_id = $request->brand_id;
		$inf_email = $request->inf_email;
		$insert = DB::table("invites")
			->insert([
				"brand_id" => $brand_id,
				"inf_email" => $inf_email
			]);
		$teams = DB::table("invites")
			->join('roles', 'invites.role_id', '=', 'roles.id')
			->join('influencers_instagram', 'invites.inf_email', '=', 'influencers_instagram.public_email')
			->where("invites.brand_id", $brand_id)
			->where("invites.accepted", 1)
			->get();
		return response()->json(["status" => $this->status_code, "success" => true, "data" => $teams]);
	}
	public function uploadCover(Request $request)
	{
		if ($request->kind == "cover")
			$path = $request->file('file')->store('public/covers');
		else
			$path = $request->file('file')->store('public/avatars');
		$user = User::where('email', $request->email)->first();
		$tmpArr = explode("/", $path);
		$tmp = "";
		foreach ($tmpArr as $key => $value) {
			$tmp = $tmp . "/";
			if ($key == 0)
				$tmp = $tmp . "storage";
			else
				$tmp = $tmp . $value;
		}
		if ($request->kind == "cover")
			$user->cover_photo = $tmp;
		else
			$user->avatar = $tmp;
		$user->save();
		return response()->json(["status" => "success", "success" => true, "message" => "Success to upload"]);
	}
	public function getCustomers(Request $request){
		$customers = DB::table('users')->select('fullname')->get()->toArray();
		$arr = array();
		foreach($customers as $key=>$customer){
			array_push($arr,$customer->fullname);
		}
		print_r(json_encode($arr));
	}
	public function secondInfo(Request $request)
	{
		$count = count($request->nichecategory);
		if ($count > 5) {
			return response()->json(["status" => "failed", "success" => false, "message" => "Niche category field should not over 5 items"]);
		}
		$userDataArray = array(
			"nichecategory" => $request->nichecategory,
			"budget" => $request->budget,
			"companysize" => $request->companysize,
			"companyfounded" => $request->companyfounded,
			"aboutbusiness" => $request->aboutbusiness,
		);

		$user_status = User::where("email", $request->email)->first();

		if (!is_null($user_status)) {

			// $user_status->nichecategory     =                            $request->nichecategory;
			$user_status->budget = $request->budget;
			$user_status->companysize = $request->companysize;
			$user_status->companyfounded = $request->companyfounded;
			$user_status->aboutbusiness = $request->aboutbusiness;
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
	public function editProfile(Request $request)
	{
		$count = count($request->nichecategory);
		if ($count > 5) {
			return response()->json(["status" => "failed", "success" => false, "message" => "Niche category field should not over 5 items"]);
		}
		$userDataArray = array(
			"firstname" => $request->firstname,
			"lastname" => $request->lastname,
			"phonenumber" => $request->phonenumber,
			"companyname" => $request->companyname,
			"companywebsite" => $request->companywebsite,
			"companylocation" => $request->companylocation,
			"nichecategory" => $request->nichecategory,
			"budget" => $request->budget,
			"companysize" => $request->companysize,
			"companyfounded" => $request->companyfounded,
			"aboutbusiness" => $request->aboutbusiness,
			"instagram" => $request->instagram,
			"tiktok" => $request->tiktok,
			"youtube" => $request->youtube,
			"facebook" => $request->facebook,
			"twiter" => $request->twitter,
			"pinterest" => $request->pinterest,
			"linkedin" => $request->linkedin,
			"blogurl" => $request->blogurl,
		);

		$user_status = User::where("email", $request->email)->first();

		if (!is_null($user_status)) {
			$user_status->firstname = $request->firstname;
			$user_status->lastname = $request->lastname;
			$user_status->phonenumber = $request->phonenumber;
			$user_status->companyname = $request->companyname;
			$user_status->companywebsite = $request->companywebsite;
			$user_status->companylocation = $request->companylocation;
			$user_status->budget = $request->budget;
			$user_status->companysize = $request->companysize;
			$user_status->companyfounded = $request->companyfounded;
			$user_status->aboutbusiness = $request->aboutbusiness;
			$user_status->instagram = $request->instagram;
			$user_status->tiktok = $request->tiktok;
			$user_status->youtube = $request->youtube;
			$user_status->facebook = $request->facebook;
			$user_status->twitter = $request->twitter;
			$user_status->pinterest = $request->pinterest;
			$user_status->linkedin = $request->linkedin;
			$user_status->blogurl = $request->blogurl;

			$user = $user_status->save();
			Niche::where('user_id', $user_status->id)->delete();
			foreach ($userDataArray["nichecategory"] as $key => $niche) {
				$insert = array(
					"niche" => $niche['label'],
					"user_id" => $user_status->id
				);
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
	public function socialInfo(Request $request)
	{

		$userDataArray = array(
			"instagram" => $request->instagram,
			"tiktok" => $request->tiktok,
			"youtube" => $request->youtube,
			"facebook" => $request->facebook,
			"twiter" => $request->twitter,
			"pinterest" => $request->pinterest,
			"linkedin" => $request->linkedin,
			"blogurl" => $request->blogurl,
		);
		$user_status = User::where("email", $request->email)->first();

		if (!is_null($user_status)) {

			//  $company = User::find($request->email);
			$user_status->instagram = $request->instagram;
			$user_status->tiktok = $request->tiktok;
			$user_status->youtube = $request->youtube;
			$user_status->facebook = $request->facebook;
			$user_status->twitter = $request->twitter;
			$user_status->pinterest = $request->pinterest;
			$user_status->linkedin = $request->linkedin;
			$user_status->blogurl = $request->blogurl;


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

		// $pure['fullname']="danwholesale@socialvex.net";
		// $pure['password']="123456789";
		// $pure['email']=$request->email;
		// $pure['phonenumber']="";


		// $purely_status = $this->delete_purelyuser($pure);
		// print_r($purely_status);
		// $pure['fullname']="danwholesale";
		// $pure['password']="123456789";
		// $pure['email']="kramer97@gmail.com";
		// $pure['phonenumber']="";

		// $purely_status = $this->create_purelyuser($pure);
		// print_r($purely_status);
		// die();
		// check if entered email exists in db
		$email_status = User::where("email", $request->email)->first();


		// if email exists then we will check password for the same email
		
		if (!is_null($email_status)) {
			if($email_status->is_admin==1) 
				return response()->json(["status" => "failed", "success" => false, "message" => "Restricted login from here with this credential"]);
				
			if ($request->from == "success"||$request->from=="start") {
				$password_status = User::where("email", $request->email)->first();
			} else {
				$password_status = "passed";
			}

			// if password is correct
			if (!is_null($password_status)) {

				// check password correct
				if ($password_status=="passed"&&$email_status->password != md5($request->password)) {
					return response()->json(["status" => "failed", "success" => false, "message" => "Unable to login. Incorrect password."]);

				}
				$user = $this->userDetail($request->email);
				//api_token generate
				$api_token = Str::random(60);
				$user->api_token = $api_token;
				$user->save();
				//login history

				$user_agent = $_SERVER['HTTP_USER_AGENT'];

				$os_platform = "Bilinmeyen İşletim Sistemi";
				$os_array = array(
					'/windows nt 10/i' => 'Windows 10',
					'/windows nt 6.3/i' => 'Windows 8.1',
					'/windows nt 6.2/i' => 'Windows 8',
					'/windows nt 6.1/i' => 'Windows 7',
					'/windows nt 6.0/i' => 'Windows Vista',
					'/windows nt 5.2/i' => 'Windows Server 2003/XP x64',
					'/windows nt 5.1/i' => 'Windows XP',
					'/windows xp/i' => 'Windows XP',
					'/windows nt 5.0/i' => 'Windows 2000',
					'/windows me/i' => 'Windows ME',
					'/win98/i' => 'Windows 98',
					'/win95/i' => 'Windows 95',
					'/win16/i' => 'Windows 3.11',
					'/macintosh|mac os x/i' => 'Mac OS X',
					'/mac_powerpc/i' => 'Mac OS 9',
					'/linux/i' => 'Linux',
					'/ubuntu/i' => 'Ubuntu',
					'/iphone/i' => 'iPhone',
					'/ipod/i' => 'iPod',
					'/ipad/i' => 'iPad',
					'/android/i' => 'Android',
					'/blackberry/i' => 'BlackBerry',
					'/webos/i' => 'Mobile'
				);

				foreach ($os_array as $regex => $value) {
					if (preg_match($regex, $user_agent)) {
						$os_platform = $value;
					}
				}
				$browser_array = array(
					'/msie/i' => 'Internet Explorer',
					'/firefox/i' => 'Firefox',
					'/safari/i' => 'Safari',
					'/chrome/i' => 'Chrome',
					'/edge/i' => 'Edge',
					'/opera/i' => 'Opera',
					'/netscape/i' => 'Netscape',
					'/maxthon/i' => 'Maxthon',
					'/konqueror/i' => 'Konqueror',
					'/mobile/i' => 'Handheld Browser'
				);

				foreach ($browser_array as $regex => $value) {
					if (preg_match($regex, $user_agent)) {
						$browser = $value;
					}
				}
				$type= $request->type?$request->type:"Credential login";
				$history = array(
					"user_email" => $request->email,
					"type" => $type,
					"ip_address" => $_SERVER['REMOTE_ADDR'],
					"browser_info" => $browser,
					"os_info" => $os_platform
				);

				$historyInsert = LoginHistory::create($history);
				return response()->json(["status" => $this->status_code, "success" => true, "message" => "You have logged in successfully", "data" => $user]);
			} else {
				return response()->json(["status" => "failed", "success" => false, "message" => "Unable to login. Incorrect password."]);
			}
		} else {
			return response()->json(["status" => "failed", "success" => false, "message" => "Unable to login. Email doesn't exist."]);
		}
	}
	public function adminLogin(Request $request)
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

		// $pure['fullname']="admin@socialvex.net";
		// $pure['password']="123456789";
		// $pure['email']=$request->email;
		// $pure['phonenumber']="";


		// $purely_status = $this->delete_purelyuser($pure);
		// print_r($purely_status);
		// $pure['fullname']="svexau97";
		// $pure['password']="123456789";
		// $pure['email']="svexadm@socialvex.com";
		// $pure['phonenumber']="";

		// $purely_status = $this->create_purelyuser($pure);
		// print_r($purely_status);
		// die();
		// check if entered email exists in db
		$email_status = User::where("email", $request->email)->first();


		// if email exists then we will check password for the same email

		if (!is_null($email_status)) {

			if ($request->from == "success"||$request->from=="start") {
				$password_status = User::where("email", $request->email)->first();
			} else {
				$password_status = "passed";
			}

			// if password is correct
			if (!is_null($password_status)) {

				// check password correct
				if ($password_status=="passed"&&$email_status->password != md5($request->password)) {
					return response()->json(["status" => "failed", "success" => false, "message" => "Unable to login. Incorrect password."]);

				}
				$user = $this->userDetail($request->email);
				//api_token generate
				$api_token = Str::random(60);
				$user->api_token = $api_token;
				$user->save();
				//login history

				$user_agent = $_SERVER['HTTP_USER_AGENT'];

				$os_platform = "Bilinmeyen İşletim Sistemi";
				$os_array = array(
					'/windows nt 10/i' => 'Windows 10',
					'/windows nt 6.3/i' => 'Windows 8.1',
					'/windows nt 6.2/i' => 'Windows 8',
					'/windows nt 6.1/i' => 'Windows 7',
					'/windows nt 6.0/i' => 'Windows Vista',
					'/windows nt 5.2/i' => 'Windows Server 2003/XP x64',
					'/windows nt 5.1/i' => 'Windows XP',
					'/windows xp/i' => 'Windows XP',
					'/windows nt 5.0/i' => 'Windows 2000',
					'/windows me/i' => 'Windows ME',
					'/win98/i' => 'Windows 98',
					'/win95/i' => 'Windows 95',
					'/win16/i' => 'Windows 3.11',
					'/macintosh|mac os x/i' => 'Mac OS X',
					'/mac_powerpc/i' => 'Mac OS 9',
					'/linux/i' => 'Linux',
					'/ubuntu/i' => 'Ubuntu',
					'/iphone/i' => 'iPhone',
					'/ipod/i' => 'iPod',
					'/ipad/i' => 'iPad',
					'/android/i' => 'Android',
					'/blackberry/i' => 'BlackBerry',
					'/webos/i' => 'Mobile'
				);

				foreach ($os_array as $regex => $value) {
					if (preg_match($regex, $user_agent)) {
						$os_platform = $value;
					}
				}
				$browser_array = array(
					'/msie/i' => 'Internet Explorer',
					'/firefox/i' => 'Firefox',
					'/safari/i' => 'Safari',
					'/chrome/i' => 'Chrome',
					'/edge/i' => 'Edge',
					'/opera/i' => 'Opera',
					'/netscape/i' => 'Netscape',
					'/maxthon/i' => 'Maxthon',
					'/konqueror/i' => 'Konqueror',
					'/mobile/i' => 'Handheld Browser'
				);

				foreach ($browser_array as $regex => $value) {
					if (preg_match($regex, $user_agent)) {
						$browser = $value;
					}
				}
				$type= $request->type?$request->type:"Credential login";
				$history = array(
					"user_email" => $request->email,
					"type" => $type,
					"ip_address" => $_SERVER['REMOTE_ADDR'],
					"browser_info" => $browser,
					"os_info" => $os_platform
				);

				$historyInsert = LoginHistory::create($history);
				return response()->json(["status" => $this->status_code, "success" => true, "message" => "You have logged in successfully", "data" => $user]);
			} else {
				return response()->json(["status" => "failed", "success" => false, "message" => "Unable to login. Incorrect password."]);
			}
		} else {
			return response()->json(["status" => "failed", "success" => false, "message" => "Unable to login. Email doesn't exist."]);
		}
	}
	public function loginHistory(Request $request)
	{
		$email = $request->email;
		$histories = loginHistory::where("user_email", $email)->orderByDesc('id')->limit(3)->get();
		return response()->json(["status" => $this->status_code, "success" => true, "message" => "getting successfully", "data" => $histories]);
	}
	// ------------------ [ User Detail ] ---------------------
	public function userDetail($email)
	{
		$user = array();
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
			$user_status->trial = $request->trial;
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

	public function verifytoken(Request $request)
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
