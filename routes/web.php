<?php

use App\Http\Controllers\FileController;
use App\Http\Controllers\StudentFileController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Broadcast;

// Add this line before your other routes
Broadcast::routes(['middleware' => ['auth:sanctum']]);

Route::get('{any}', function () {
    return view('application');
})->where('any', '^(?!webmail).*');
