<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthController;



Route::get('/form/login',[AuthController::class,'index']);


Route::group(['middleware' => ['auth:sanctum','user']], function() {
    Route::get('/', function () {
        return Inertia::render('welcome', ['welcome' => 'working']);
    });

});
