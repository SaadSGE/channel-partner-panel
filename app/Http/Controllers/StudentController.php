<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class StudentController extends Controller
{
    public function search(Request $request)
    {
        $query = $request->input('query');

        $students = Student::where('created_by', auth('api')->id())
            ->when($query, function ($q) use ($query) {
                return $q->where(function ($subQ) use ($query) {
                    $subQ->where('first_name', 'like', "%{$query}%")
                        ->orWhere('last_name', 'like', "%{$query}%")
                        ->orWhere('email', 'like', "%{$query}%")
                        ->orWhere('passport_no', 'like', "%{$query}%");
                });
            })
            ->get(['id', 'first_name', 'last_name', 'email', 'passport_no', 'date_of_birth']);

        return $this->successJsonResponse('Students fetched successfully', $students);
    }

    public function index(Request $request)
    {
        $user = auth('api')->user();
        $perPage = (int) $request->query('perPage', 10);
        $searchQuery = strtoupper(trim($request->query('searchQuery', '')));
        $sortBy = $request->query('sortBy', 'created_at');
        $orderBy = $request->query('orderBy', 'desc');

        $query = Student::query();

        // Add search functionality
        if ($searchQuery) {
            $query->where(function ($q) use ($searchQuery) {
                $q->where('first_name', 'LIKE', "%$searchQuery%")
                    ->orWhere('last_name', 'LIKE', "%$searchQuery%")
                    ->orWhere('email', 'LIKE', "%$searchQuery%")
                    ->orWhere('passport_no', 'LIKE', "%$searchQuery%");
            });
        }

        // Add filters
        if ($request->filled('gender')) {
            $query->where('gender', $request->query('gender'));
        }

        if ($request->filled('visa_refusal')) {
            $query->where('visa_refusal', $request->query('visa_refusal'));
        }

        if ($request->filled('country')) {
            $query->where('country', $request->query('country'));
        }

        // Add date range filter
        if ($request->filled('dateFrom')) {
            $query->whereDate('created_at', '>=', $request->query('dateFrom'));
        }

        if ($request->filled('dateTo')) {
            $query->whereDate('created_at', '<=', $request->query('dateTo'));
        }

        // Sorting
        $query->orderBy($sortBy, $orderBy);

        // Pagination
        $students = $query->paginate($perPage);

        // Log the activity
        activity()
            ->causedBy(Auth::user())
            ->withProperties([
                'ip' => $request->ip(),
                'user_agent' => $request->userAgent(),
                'total_results' => $students->total(),
                'filters' => $request->only(['gender', 'visa_refusal', 'country', 'dateFrom', 'dateTo']),
                'search_query' => $searchQuery,
            ])
            ->log('student_index_view');

        return $this->successJsonResponse("Students found successfully", $students->items(), $students->total());
    }

    public function show($id)
    {
        try {
            $student = Student::with(['applications.university', 'applications.intake', 'documents'])
                ->findOrFail($id);

            activity()
                ->causedBy(Auth::user())
                ->performedOn($student)
                ->withProperties([
                    'ip' => request()->ip(),
                    'user_agent' => request()->userAgent(),
                    'student_id' => $student->id,
                    'student_email' => $student->email,
                ])
                ->log('student_view');

            return $this->successJsonResponse("Student details retrieved successfully", $student);
        } catch (\Exception $e) {
            Log::error('Failed to retrieve student details', ['error' => $e->getMessage(), 'id' => $id]);
            return $this->exceptionJsonResponse('Failed to retrieve student details', $e);
        }
    }
}
