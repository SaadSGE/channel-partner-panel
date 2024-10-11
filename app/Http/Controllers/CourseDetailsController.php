<?php

namespace App\Http\Controllers;

use App\Models\CourseDetails;
use App\Models\Course;
use Illuminate\Http\Request;
use Log;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Cache;
use Exception;
use App\Models\CountryIntakeUniversityCourse;
use App\Models\RequestRecord;
use Illuminate\Support\Facades\Notification;
use App\Notifications\EmailNotification;
use App\Models\User;
use App\Models\UniqueCountryIntakeView;
use App\Models\UniqueCountryIntakeCourseTypeView;
use App\Models\UniqueCountryIntakeCourseUniversityView;
use App\Models\IntakeUniversityCourseDetailsView;
use Illuminate\Support\Facades\Auth;
use Spatie\Activitylog\Facades\Activity;

class CourseDetailsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $id = (int) request()->query('id') ?: null;
        $userId = auth('api')->user()->id;
        $userRole = auth('api')->user()->role;

        if ($id == null && $userRole == 'editor') {
            $id = $userId;
        }

        $searchQuery = strtoupper(strtolower(trim(request()->query('searchQuery'))));
        $perPage = (int) request()->query('perPage') ?: 10;
        $sortBy = (string) request()->query('sortBy');
        $sortDesc = filter_var(request()->query('sortDesc'), FILTER_VALIDATE_BOOLEAN);

        // Existing filter parameters
        $countryId = request()->query('countryId');
        $intakeId = request()->query('intakeId');
        $universityId = request()->query('universityId');
        $courseName = request()->query('courseName');

        // New filter parameters
        $dateFrom = request()->query('dateFrom');
        $dateTo = request()->query('dateTo');
        $editorId = request()->query('editorID');

        $queryResult = CourseDetails::with(['course', 'country', 'intake', 'university'])
            ->when($searchQuery, function ($query, $searchQuery) {
                return $query->where(function ($query) use ($searchQuery) {
                    $query->where('course_id', 'LIKE', "%$searchQuery%")
                        ->orWhereHas('course', function ($q) use ($searchQuery) {
                            $q->where('name', 'LIKE', "%$searchQuery%");
                        })
                        ->orWhereHas('university', function ($q) use ($searchQuery) {
                            $q->where('name', 'LIKE', "%$searchQuery%");
                        })
                        ->orWhereHas('intake', function ($q) use ($searchQuery) {
                            $q->where('name', 'LIKE', "%$searchQuery%");
                        });
                });
            })
            ->when($id, function ($query, $id) {
                return $query->where('created_by', $id);
            })
            // Existing filter conditions
            ->when($countryId, function ($query, $countryId) {
                return $query->where('country_id', $countryId);
            })
            ->when($intakeId, function ($query, $intakeId) {
                return $query->where('intake_id', $intakeId);
            })
            ->when($universityId, function ($query, $universityId) {
                return $query->where('university_id', $universityId);
            })
            ->when($courseName, function ($query, $courseName) {
                return $query->whereHas('course', function ($q) use ($courseName) {
                    $q->where('name', 'LIKE', "%$courseName%");
                });
            })
            // New filter conditions
            ->when($dateFrom, function ($query, $dateFrom) {
                return $query->whereDate('created_at', '>=', $dateFrom);
            })
            ->when($dateTo, function ($query, $dateTo) {
                return $query->whereDate('created_at', '<=', $dateTo);
            })
            ->when($editorId, function ($query, $editorId) {
                return $query->where('created_by', $editorId);
            })
            ->when($sortBy, function ($query) use ($sortBy, $sortDesc) {
                return $query->when($sortBy === 'id', function ($sq) use ($sortDesc) {
                    return $sq->when($sortDesc, function ($ssq) {
                        return $ssq->orderBy('id', 'DESC');
                    }, function ($ssq) {
                        return $ssq->orderBy('id');
                    });
                });
            }, function ($query) {
                return $query->latest('created_at');
            })
            ->when($perPage, function ($query, $perPage) {
                return $query->paginate($perPage);
            }, function ($query) {
                return $query->get();
            })
            ->toArray();

        $products = $perPage ? $queryResult['data'] : $queryResult;
        $totalRows = $perPage ? $queryResult['total'] : count($queryResult);

        return $this->successJsonResponse("Course Details Information found!", $products, $totalRows);
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            // Start the database transaction
            DB::beginTransaction();

            // Validate the incoming request
            $validatedData = $request->validate([
                'countryId' => 'required|exists:application_countries,id',
                'intakeId' => 'required|exists:intakes,id',
                'courseType' => 'required|string',
                'universityId' => 'required|exists:universities,id',
                'course' => 'required|string',
                'tutionFee' => 'required',
                'courseDuration' => 'required|string',
                'academicRequirement' => 'required|string',
                'englishRequirement' => 'required|string',
            ]);

            // Find or create the course
            $course = Course::firstOrCreate(
                ['type' => $validatedData['courseType'], 'name' => $validatedData['course']]
            );

            // Create the CourseDetail record
            $courseDetail = CourseDetails::create([
                'course_id' => $course->id,
                'country_id' => $validatedData['countryId'],
                'intake_id' => $validatedData['intakeId'],
                'university_id' => $validatedData['universityId'],
                'tuition_fee' => $validatedData['tutionFee'],
                'course_duration' => $validatedData['courseDuration'],
                'academic_requirement' => $validatedData['academicRequirement'],
                'english_requirement' => $validatedData['englishRequirement'],
            ]);

            // Commit the transaction
            DB::commit();

            // Clear the cache for course details

            Cache::forget('course_details_all');
            Cache::forget('country_intake_university_course');
            // Log the newly created course detail
            Log::info('CourseDetail created: ', $courseDetail->toArray());

            // Return success response
            return $this->successJsonResponse('Course detail created successfully', $courseDetail);
        } catch (\Throwable $th) {
            // Rollback the transaction
            DB::rollBack();

            // Log the error
            Log::error('Error creating CourseDetail: ', ['error' => $th]);

            // Return error response
            return $this->exceptionJsonResponse($th, 'Error creating CourseDetail');
        }
    }


    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        try {

            DB::beginTransaction();

            $validatedData = $request->validate([
                'countryId' => 'required|exists:application_countries,id',
                'intakeId' => 'required|exists:intakes,id',
                'courseType' => 'required|string',
                'universityId' => 'required|exists:universities,id',
                'course' => 'required|string',
                'tutionFee' => 'required',
                'courseDuration' => 'required|string',
                'academicRequirement' => 'required|string',
                'englishRequirement' => 'required|string',
            ]);


            $courseDetail = CourseDetails::findOrFail($id);


            $course = Course::firstOrCreate(
                ['type' => $validatedData['courseType'], 'name' => $validatedData['course']]
            );


            $courseDetail->update([
                'course_id' => $course->id,
                'country_id' => $validatedData['countryId'],
                'intake_id' => $validatedData['intakeId'],
                'university_id' => $validatedData['universityId'],
                'tuition_fee' => $validatedData['tutionFee'],
                'course_duration' => $validatedData['courseDuration'],
                'academic_requirement' => $validatedData['academicRequirement'],
                'english_requirement' => $validatedData['englishRequirement'],
            ]);

            // Commit the transaction
            DB::commit();
            Cache::forget('course_details_all');
            Cache::forget('country_intake_university_course');
            // Log the updated course detail
            Log::info('CourseDetail updated: ', $courseDetail->toArray());

            return $this->successJsonResponse('Course details updated successfully', $courseDetail);
        } catch (\Throwable $th) {
            // Rollback the transaction
            DB::rollBack();

            // Log the error
            Log::error('Error updating CourseDetail: ', ['error' => $th]);
            return $this->exceptionJsonResponse('Error updating CourseDetail', $th);
        }
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {
            $courseDetail = CourseDetails::findOrFail($id);

            $courseDetail->delete();
            return $this->successJsonResponse('Course detail deleted successfully');
        } catch (\Throwable $th) {

            \Log::error('Course detail delete error: ' . $th);
            return $this->exceptionJsonResponse('An unexpected error occurred', $th);
        }
    }

    public function courseDetailsAll()
    {

        // Define a cache key
        $cacheKey = 'course_details_all';

        try {
            // Check if the data is already cached. If not, execute the query and cache the result.
            $courseDetails = Cache::rememberForever($cacheKey, function () {
                return CountryIntakeUniversityCourse::get();
            });

            // Return the cached or fresh data
            return $this->successJsonResponse('Course details found', $courseDetails);

        } catch (Exception $e) {
            // Log the error message
            Log::error('Error in courseDetailsAll: ' . $e->getMessage());

            // Return a generic error response
            return $this->errorJsonResponse('An error occurred while retrieving course details.', 500);
        }
    }

    public function courseDetailsAll2()
    {
        // Define a cache key
        $cacheKey = 'course_details_all2';

        try {
            // Check if the data is already cached. If not, execute the query and cache the result.
            $courseDetails = Cache::rememberForever($cacheKey, function () {
                Log::info('Fetching course details from the database.');
                return CourseDetails::with(['course', 'country', 'intake', 'university'])->get();
            });

            if (Cache::has($cacheKey)) {
                Log::info('Course details retrieved from cache.');
            }

            // Return the cached or fresh data
            return $this->successJsonResponse('Course details found', $courseDetails);

        } catch (Exception $e) {
            // Log the error message
            Log::error('Error in courseDetailsAll2: ' . $e->getMessage());

            // Optionally, log the full stack trace if you need more details
            Log::error($e->getTraceAsString());

            // Return a generic error response
            return $this->errorJsonResponse('An error occurred while retrieving course details.', 500);
        }
    }

    public function countryIntakeUniversityCourse()
    {
        // Define a cache key
        $cacheKey = 'country_intake_university_course';

        try {
            // Check if the data is already cached. If not, execute the query and cache the result.
            $data = Cache::rememberForever($cacheKey, function () {
                return CountryIntakeUniversityCourse::get();
            });

            // Return the cached or fresh data
            return $this->successJsonResponse('Course Intake University Details Found', $data);

        } catch (Exception $e) {
            // Log the error message
            Log::error('Error in countryIntakeUniversityCourse: ' . $e->getMessage());

            // Return a generic error response
            return $this->errorJsonResponse('An error occurred while retrieving course intake university details.', 500);
        }
    }

    public function requestRecord(Request $request)
    {
        $validatedData = $request->validate([
            'universityName' => 'required|string',
            'courseName' => 'required|string',
            'intakeName' => 'required|string',
        ]);

        try {
            // Create the request record
            $requestRecord = RequestRecord::create([
                'university_name' => $validatedData['universityName'],
                'course_name' => $validatedData['courseName'],
                'intake' => $validatedData['intakeName'],
                'user_id' => auth('api')->id(),
            ]);

            // Log the activity
            activity()
                ->performedOn($requestRecord)
                ->causedBy(auth('api')->user())
                ->withProperties([
                    'university_name' => $validatedData['universityName'],
                    'course_name' => $validatedData['courseName'],
                    'intake' => $validatedData['intakeName'],
                    'ip' => $request->ip(),
                    'user_agent' => $request->userAgent(),
                ])
                ->log('course_request_submitted');

            // Fetch admin users to notify
            $users = User::where('role', 'admin')->get();

            // Prepare the notification details
            $details = [
                'subject' => 'Request for New Course/University/Intake',
                'body' => "A new request has been submitted for the following details:<br><br>"
                        . "University Name: " . $validatedData['universityName'] . "<br>"
                        . "Course Name: " . $validatedData['courseName'] . "<br>"
                        . "Intake: " . $validatedData['intakeName'] . "<br><br>"
                        . "Please review and take necessary action.",
                'recipients' => $users->pluck('email')->toArray(),
                'sender_id' => $request->user()->id,
                'sender_name' => $request->user()->full_name,
                'sender_email' => $request->user()->email,
                'notification_type' => 'email',
            ];

            // Send email notification to admin users
            Notification::route('mail', 'no-reply@shabujglobal.africa')
                ->notify(new EmailNotification($details));

            // Send database notification to admin users
            $details['send_via'] = 'database';
            Notification::send($users, new EmailNotification($details));

            return $this->successJsonResponse('Request record submitted successfully', $requestRecord);

        } catch (\Throwable $th) {
            // Log the error as an activity
            activity()
                ->causedBy(auth('api')->user())
                ->withProperties([
                    'error' => $th->getMessage(),
                    'university_name' => $validatedData['universityName'],
                    'course_name' => $validatedData['courseName'],
                    'intake' => $validatedData['intakeName'],
                    'ip' => $request->ip(),
                    'user_agent' => $request->userAgent(),
                ])
                ->log('course_request_failed');

            return $this->exceptionJsonResponse('Failed to submit request record.', $th);
        }
    }

    public function getUniqueCountry()
    {
        try {
            $countries = UniqueCountryIntakeView::distinct()->select('country_id as id', 'country_name as name')->get();
            return $this->successJsonResponse('Country retrive successfully', $countries);
        } catch (Exception $e) {
            return $this->exceptionJsonResponse($e, 'Failed to retrieve country.');
        }
    }

    public function getIntakeByCountry($id)
    {
        try {
            $intakes = UniqueCountryIntakeView::where('country_id', $id)->get(['intake_id','intake_name']);
            return $this->successJsonResponse('Intakes retrieved successfully', $intakes);
        } catch (Exception $e) {
            return $this->exceptionJsonResponse($e, 'Failed to retrieve intakes.');
        }
    }


    public function getCourseTypeByCountryIntake($countryId, $intakeId)
    {
        try {
            $courseTypes = UniqueCountryIntakeCourseTypeView::where('country_id', $countryId)
                                                            ->where('intake_id', $intakeId)
                                                            ->get(['course_type']);

            // Transforming the data to have 'id' and 'name' as the same value
            $transformedCourseTypes = $courseTypes->map(function ($courseType) {
                return [
                    'id' => $courseType->course_type,
                    'name' => $courseType->course_type
                ];
            });

            return $this->successJsonResponse('Course types retrieved successfully', $transformedCourseTypes);
        } catch (Exception $e) {
            return $this->exceptionJsonResponse($e, 'Failed to retrieve course types.');
        }
    }



    public function getUniversityByCountryIntakeCourseType($countryId, $intakeId, $courseType)
    {
        try {
            $universities = UniqueCountryIntakeCourseUniversityView::where('country_id', $countryId)
                                                                   ->where('intake_id', $intakeId)
                                                                   ->where('course_type', $courseType)
                                                                   ->get(['university_id','university_name','university_logo','university_address']);
            return $this->successJsonResponse('Universities retrieved successfully', $universities);
        } catch (Exception $e) {
            return $this->exceptionJsonResponse($e, 'Failed to retrieve universities.');
        }
    }


    public function getCourseDetails($intakeId, $universityId, $courseType)
    {
        try {
            // Fetch only the course-related details
            $courseDetails = CountryIntakeUniversityCourse::where('intake_id', $intakeId)
                                                          ->where('university_id', $universityId)
                                                          ->where('course_type', $courseType)
                                                          ->get([
                                                              'id',
                                                              'course_id',
                                                              'course_name',
                                                              'tution_fee',
                                                              'course_duration',
                                                              'academic_requirement',
                                                              'english_requirement'
                                                          ]);
            return $this->successJsonResponse('Course details retrieved successfully', $courseDetails);
        } catch (Exception $e) {
            return $this->exceptionJsonResponse($e, 'Failed to retrieve course details.');
        }
    }





}
