<?php

use App\Http\Controllers\ClientsController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\StateController;
use App\Http\Controllers\ProfileController;

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

Route::get('/tasks', [TaskController::class, 'index']);
Route::get('/tasks-by-month', [TaskController::class, 'getTasksByMonth']);
Route::get('/task-count', [TaskController::class, 'getTaskCount']);
// routes/web.php
Route::get('/profiles/{id}', [ProfileController::class, 'getProfileByUserId']);
Route::post('/profiles/{id}', [ProfileController::class, 'updateProfile']);
