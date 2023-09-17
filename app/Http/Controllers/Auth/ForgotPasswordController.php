<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\SendsPasswordResetEmails;
use Illuminate\Http\Request;
use App\Models\User;
use DB;

class ForgotPasswordController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Password Reset Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling password reset emails and
    | includes a trait which assists in sending these notifications from
    | your application to your users. Feel free to explore this trait.
    |
    */

    use SendsPasswordResetEmails;
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
}
