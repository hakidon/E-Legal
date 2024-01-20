<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Tasks;

class ListTaskController extends Controller
{
    public function listTask()
    {
        $tasks = Tasks::all();
        return view('frontend.listTask', ['tasks' => $tasks]);
    }
}
