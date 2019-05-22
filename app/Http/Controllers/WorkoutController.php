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
    if ($request_user->id !== $user->id) {
      return response()->json(['message' => 'You are not authorized to view this record.'], 401);
    }

    if (Workout::where(['user_id' => $user->id, 'date' => $date])->with('Block.Type')->exists()) {
      $workout = Workout::where(['user_id' => $user->id, 'date' => $date])->with('Block.Type')->first();
      $sets = Set::where('workout_id', $workout->id)->with('Exercise')->get();

      return response()->json(['workout' => $workout, 'sets' => $sets]);
    } else {
      return response()->json(['workout' => new \stdClass(), 'sets' => []]);
    }
  }

  public function getByDateRange(Request $request, User $user)
  {
    $start = $request->start;
    $end = $request->end;
    $request_user = $request->user();

    if ($request_user->id !== $user->id) {
      return response()->json(['message' => 'You are not authorized to view this record.'], 401);
    }

    $workout = Workout::where('user_id', $user->id)
      ->with('Block.Type')
      ->whereBetween('date', array($start, $end))
      ->get();

    return response()->json($workout);
  }
}
