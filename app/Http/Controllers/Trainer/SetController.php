<?php

namespace App\Http\Controllers\Trainer;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\User;
use App\Block;
use App\Workout;
use App\Set;

class SetController extends Controller
{
    public function index(Request $request, User $user, Block $block, Workout $workout)
    {
        $trainer_id = $request->user()->id;

        if ($user->trainer_id !== $trainer_id) {
            return response()->json(['message' => 'You are not authorized to view this record.'], 401);
        }

        $sets = Set::where('workout_id', $workout->id)->with('Exercise')->get();

        return response()->json([
            'block' => $block,
            'type' => $block->type,
            'workout' => $workout,
            'sets' => $sets,
        ]);
    }

    public function show(Request $request, User $user, Block $block, Workout $workout, Set $set)
    {
        $trainer_id = $request->user()->id;

        if ($user->trainer_id !== $trainer_id) {
            return response()->json(['message' => 'You are not authorized to view this record.'], 401);
        }

        return response()->json([
            'block' => $block,
            'type' => $block->type,
            'workout' => $workout,
            'set' => $set,
        ]);
    }

    public function store(Request $request, User $user, Block $block, Workout $workout)
    {
        $trainer_id = $request->user()->id;

        if ($user->trainer_id !== $trainer_id) {
            return response()->json(['message' => 'You are not authorized to view this record.'], 401);
        }

        $attributes = request()->validate(['num_sets' => 'required', 'notes' => 'required', 'exercise_id' => 'required']);

        $attributes['workout_id'] = $workout->id;

        $set = Set::create($attributes);

        return response()->json($set);
    }
}
