<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

use App\Exercise;

class Set extends Model
{
    protected $fillable = [
        'num_sets', 'notes', 'exercise_id', 'workout_id',
    ];

    // public function exercise()
    // {
    //     return $this->belongsTo(Exercise::class);
    // }

    public function exercises()
    {
        return $this->belongsToMany(Exercise::class);
    }
}
