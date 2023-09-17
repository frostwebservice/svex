<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\VerifiesEmails;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class VerificationController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Email Verification Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling email verification for any
    | user that recently registered with the application. Emails may also
    | be re-sent if the user didn't receive the original email message.
    |
    */

    use VerifiesEmails;

    /**
     * Where to redirect users after verification.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        // $this->middleware('auth');
        // $this->middleware('signed')->only('verify');
        $this->middleware('throttle:6,1')->only('verify', 'resend', '');
    }

    // ---------------------verify Email  ---------------------------------------------------//

    public function verifyEmail(Request $request)
    {
        $user = User::where('verification_token', $request->token)->first();
        if (!$user) {
            //failed verify
            // return response()->json(['message' => 'Invalid verification token'], 422);
            return redirect("/auth/auth/SendEmail");
        }
        $user->markEmailAsVerified();
        // return response()->json(['message' => 'Email verified']);
        //success verify
        return redirect("/auth/auth/Start");
    }
    public function verifyResetPassword(Request $request)
    {
        $reset = DB::table("users")->where("reset_token", $request->token)->first();
        if (!$reset) {
            //failed verify
            // return response()->json(['message' => 'Invalid verification token'], 422);
            return redirect("/auth/auth/ForgotPassword");
        }
        // return response()->json(['message' => 'Email verified']);
        //success verify
        return redirect("/auth/auth/ResetPassword");
    }
}
