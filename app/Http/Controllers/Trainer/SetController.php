<?php

namespace App\Http\Controllers\Trainer;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\User;
use App\Block;
use App\Workout;
use App\Set;
use App\Exercise;

class SetController extends Controller
{
    public function index(Request $request, User $user, Block $block, Workout $workout)
    {
        $trainer_id = $request->user()->id;

        if ($user->trainer_id !== $trainer_id) {
            return response()->json(['message' => 'You are not authorized to view this record.'], 401);
        }

        $sets = Set::where('workout_id', $workout->id)->get();

        $sets_with_exercises = [];

        foreach( $sets as $set) {
            array_push($sets_with_exercises, ['set' => $set, 'exercises' => $set->exercises]);
        }

        return response()->json([
            'block' => $block,
            'type' => $block->type,
            'workout' => $workout,
            'sets' => $sets_with_exercises,
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
            'set' => ['set' => $set, 'exercises' => $set->exercises()->get()],
        ]);
    }

    public function store(Request $request, User $user, Block $block, Workout $workout)
    {
        $trainer_id = $request->user()->id;
        $exercises = $request->exercise_id;

        if ($user->trainer_id !== $trainer_id) {
            return response()->json(['message' => 'You are not authorized to view this record.'], 401);
        }

        $attributes = request()->validate(['num_sets' => 'required', 'notes' => 'required']);

        $attributes['workout_id'] = $workout->id;

        $set = Set::create($attributes);

        foreach( $exercises as $exercise) {
            $set
                ->exercises()
                ->attach(Exercise::where('id', $exercise)->first());
        }

        return response()->json($set);
    }

    public function update(Request $request, User $user, Block $block, Workout $workout, Set $set)
    {
        $trainer_id = $request->user()->id;
        $exercises = $request->exercise_id;

        if ($user->trainer_id !== $trainer_id) {
            return response()->json(['message' => 'You are not authorized to view this record.'], 401);
        }

        $attributes = request()->validate(['num_sets' => 'required', 'notes' => 'required']);

        $attributes['workout_id'] = $workout->id;

        $set->update($attributes);

        $set->exercises()->detach();

        foreach( $exercises as $exercise) {
            $set
                ->exercises()
                ->attach(Exercise::where('id', $exercise)->first());
        }

        return response()->json(['message' => 'Updated record successfully.'], 200);
    }
}
