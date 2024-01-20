<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\models\profile;


class ProfileController extends Controller
{
    //

    public function getProfileByUserId($username)
    {
        $profile = Profile::where('id', $username)->first();

        if (!$profile) {
            return response()->json(['message' => 'Profile not found'], 404);
        }

        return response()->json(['profile' => $profile], 200);
    }

    public function updateProfile(Request $request, $id)
{
    // Validate the request data if needed
    $request->validate([
        'fullname' => 'required|string|max:255',
        'username' => 'required|string|max:255',
        'password' => 'required|string|min:6',
        'role' => 'required|string|max:255',
        'profilePicture' => 'nullable|image|mimes:jpeg,png,jpg,gif',
    ]);

    // Find the profile by ID
    $profile = Profile::findOrFail($id);

    // Update the profile data
    $profile->update([
        'fullname' => $request->input('fullname'),
        'username' => $request->input('username'),
        'password' => bcrypt($request->input('password')),
        'role' => $request->input('role'),
        'profilepic' => $request->input('profilePicture')
    ]);

    // Handle profile picture upload
    if ($request->hasFile('profilePicture')) {
        $file = $request->file('profilePicture');
        $fileName = time() . '_' . $file->getClientOriginalName();
        $filePath = $file->storeAs('profile_pictures', $fileName, 'public');
        $profile->update(['profilepic' => $filePath]);
    }

    // Optionally, you can return the updated profile data
    return response()->json(['message' => 'Profile updated successfully', 'profile' => $profile]);
}

}
