<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

use App\Set;

class Workout extends Model
{
    protected $fillable = [
        'name', 'date', 'user_id', 'block_id'
    ];

    public function sets()
    {
        return $this->hasMany(Set::class);
    }
}
