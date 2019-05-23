<?php

namespace App\Http\Controllers\Trainer;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use Carbon\Carbon;

use App\User;
use App\Role;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function index(Request $request)
    {
        $users = User::where('trainer_id', $request->user()->id)->get();

        return response()->json($users);
    }

    public function show(Request $request, User $user)
    {
        $trainer_id = $request->user()->id;
        if ($user->trainer_id !== $trainer_id) {
            return response()->json(['message' => 'You are not authorized to view this record.'], 401);
        }

        return response()->json($user);
    }

    public function store(Request $request)
    {
        $trainer_id = $request->user()->id;

        try {
            $user = User::create([
                'first_name' => $request->input('first_name'),
                'last_name' => $request->input('last_name'),
                'email' => $request->input('email'),
                'password' => Hash::make($request->input('password')),
                'trainer_id' => $trainer_id,
            ]);

            $user
                ->roles()
                ->attach(Role::where('name', 'member')->first());

            return response()->json($user);
        } catch (\Illuminate\Database\QueryException $e) {
            return response()->json('Email address already exists', 400);
        }
    }

    public function expiring(Request $request)
    {
        Carbon::setWeekStartsAt(Carbon::MONDAY);
        Carbon::setWeekEndsAt(Carbon::SUNDAY);

        $users = User::where('trainer_id', $request->user()->id)
            ->whereBetween('block_expiration', [Carbon::now()->startOfWeek(), Carbon::now()->endOfWeek()])
            ->get();

        return response()->json($users);
    }
}
