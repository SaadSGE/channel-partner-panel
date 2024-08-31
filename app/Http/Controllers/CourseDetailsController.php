<?php

namespace App\Http\Controllers;

use App\Models\CourseDetails;
use App\Models\Course;
use Illuminate\Http\Request;
use Log;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Cache;
use Exception;

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
        if ($id == null) {
            if ($userRole == 'editor') {
                $id = $userId;
            }
        }
        $searchQuery = strtoupper(strtolower(trim(request()->query('q'))));
        $perPage = (int)request()->query('perPage') ?: 10;
        $sortBy = (string)request()->query('sortBy');
        $sortDesc = filter_var(request()->query('sortDesc'), FILTER_VALIDATE_BOOLEAN);
        $queryResult = CourseDetails::with(['course', 'country', 'intake', 'university'])->when($searchQuery, function ($query, $searchQuery) {
            return $query->where(function ($query) use ($searchQuery) {
                $query->where('course_id', 'LIKE', "%$searchQuery%");

            });
        })
        ->when($id, function ($query, $id) {
            return $query->where('created_by', $id);
        })
        ->when($sortBy, function ($query) use ($sortBy, $sortDesc) {
            return
                $query->when($sortBy === 'id', function ($sq) use ($sortDesc) {
                    return $sq->when($sortDesc, function ($ssq) {
                        return $ssq->orderBy('P.id', 'DESC');
                    }, function ($ssq) {
                        return $ssq->orderBy('P.id');
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

            Cache::forget('course_details_all2');
            // Log the newly created course detail
            Log::info('CourseDetail created: ', $courseDetail->toArray());

            return $this->successJsonResponse('Course details found', $courseDetail);
        } catch (\Throwable $th) {
            // Rollback the transaction
            DB::rollBack();

            // Log the error
            Log::error('Error creating CourseDetail: ', ['error' => $th]);
            return $this->exceptionJsonResponse('Error creating CourseDetail', $th);

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
                return CourseDetails::with(['course', 'country', 'intake', 'university'])->get();
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
        $data = DB::table('country_intake_course_university_map_view')->get();
        return $this->successJsonResponse('Course Intake University Details Found', $data);
    }
}
