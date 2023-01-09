<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AuthoredBill extends Model
{
    use HasFactory;
    protected $fillable = [
        'hb_no', 'content', 'is_pa', 'status'
    ];
}
