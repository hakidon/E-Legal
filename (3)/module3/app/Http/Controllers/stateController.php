<?php

namespace App\Http\Controllers;

use App\models\state;
use App\models\task;
use Illuminate\Http\Request;

class stateController extends Controller
{
    //
    public function index()
    {
        $states = State::all();

        return response()->json(['states' => $states]);
    }
}
