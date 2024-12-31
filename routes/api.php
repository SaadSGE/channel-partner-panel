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
use App\Http\Controllers\FileController;
use App\Http\Controllers\EmailController;
use App\Http\Controllers\AIController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\CourseRequestController;
use App\Http\Controllers\NigeriaStudentController;
use App\Http\Controllers\BranchController;
use App\Http\Controllers\CountryController;
use App\Http\Controllers\LeadController;
use App\Http\Controllers\NoticeController;
use App\Http\Controllers\DailyTaskController;
use App\Http\Controllers\LeadStatusController;
use App\Http\Controllers\ApplicationStatusListController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\DemoDashboardController;
use App\Http\Controllers\LoginImageController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
Route::middleware('auth:api')->group(function () {
    Route::apiResource('application-country', ApplicationCountryController::class);
    Route::apiResource('course', CourseController::class);
    Route::apiResource('users', UserController::class);
    Route::post('/users/{id}/set-parent', [UserController::class, 'setParent']);
    Route::get('all-user', [UserController::class, 'allUser']);
    Route::apiResource('intake', IntakeController::class);

    Route::get('getUniqueCountry', [CourseDetailsController::class, 'getUniqueCountry']);
    Route::get('/intakes/country/{id}', [CourseDetailsController::class, 'getIntakeByCountry']);

    Route::get('/course-types/{countryId}/{intakeId}', [CourseDetailsController::class, 'getCourseTypeByCountryIntake']);
    Route::get('/universities/{countryId}/{intakeId}/{courseType}', [CourseDetailsController::class, 'getUniversityByCountryIntakeCourseType']);

    Route::get('/course-details/{intakeId}/{universityId}/{courseType}', [CourseDetailsController::class, 'getCourseDetails']);

    Route::apiResource('university', UniversityController::class);
    Route::post('request-record', [CourseDetailsController::class, 'requestRecord']);
    Route::apiResource('course-detail', CourseDetailsController::class);
    Route::apiResource('roles', RoleController::class);
    Route::post('/roles/{roleName}/permissions', [RoleController::class, 'store']);
    Route::apiResource('permissions', PermissionController::class);
    Route::get('all-permissions', [PermissionController::class, 'allPermission']);
    Route::apiResource('application', ApplicationController::class);


    // Demo Dashboard
    Route::get('demo-dashboard', [DemoDashboardController::class, 'getDemoStats']);
    Route::get('demo-application-statuses/{id}', [DemoDashboardController::class, 'getApplicationStatuses']);
    Route::get('demo-lead-statuses/{id}', [DemoDashboardController::class, 'getLeadStatuses']);


    Route::get('get-country-intake-university-course', [CourseDetailsController::class, 'countryIntakeUniversityCourse']);
    Route::post('update-application-file', [ApplicationController::class, 'updateApplicationFile']);
    Route::get('application-statuses/{id}', [ApplicationController::class, 'applicationStatuses']);
    Route::get('application-all-statuses', [ApplicationController::class, 'getAllApplicationStatuses']);
    Route::post('/application/{id}/status', [ApplicationController::class, 'updateStatus']);
    Route::post('/application/{id}/comment', [ApplicationController::class, 'addComment']);
    Route::get('/application/{id}/university-communications', [ApplicationController::class, 'getUniversityCommunications']);
    Route::post('/application/{id}/university-communication', [ApplicationController::class, 'addUniversityCommunication']);
    Route::get('/user/profile', [UserController::class, 'getProfile']);
    Route::put('/user/profile', [UserController::class, 'updateProfile']);
    Route::post('/user/change-password', [UserController::class, 'changePassword']);
    Route::get('dashboard', [DashboardController::class, 'index']);

    Route::get('emails/received', [EmailController::class, 'receivedEmails']);
    Route::get('emails/sent', [EmailController::class, 'sentEmails']);
    Route::post('emails/send', [EmailController::class, 'sendEmail']);
    Route::get('fetch-all-user', [UserController::class, 'fetchAllUser']);
    Route::get('/user/login-activity', [AuthController::class, 'getLoginActivity']);
    Route::get('/users/{user}/activity-logs', [UserController::class, 'getActivityLogs']);
    Route::get('/applications/{id}/activity-logs', [ApplicationController::class, 'getActivityLogs']);
    Route::put('/users/{id}/status', [UserController::class, 'updateStatus']);
    Route::get('/students/search', [StudentController::class, 'search']);
    Route::get('/fetch-editor', [UserController::class, 'fetchEditors']);
    Route::get('/fetch-editor', [UserController::class, 'fetchEditors']);
    Route::get('/notifications', [NotificationController::class, 'index']);
    Route::post('/notifications/{id}/mark-as-read', [NotificationController::class, 'markAsRead']);
    Route::post('/notifications/mark-all-as-read', [NotificationController::class, 'markAllAsRead']);
    Route::delete('/notifications/{id}', [NotificationController::class, 'destroy']);
    Route::post('applications/{id}/assign-officer', [ApplicationController::class, 'assignApplicationOfficer']);
    Route::get('applications/{id}/officers', [ApplicationController::class, 'getApplicationOfficers']);
    Route::get('/fetch-application-officers', [UserController::class, 'fetchApplicationOfficers']);

    Route::get('/application-requests', [ApplicationController::class, 'getApplicationRequests']);
    Route::post('/application-requests/{id}/accept', [ApplicationController::class, 'acceptApplicationRequest']);
    Route::post('/application-requests/{id}/reject', [ApplicationController::class, 'rejectApplicationRequest']);
    Route::get('/permissions-table', [PermissionController::class, 'indexForPermissionTable']);

    Route::get('/application/{id}/aco-ao-communications', [ApplicationController::class, 'getAcoAoCommunications']);
    Route::post('/application/{id}/aco-ao-communication', [ApplicationController::class, 'addAcoAoCommunication']);
    Route::get('/fetch-compliance-officers', [UserController::class, 'fetchComplianceOfficers']);
    Route::get('/course-requests', [CourseRequestController::class, 'index']);
    Route::post('/course-requests/{id}/complete', [CourseRequestController::class, 'complete']);

    Route::apiResource('notices', NoticeController::class);

    // Student section-specific routes
    Route::put('/students/{id}/general-info', [StudentController::class, 'updateGeneralInfo']);
    Route::put('/students/{id}/interested-university', [StudentController::class, 'updateInterestedUniversity']);
    Route::put('/students/{id}/educational-history', [StudentController::class, 'updateEducationalHistory']);
    Route::put('/students/{id}/english-proficiency', [StudentController::class, 'updateEnglishProficiency']);
    Route::put('/students/{id}/employment-history', [StudentController::class, 'updateEmploymentHistory']);
    Route::put('/students/{id}/documents', [StudentController::class, 'updateDocuments']);
});
Route::get('/students/{id}/universities', [StudentController::class, 'getUniversitiesForStudent']);
Route::apiResource('events', EventController::class);
Route::get('/leads/count', [LeadController::class, 'getLeadCount']);
Route::post('/leads/assign', [LeadController::class, 'assignLeads']);
Route::apiResource('daily-tasks', DailyTaskController::class);
Route::apiResource('lead-statuses', LeadStatusController::class);
Route::apiResource('application-statuses', ApplicationStatusListController::class);
Route::get('/active-notices', [NoticeController::class, 'getActiveNotices']);
Route::apiResource('notices', NoticeController::class);
Route::apiResource('students', StudentController::class);
Route::post('university-logo-upload', [UniversityController::class, 'logoUpload']);
Route::post('/download-all', [FileController::class, 'downloadAll'])->name('file.downloadAll');
Route::get('/download/{fileName}', [FileController::class, 'download'])->name('file.download');
Route::post('student-document-upload', [StudentFileController::class, 'upload']);
Route::post('student-document-upload-existing-application', [StudentFileController::class, 'uploadExistingApplication']);

Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);
Route::get('course-detail-all2', [CourseDetailsController::class, 'courseDetailsAll2']);
Route::get('course-detail-all', [CourseDetailsController::class, 'courseDetailsAll']);
Route::post('reset-password', [AuthController::class, 'resetPassword']);

Route::post('applications/{id}/restore', [ApplicationController::class, 'restore'])->name('applications.restore');

Route::post('/applications/{id}/assign-compliance-officer', [ApplicationController::class, 'assignComplianceOfficer']);
Route::get('/applications/{id}/compliance-officers', [ApplicationController::class, 'getComplianceOfficerAssignments']);
Route::get('/application/{id}/aco-co-communications', [ApplicationController::class, 'getAcoCoCommunications']);
Route::post('/application/{id}/aco-co-communication', [ApplicationController::class, 'addAcoCoCommunication']);

Route::get('/compliance-requests', [ApplicationController::class, 'getComplianceRequests']);
Route::post('/compliance-requests/{id}/accept', [ApplicationController::class, 'acceptComplianceRequest']);
Route::post('/compliance-requests/{id}/reject', [ApplicationController::class, 'rejectComplianceRequest']);

Route::get('/notifications/all', [NotificationController::class, 'getAllNotifications']);

Route::post('/nigeria-students', [NigeriaStudentController::class, 'store']);
Route::apiResource('branches', BranchController::class);
Route::apiResource('countries', CountryController::class);
Route::post('/generate', [AIController::class, 'generateResponse']);
Route::apiResource('students', StudentController::class);
Route::apiResource('leads', LeadController::class);
Route::post('/application/{id}/aco-ao-communication', [ApplicationController::class, 'addAcoAoCommunication']);
Route::post('/leads/upload', [LeadController::class, 'uploadLeads']);
Route::post('/leads/{leadId}/add-note', [LeadController::class, 'addNoteToLead'])->middleware('auth:api');

Route::get('/login-image', [LoginImageController::class, 'getLoginImage']);
