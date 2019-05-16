<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

use App\Type;

class Block extends Model
{
    public function type()
    {
        return $this->belongsTo(Type::class);
    }
}
