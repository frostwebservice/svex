<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BillingInfo extends Model
{
    use HasFactory;
    protected $table = 'billing_infos';
    protected $fillable = ['email', 'billing_name', 'card_number', 'country', 'zip_code'];
}
