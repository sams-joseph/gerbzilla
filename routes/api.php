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
Route::post('/user/update', 'UserController@update')->middleware('auth:api');

Route::post('/login', 'AuthController@login');

Route::get('/blocks', 'BlockController@index')->middleware('auth:api');
Route::get('/blocks/{block}', 'BlockController@show')->middleware('auth:api');

Route::get('/workouts', 'WorkoutController@index')->middleware('auth:api');
Route::get('/workouts/{workout}', 'WorkoutController@show')->middleware('auth:api');

Route::get('/workouts/date/{start}/{end}', 'WorkoutController@getByDateRange')->middleware('auth:api');
Route::get('/workouts/date/{date}', 'WorkoutController@getByDate')->middleware('auth:api');

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
        Route::get('/expiring', 'UserController@expiring');

        Route::get('/exercises', 'ExerciseController@index');
        Route::post('/exercises', 'ExerciseController@store');

        Route::get('/categories', 'CategoryController@index');

        Route::get('/users/{user}/blocks', 'BlockController@index');
        Route::post('/users/{user}/blocks', 'BlockController@store');
        Route::get('/users/{user}/blocks/{block}', 'BlockController@show');
        Route::post('/users/{user}/blocks/duplicate/{block}', 'BlockController@duplicate');
        Route::delete('/users/{user}/blocks/{block}', 'BlockController@destroy');

        Route::get('/types', 'TypeController@index');

        Route::post('/users/{user}/blocks/{block}/workouts', 'WorkoutController@store');
        Route::post('/users/{user}/workouts/duplicate/{workout}', 'WorkoutController@duplicate');
        Route::get('/users/{user}/blocks/{block}/workouts/{workout}', 'WorkoutController@show');
        Route::delete('/users/{user}/workouts/{workout}', 'WorkoutController@destroy');

        Route::get('/users/{user}/blocks/{block}/workouts/{workout}/sets', 'SetController@index');
        Route::post('/users/{user}/blocks/{block}/workouts/{workout}/sets', 'SetController@store');
        Route::get('/users/{user}/blocks/{block}/workouts/{workout}/sets/{set}', 'SetController@show');
        Route::put('/users/{user}/blocks/{block}/workouts/{workout}/sets/{set}', 'SetController@update');
    });
