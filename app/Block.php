<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

use App\Type;

class Block extends Model
{
    protected $fillable = [
        'name', 'user_id', 'start_date', 'type_id'
    ];

    public function type()
    {
        return $this->belongsTo(Type::class);
    }
}
