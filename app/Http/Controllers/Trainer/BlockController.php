<?php

namespace App\Http\Controllers\Trainer;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Carbon\Carbon;

use App\User;
use App\Block;
use App\Workout;
use App\Set;

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

        $expiration = new Carbon($block->start_date);

        $user->update(['block_expiration' => $expiration->addWeeks(4)]);

        return response()->json($block);
    }

    public function duplicate(Request $request, User $user, Block $block)
    {
        $new_block = $block->replicate();
        $original_date = new Carbon($block->start_date);
        $new_date = new Carbon($request->start_date);

        $user->update(['block_expiration' => $new_date->addWeeks(4)]);

        $day_gap = $original_date->diffInDays($new_date);
        $new_block->name = $request->name;
        $new_block->start_date = $request->start_date;
        $new_block->save();

        foreach ($block->workouts()->get() as $workout) {
            $workout = Workout::where('id', $workout->id)->first();
            $new_workout = $workout->replicate();
            $date = new Carbon($new_workout->date);
            $new_workout->block_id = $new_block->id;
            $new_workout->date = $date->addDays($day_gap);
            $new_workout->save();

            foreach ($workout->sets()->get() as $set) {
                $set = Set::where('id', $set->id)->first();
                $new_set = $set->replicate();
                $new_set->workout_id = $new_workout->id;
                $new_set->save();
            }
        }

        return response()->json($new_block);
    }
}
