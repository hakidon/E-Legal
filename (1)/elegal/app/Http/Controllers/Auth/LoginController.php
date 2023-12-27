<?php

// app/Http/Controllers/Auth/LoginController.php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function showLoginForm()
    {
        return view('login');
    }

    public function login(Request $request)
    {
        session()->forget(['success', 'error']);

        if (!$request->filled(['username', 'password'])) {
            session()->flash('error', 'Please provide information to proceed.');
            return view('login');
        }

        // Validate the form data
        $credentials = $request->validate([
            'username' => 'required',
            'password' => 'required',
        ]);

        // Check if both 'username' and 'password' are provided
        if (!$request->has(['username', 'password'])) {
            return "Both username and password are required.";
        }

        // Attempt to log in the user
        if (Auth::attempt($credentials)) {
            // Authentication passed...
            // return redirect()->route('dashboard'); // Redirect to the dashboard or any other page
            // return view('login')->with('success', 'Login successful. Welcome, ' . $credentials['username']);
            // return "Login successful. Welcome, " . $credentials['username'];
            session()->flash('success', 'Login successful. Welcome, ' . $credentials['username']);
            return view('login');
        }

        // Authentication failed...
        // return view('login')->with('error', 'Invalid credentials');
        // return "Invalid credentials";
        session()->flash('error', 'Invalid credentials');
        return view('login');

    }
}
