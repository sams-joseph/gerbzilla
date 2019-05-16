<?php

namespace App\Http\Controllers\Trainer;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Type;

class TypeController extends Controller
{
    public function index(Request $request)
    {
        $types = Type::all();

        return response()->json($types);
    }
}
