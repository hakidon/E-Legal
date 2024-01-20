<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cases;

class AdminDashboardController extends Controller
{
    public function adminDashboard()
    {
        $cases = Cases::all();
        return view('frontend.adminDashboard', ['cases' => $cases]);
    }
}
