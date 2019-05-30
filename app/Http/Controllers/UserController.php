<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function index(Request $request)
    {
        $user = $request->user();
        $role = $user->roles()->first();

        return response()->json([
            'user' => $user,
            'role' => $role,
        ]);
    }

    public function update(Request $request)
    {
        $user = $request->user();

        if ($request->password) {
            $attributes = request()->validate(['first_name' => 'required', 'last_name' => 'required','email' => 'required|email', 'password' => 'required|confirmed|min:6']);
            $attributes['password'] = Hash::make($request->password);

            $user->update($attributes);

            return response()->json($user);
        } else {
            $attributes = request()->validate(['first_name' => 'required', 'last_name' => 'required','email' => 'required|email']);

            $user->update($attributes);

            return response()->json($user);
        }
    }
}
