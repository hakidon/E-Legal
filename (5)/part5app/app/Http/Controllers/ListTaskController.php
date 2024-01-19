<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cases;

class ListTaskController extends Controller
{
    public function listTask()
    {
        $cases = Cases::all();
        return view('frontend.listTask', ['cases' => $cases]);
    }
}
