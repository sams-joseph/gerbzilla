<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Workout;
use App\User;
use App\Set;

class WorkoutController extends Controller
{
  public function getByDate(Request $request, User $user, $date)
  {
    $request_user = $request->user();
    if($request_user->id !== $user->id) {
      return response()->json(['message' => 'You are not authorized to view this record.'], 401);
    }

    $workout = Workout::where(['user_id' => $user->id, 'date' => $date])->with('Block.Type')->first();

    if(empty($workout)) {
      return response()->json(['workout' => $workout, 'sets' => []]);
    }

    $sets = Set::where('workout_id', $workout->id)->with('Exercise')->get();

    return response()->json(['workout' => $workout, 'sets' => $sets]);
  }
}
