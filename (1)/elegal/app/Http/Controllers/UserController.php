<?php

// UserController.php

namespace App\Http\Controllers;

use App\Models\User; // Import the User class

class UserController extends Controller
{

    public function users()
    {
        // Retrieve all users
        $users = User::all();

        return view('users', ['users' => $users]);
    }

    public function get_user($user_id)
    {
        // Retrieve a specific user by ID
        $user = User::find($user_id);

        return view('get_user', ['user' => $user]);
    }
}
