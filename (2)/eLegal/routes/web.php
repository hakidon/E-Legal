<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\eLegalController;
use App\Http\Controllers\StaffController;
use App\Http\Controllers\CasesController;

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

Route::get('/', function () {
    return view('welcome');
});

Route::resource('staff', StaffController::class);
Route::resource('case', CasesController::class);

// route::get('/case', [eLegalController::class, 'case']);
// route::get('/staff', [eLegalController::class, 'staff']);
Route::get('/dbconn', function(){
    return view('dbconn');
});