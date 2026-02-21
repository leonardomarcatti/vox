<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\MainController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum'])->group(function () {
    Route::controller(MainController::class)->group(function(){
        Route::get('/home', 'home')->name('home');
        Route::post('/newTask', 'newTask')->name('newTask');
        Route::get('/getTask/{id}', 'getTask')->name('getTask');
        Route::post('/editTask', 'editTask')->name('editTask');
    });
});


Route::controller(AuthController::class)->group(function(){
    Route::post('/logup', 'logup')->name('logup');
    Route::post('/login', 'login')->name('login');
});
