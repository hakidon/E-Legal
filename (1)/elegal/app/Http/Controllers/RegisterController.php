<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator; // Add this line
use App\Models\User;

class RegisterController extends Controller
{
    public function showRegistrationForm()
    {
        return view('register');
    }

    public function register(Request $request)
    {
        // Validate the form data
        $validator = Validator::make($request->all(), [
            'email' => 'required|email|unique:user',
            'username' => 'required|unique:user',
            'password' => 'required|min:8|confirmed',
        ]);

        // Check if validation fails
        if ($validator->fails()) {
            // Return JSON response with validation errors
            return response()->json([
                'success' => false,
                'errors' => $validator->errors(),
            ]);
        }

        // Create a new user
        $user = User::create([
            'email' => $request->input('email'),
            'username' => $request->input('username'),
            'password' => bcrypt($request->input('password')),
            'roles' => 'client',
        ]);

        // Optionally, you can log in the user here if needed

        // Return JSON response for successful registration
        return response()->json([
            'success' => true,
            'message' => 'User registered successfully!',
        ]);
    }
}