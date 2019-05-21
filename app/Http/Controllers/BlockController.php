<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Block;
use App\User;

class BlockController extends Controller
{
    public function index(Request $request, User $user)
    {
        $blocks = Block::where('user_id', $user->id)->with('Type')->with('Workouts')->get();

        return response()->json($blocks);
    }
}
