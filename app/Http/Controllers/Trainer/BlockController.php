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

        $blocks = Block::where('user_id', $user->id)->with('Type')->get();

        return response()->json($blocks);
    }
}
