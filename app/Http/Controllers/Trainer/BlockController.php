<?php

namespace App\Http\Controllers\Trainer;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\User;
use App\Block;

class BlockController extends Controller
{
    public function index(Request $request, User $user)
    {
        $trainer_id = $request->user()->id;
        if ($user->trainer_id !== $trainer_id) {
            return response()->json(['message' => 'You are not authorized to view this record.'], 401);
        }

        $blocks = Block::where('user_id', $user->id)->with('Type')->with('Workouts')->get();

        return response()->json($blocks);
    }

    public function show(Request $request, User $user, Block $block)
    {
        $trainer_id = $request->user()->id;
        if ($user->trainer_id !== $trainer_id) {
            return response()->json(['message' => 'You are not authorized to view this record.'], 401);
        }

        return response()->json([
            'block' => $block,
            'type' => $block->type,
            'workouts' => $block->workouts
        ]);
    }

    public function store(User $user)
    {
        $attributes = request()->validate(['name' => 'required', 'start_date' => 'required', 'type_id' => 'required']);

        $attributes['user_id'] = $user->id;

        $block = Block::create($attributes);

        return response()->json($block);
    }
}
