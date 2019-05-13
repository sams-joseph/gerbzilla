<?php

namespace App\Http\Controllers\Trainer;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Exercise;

class ExerciseController extends Controller
{
    public function index(Request $request)
    {
        $exercises = Exercise::all();

        return response()->json($exercises);
    }

    public function store()
    {
        $attributes = request()->validate(['name' => 'required', 'category_id' => 'required']);

        $exercise = Exercise::create($attributes);

        return response()->json($exercise);
    }
}
