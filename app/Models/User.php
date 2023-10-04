<?php

namespace App\Models;
// use Illuminate\Foundation\Auth\EmailVerificationRequest;
// use Illuminate\Contracts\Auth\MustVerifyEmail;  
use Illuminate\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Support\Str;
use App\Notifications\VerifyEmail;
use Illuminate\Database\Eloquent\Relations\HasMany;
use App\Models\Niche;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, MustVerifyEmail;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'firstname', 'lastname', 'fullname', 'email', 'password', 'phonenumber', 'condition', 'companyname',
        'companyfounded', 'companywebsite', 'companylocation', 'nichecategory', 'budget', 'companysize', 'aboutbusiness',
        'instagram', 'tiktok', 'youtube', 'facebook', 'twitter', 'pinterest', 'linkedin', 'blogurl', 'trial'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];
    public function niches()
    {
        return $this->hasMany(Niche::class);
    }
    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function generateVerificationToken()
    {
        $this->verification_token = Str::random(40);
        $this->save();
    }

    public function sendEmailVerificationNotification()
    {
        $this->notify(new  \App\Notifications\VerifyEmail);
    }
    public function generateResetToken()
    {
        $this->reset_token = Str::random(40);
        $this->save();
    }
    public function sendResetNotification()
    {
        $this->notify(new  \App\Notifications\VerifyReset);
    }
}
