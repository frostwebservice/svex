<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LoginHistory extends Model
{
    use HasFactory;
    protected $table = 'login_histories';
    protected $fillable = ['user_email', 'type', 'ip_address', 'browser_info', 'os_info'];
}
