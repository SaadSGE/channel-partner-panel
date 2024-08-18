<?php

use App\Http\Controllers\FileController;
use App\Http\Controllers\StudentFileController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;

Route::get('{any}', function () {
    return view('application');
})->where('any', '^(?!webmail).*');
