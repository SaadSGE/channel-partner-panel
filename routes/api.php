<?php

use App\Http\Controllers\ApplicationController;
use App\Http\Controllers\ApplicationCountryController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\CourseDetailsController;
use App\Http\Controllers\IntakeController;
use App\Http\Controllers\StudentFileController;
use App\Http\Controllers\UniversityController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::apiResource('application-country', ApplicationCountryController::class);
Route::apiResource('course', CourseController::class);
Route::apiResource('intake', IntakeController::class);
Route::apiResource('university', UniversityController::class);
Route::apiResource('course-detail', CourseDetailsController::class);
Route::get('course-detail-all', [CourseDetailsController::class,'courseDetailsAll']);
Route::apiResource('application', ApplicationController::class);
Route::post('student-document-upload', [StudentFileController::class,'upload']);
Route::post('student-document-upload-existing-application', [StudentFileController::class,'uploadExistingApplication']);
Route::post('university-logo-upload', [UniversityController::class,'logoUpload']);
Route::get('get-country-intake-university-course', [CourseDetailsController::class,'countryIntakeUniversityCourse']);
Route::post('update-application-file', [ApplicationController::class,'updateApplicationFile']);

Route::post('register', [AuthController::class,'register']);
Route::post('login', [AuthController::class,'login']);
