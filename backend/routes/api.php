<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\MainController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum'])->group(function () {
    Route::controller(MainController::class)->group(function(){
        Route::post('/logout', 'logout')->name('logout');
        Route::get('/home', 'home')->name('home');
    });
});


Route::controller(AuthController::class)->group(function(){
    Route::post('/logup', 'logup')->name('logup');
    Route::post('/login', 'login')->name('login');
});
