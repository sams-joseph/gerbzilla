<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

use App\Set;

class Exercise extends Model
{
    protected $fillable = [
        'name', 'category_id',
    ];

    public function sets()
    {
        return $this->belongsToMany(Set::class);
    }
}
