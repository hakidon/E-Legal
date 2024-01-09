<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class eLegalController extends Controller
{
    public function case(){
        return view('frontend.case');
    }

    public function staff(){
        return view('frontend.staff');
    }
}
