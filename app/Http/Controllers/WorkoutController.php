<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Workout;
use App\User;
use App\Set;

class WorkoutController extends Controller
{
  public function index(Request $request)
  {
    $user = $request->user();

    $workouts = Workout::where('user_id', $user->id)->with('Block.Type')->get();

    return response()->json($workouts);
  }

  public function show(Request $request, Workout $workout)
  {
    $user = $request->user();

    if (Workout::where(['user_id' => $user->id, 'id' => $workout->id])->with('Block.Type')) {
      $workout = Workout::where(['user_id' => $user->id, 'id' => $workout->id])->with('Block.Type')->first();
      $sets = Set::where('workout_id', $workout->id)->get();

      $sets_with_exercises = [];

      foreach( $sets as $set) {
          $set['exercises'] = $set->exercises()->get();
          array_push($sets_with_exercises, $set);
      }

      return response()->json(['workout' => $workout, 'sets' => $sets]);
    } else {
      return response()->json(['workout' => new \stdClass(), 'sets' => []]);
    }
  }

  public function getByDate(Request $request, $date)
  {
    $user = $request->user();

    if (Workout::where(['user_id' => $user->id, 'date' => $date])->with('Block.Type')->exists()) {
      $workout = Workout::where(['user_id' => $user->id, 'date' => $date])->with('Block.Type')->first();
      $sets = Set::where('workout_id', $workout->id)->get();

      $sets_with_exercises = [];

      foreach( $sets as $set) {
          $set['exercises'] = $set->exercises()->get();
          array_push($sets_with_exercises, $set);
      }

      return response()->json(['workout' => $workout, 'sets' => $sets]);
    } else {
      return response()->json(['workout' => new \stdClass(), 'sets' => []]);
    }
  }

  public function getByDateRange(Request $request, $start, $end)
  {
    $user = $request->user();

    $workouts = Workout::where('user_id', $user->id)
      ->with('Block.Type')
      ->whereBetween('date', array($start, $end))
      ->get();

    return response()->json($workouts);
  }
}
