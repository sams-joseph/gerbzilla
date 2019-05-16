<?php

namespace App\Http\Controllers\Trainer;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\User;
use App\Block;
use App\Workout;

class WorkoutController extends Controller
{
    public function store(User $user, Block $block)
    {
        $attributes = request()->validate(['name' => 'required', 'date' => 'required']);

        $attributes['user_id'] = $user->id;
        $attributes['block_id'] = $block->id;

        $workout = Workout::create($attributes);

        return response()->json($workout);
    }
}
