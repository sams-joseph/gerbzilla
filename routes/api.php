<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/user', 'UserController@index')->middleware('auth:api');

Route::post('/login', 'AuthController@login');

Route::get('/users/{user}/blocks', 'BlockController@index')->middleware('auth:api');
Route::get('/users/{user}/workouts/date/{date}', 'WorkoutController@getByDate')->middleware('auth:api');
Route::get('/users/{user}/workouts/date-range', 'WorkoutController@getByDateRange')->middleware('auth:api');

/*
ADMIN
*/

Route::middleware('auth:api', 'roles:admin')
    ->namespace('Admin')
    ->prefix('admin')
    ->group(function () {
        Route::get('/users', 'UserController@index');
        Route::post('/users', 'UserController@store');
    });

/*
TRAINER
*/

Route::middleware('auth:api', 'roles:admin|trainer')
    ->namespace('Trainer')
    ->prefix('trainer')
    ->group(function () {
        Route::get('/users', 'UserController@index');
        Route::get('/users/{user}', 'UserController@show');
        Route::post('/users', 'UserController@store');

        Route::get('/exercises', 'ExerciseController@index');
        Route::post('/exercises', 'ExerciseController@store');

        Route::get('/categories', 'CategoryController@index');

        Route::get('/users/{user}/blocks', 'BlockController@index');
        Route::post('/users/{user}/blocks', 'BlockController@store');
        Route::get('/users/{user}/blocks/{block}', 'BlockController@show');

        Route::get('/types', 'TypeController@index');

        Route::post('/users/{user}/blocks/{block}/workouts', 'WorkoutController@store');
        Route::get('/users/{user}/blocks/{block}/workouts/{workout}', 'WorkoutController@show');

        Route::get('/users/{user}/blocks/{block}/workouts/{workout}/sets', 'SetController@index');
        Route::post('/users/{user}/blocks/{block}/workouts/{workout}/sets', 'SetController@store');
        Route::get('/users/{user}/blocks/{block}/workouts/{workout}/sets/{set}', 'SetController@show');
        Route::put('/users/{user}/blocks/{block}/workouts/{workout}/sets/{set}', 'SetController@update');
    });
