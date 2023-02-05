<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EmailController;
use App\Http\Controllers\ParentsController;
use App\Http\Controllers\Auth\AuthController;
use Laravel\Fortify\Http\Controllers\AuthenticatedSessionController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/',[AuthController::class,'index']);


Route::group(['middleware' => ['auth:sanctum']], function() {
    Route::get('/home', function () {
        return Inertia::render('welcome');
    });

    Route::resource('/parents',ParentsController::class)->except(['destroy']);
    Route::POST('/parents/{id}',[ParentsController::class, 'destroy']) ->name('parents.destroy');
    Route::POST('/parents/update/{id}',[ParentsController::class, 'update']) ->name('parents.update');

    
    Route::get('/general/email/create',[EmailController::class,'create'])->name('email.create');
    Route::get('/general/email',[EmailController::class,'index'])->name('email.index');
    Route::post('/general/email',[EmailController::class,'store'])->name('email.store');
    Route::get('/users-send-email', [EmailController::class, 'allParentStore'])->name('ajax.send.email');

    Route::get('parents/restore/{id}', [ParentsController::class, 'restore'])
    ->name('parents.restore');
    Route::post('/logout', [AuthenticatedSessionController::class, 'destroy'])
    ->name('logout'); 

});