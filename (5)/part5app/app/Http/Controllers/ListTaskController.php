<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ListTaskController extends Controller
{
    public function listTask()
    {
        return view('frontend.listTask');
    }
}
