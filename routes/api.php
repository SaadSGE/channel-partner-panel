<?php

use App\Http\Controllers\ApplicationController;
use App\Http\Controllers\ApplicationCountryController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\CourseDetailsController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\IntakeController;
use App\Http\Controllers\PermissionController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\StudentFileController;
use App\Http\Controllers\UniversityController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
Route::middleware('auth:api')->group(function () {
    Route::apiResource('application-country', ApplicationCountryController::class);
    Route::apiResource('course', CourseController::class);
    Route::apiResource('users', UserController::class);
    Route::post('/users/{id}/set-parent', [UserController::class, 'setParent']);
    Route::get('all-user', [UserController::class,'allUser']);
    Route::apiResource('intake', IntakeController::class);
    Route::apiResource('university', UniversityController::class);
    Route::apiResource('course-detail', CourseDetailsController::class);
    Route::apiResource('roles', RoleController::class);
    Route::post('/roles/{roleName}/permissions', [RoleController::class, 'store']);
    Route::apiResource('permissions', PermissionController::class);
    Route::get('all-permissions', [PermissionController::class,'allPermission']);
    Route::get('course-detail-all', [CourseDetailsController::class,'courseDetailsAll']);
    Route::apiResource('application', ApplicationController::class);
    Route::post('student-document-upload', [StudentFileController::class,'upload']);
    Route::post('student-document-upload-existing-application', [StudentFileController::class,'uploadExistingApplication']);
    Route::post('university-logo-upload', [UniversityController::class,'logoUpload']);
    Route::get('get-country-intake-university-course', [CourseDetailsController::class,'countryIntakeUniversityCourse']);
    Route::post('update-application-file', [ApplicationController::class,'updateApplicationFile']);
    Route::get('application-statuses/{id}', [ApplicationController::class,'applicationStatuses']);
    Route::get('application-all-statuses', [ApplicationController::class,'getAllApplicationStatuses']);
    Route::post('/application/{id}/status', [ApplicationController::class, 'updateStatus']);
    Route::post('/application/{id}/comment', [ApplicationController::class, 'addComment']);
    Route::get('/application/{id}/university-communications', [ApplicationController::class, 'getUniversityCommunications']);
    Route::post('/application/{id}/university-communication', [ApplicationController::class, 'addUniversityCommunication']);

    Route::get('dashboard', [DashboardController::class,'index']);
});


Route::post('register', [AuthController::class,'register']);
Route::post('login', [AuthController::class,'login']);
