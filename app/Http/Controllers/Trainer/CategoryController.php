<?php

namespace App\Http\Controllers\Trainer;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Category;

class CategoryController extends Controller
{
    public function index(Request $request)
    {
        $categories = Category::all();

        return response()->json($categories);
    }
}
