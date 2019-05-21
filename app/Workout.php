<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

use App\Set;
use App\Block;

class Workout extends Model
{
    protected $fillable = [
        'name', 'date', 'user_id', 'block_id'
    ];

    public function sets()
    {
        return $this->hasMany(Set::class);
    }

    public function block()
    {
        return $this->belongsTo(Block::class);
    }
}
