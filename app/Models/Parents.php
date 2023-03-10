<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Parents extends Model
{
    use HasFactory;
    use Notifiable;
    use SoftDeletes;
    protected $guarded =[];
    
    public function email()
    {
        return  $this->hasMany('App\Models\Email'); 
    }
}
