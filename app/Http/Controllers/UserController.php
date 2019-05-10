<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

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
}
