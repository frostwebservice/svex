<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('user-signup', [App\Http\Controllers\UserController::class , 'userSignUp']);
Route::post('user-getuser', [App\Http\Controllers\UserController::class , 'getUsers']);
Route::post('first-Info', [App\Http\Controllers\UserController::class , 'firstInfo']);
Route::post('social-Info', [App\Http\Controllers\UserController::class , 'socialInfo']);
Route::post('second-Info', [App\Http\Controllers\UserController::class , 'secondInfo']);
Route::post("user-signin", [App\Http\Controllers\UserController::class , 'userLogin']);
Route::post("user-trial", [App\Http\Controllers\UserController::class , 'usertrial']);
Route::get("user/{email}",[App\Http\Controllers\UserController::class , 'userDetail']);
Route::post("verify-recaptcha", [App\Http\Controllers\RecaptchaController::class , 'verifyRecaptcha']);
Route::post('verify-email', [App\Http\Controllers\Auth\VerificationController::class , 'verifyEmail']);
Route::post("resend-email", [App\Http\Controllers\UserController::class , 'resendVerify']);
