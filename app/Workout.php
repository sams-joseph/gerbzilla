<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Workout extends Model
{
    protected $fillable = [
        'name', 'date', 'user_id', 'block_id'
    ];
}
