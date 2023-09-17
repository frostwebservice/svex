<?php

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Auth::routes(['verify' => true]);

// Auth::routes();
Route::get('/greeting', function () {
    return 'Hello World';
});
Route::get('/verify-email', [App\Http\Controllers\Auth\VerificationController::class, 'verifyEmail']);
Route::get('/verify-reset-password', [App\Http\Controllers\Auth\VerificationController::class, 'verifyResetPassword']);


Route::get('{any}', function () {
    return view('index');
})->where('any', '.*');
