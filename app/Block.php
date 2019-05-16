<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

use App\Type;
use App\Workout;

class Block extends Model
{
    protected $fillable = [
        'name', 'user_id', 'start_date', 'type_id'
    ];

    public function type()
    {
        return $this->belongsTo(Type::class);
    }

    public function workouts()
    {
        return $this->hasMany(Workout::class);
    }
}
