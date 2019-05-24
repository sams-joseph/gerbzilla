<?php

namespace App\Http\Controllers\Trainer;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\User;
use App\Block;
use App\Workout;
use App\Set;

class WorkoutController extends Controller
{
    public function show(Request $request, User $user, Block $block, Workout $workout)
    {
        $trainer_id = $request->user()->id;

        if ($user->trainer_id !== $trainer_id) {
            return response()->json(['message' => 'You are not authorized to view this record.'], 401);
        }

        return response()->json([
            'block' => $block,
            'type' => $block->type,
            'workout' => $workout
        ]);
    }

    public function store(User $user, Block $block)
    {
        $attributes = request()->validate(['name' => 'required', 'date' => 'required']);

        $attributes['user_id'] = $user->id;
        $attributes['block_id'] = $block->id;

        $workout = Workout::create($attributes);

        return response()->json($workout);
    }

    public function duplicate(Request $request, User $user, Workout $workout)
    {
        $new_workout = $workout->replicate();
        $new_workout->name = $request->name;
        $new_workout->date = $request->date;
        $new_workout->save();

        foreach($workout->sets()->get() as $set)
        {
            $set = Set::where('id',$set->id)->first();
            $new_set = $set->replicate();
            $new_set->workout_id = $new_workout->id;
            $new_set->save();
        }

        return response()->json($new_workout);
    }
}
