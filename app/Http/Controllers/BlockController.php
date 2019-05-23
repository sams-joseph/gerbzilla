<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Block;
use App\User;

class BlockController extends Controller
{
    public function index(Request $request)
    {
        $user = $request->user();
        $blocks = Block::where('user_id', $user->id)->with('Type')->with('Workouts')->get();

        return response()->json($blocks);
    }

    public function show(Request $request, Block $block)
    {
        $user = $request->user();
        if ($user->id !== $block->user_id) {
            return response()->json(['message' => 'You are not authorized to view this record.'], 401);
        }

        $blocks = Block::where('id', $block->id)->with('Type')->with('Workouts')->first();

        return response()->json($blocks);
    }
}
