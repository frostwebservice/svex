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
Route::post('user-signup', [App\Http\Controllers\UserController::class, 'userSignUp']);
Route::post('user-reset', [App\Http\Controllers\UserController::class, 'userReset']);
Route::post('user-getuser', [App\Http\Controllers\UserController::class, 'getUsers']);
Route::post('first-Info', [App\Http\Controllers\UserController::class, 'firstInfo']);
Route::post('social-Info', [App\Http\Controllers\UserController::class, 'socialInfo']);
Route::post('second-Info', [App\Http\Controllers\UserController::class, 'secondInfo']);
Route::post("user-signin", [App\Http\Controllers\UserController::class, 'userLogin']);
Route::post("user-trial", [App\Http\Controllers\UserController::class, 'usertrial']);
Route::get("user/{email}", [App\Http\Controllers\UserController::class, 'userDetail']);
Route::post("verify-recaptcha", [App\Http\Controllers\RecaptchaController::class, 'verifyRecaptcha']);
Route::post('verify-email', [App\Http\Controllers\Auth\VerificationController::class, 'verifyEmail']);
Route::post('send-reset', [App\Http\Controllers\UserController::class, 'sendReset']);
Route::post("resend-email", [App\Http\Controllers\UserController::class, 'resendVerify']);
Route::post('get_brand_info', [App\Http\Controllers\UserController::class, 'getBrandInfo']);
Route::post('get_user_info', [App\Http\Controllers\UserController::class, 'getUserInfo']);
Route::post('get_social_profile', [App\Http\Controllers\UserController::class, 'getSocialProfile']);
Route::post('upload_cover', [App\Http\Controllers\UserController::class, 'uploadCover']);
Route::post('edit-profile', [App\Http\Controllers\UserController::class, 'editProfile']);
Route::post('get_notifysettings', [App\Http\Controllers\UserController::class, 'getNotifysettings']);
Route::post('update_notifysettings', [App\Http\Controllers\UserController::class, 'updateNotifysettings']);
Route::post('update_generalinfo', [App\Http\Controllers\UserController::class, 'updateGeneralinfo']);
Route::post('get_billing_info', [App\Http\Controllers\UserController::class, 'getBillingInfo']);
Route::post('update_billing_info', [App\Http\Controllers\UserController::class, 'updateBillingInfo']);
Route::post('login_history', [App\Http\Controllers\UserController::class, 'loginHistory']);
Route::post('reset_account_password', [App\Http\Controllers\UserController::class, 'resetAccountPassword']);
Route::post('handle_tfa', [App\Http\Controllers\UserController::class, 'handleTfa']);
Route::post('get_team_info', [App\Http\Controllers\UserController::class, 'getTeamInfo']);
Route::post('send_invite_email', [App\Http\Controllers\UserController::class, 'sendInviteEmail']);
Route::post('search_infs', [App\Http\Controllers\FinderController::class, 'findWithParams']);
Route::post('save_search', [App\Http\Controllers\FinderController::class, 'saveSearch']);
Route::post('update_search', [App\Http\Controllers\FinderController::class, 'updateSearch']);
Route::post('get_searchs', [App\Http\Controllers\FinderController::class, 'getSearchs']);
Route::post('get_favs', [App\Http\Controllers\FinderController::class, 'getFavs']);
Route::post('handle_like', [App\Http\Controllers\FinderController::class, 'handleLike']);
Route::post('getoutreachs', [App\Http\Controllers\FinderController::class, 'getoutreachs']);
Route::post('newgroup', [App\Http\Controllers\FinderController::class, 'newgroup']);
Route::post('create_job', [App\Http\Controllers\JobController::class, 'create_job']);
Route::post('update_job', [App\Http\Controllers\JobController::class, 'update_job']);
Route::post('get_jobs', [App\Http\Controllers\JobController::class, 'get_jobs']);
Route::post('get_applicants', [App\Http\Controllers\JobController::class, 'get_applicants']);
Route::post('get_hired', [App\Http\Controllers\JobController::class, 'get_hired']);
Route::post('get_invited', [App\Http\Controllers\JobController::class, 'get_invited']);
Route::post('get_current_job', [App\Http\Controllers\JobController::class, 'get_current_job']);
Route::post('update_jobactivity', [App\Http\Controllers\JobController::class, 'update_jobactivity']);
Route::post('hire_inf', [App\Http\Controllers\JobController::class, 'hire_inf']);
