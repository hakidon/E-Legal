<?php

use App\Http\Controllers\AdminDashboardController;
use App\Http\Controllers\ListTaskController;
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

Route::get('/', function () {
    return view('welcome');
});

route::get('/adminDashboard',[AdminDashboardController::class,'adminDashboard']);

route::get('/listTask',[ListTaskController::class,'listTask']);