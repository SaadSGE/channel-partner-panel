<?php

namespace App\Http\Controllers;

use App\Models\NigeriaStudentRecord;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class NigeriaStudentController extends Controller
{
    public function store(Request $request)
    {
        try {
            $validatedData = $request->validate([
                'fullName' => 'required|string|max:255',
                'email' => 'required|email|max:255',
                'contactNumber' => 'required|string|max:20',
                'interestedCourse' => 'required|string|max:255',
            ]);

            $student = NigeriaStudentRecord::create([
                'full_name' => $validatedData['fullName'],
                'email' => $validatedData['email'],
                'contact_number' => $validatedData['contactNumber'],
                'interested_course' => $validatedData['interestedCourse'],
            ]);

            return $this->successJsonResponse('Student registered successfully', $student, '', 201);
        } catch (\Illuminate\Validation\ValidationException $e) {
            return $this->handleValidationErrors($e);
        } catch (\Throwable $th) {
            Log::error('Error registering Nigeria student:', ['error' => $th->getMessage()]);
            return $this->exceptionJsonResponse('Failed to register student', $th);
        }
    }

    public function index(Request $request)
    {
        try {
            $perPage = $request->query('perPage', 10);
            $searchQuery = $request->query('searchQuery', '');

            $students = NigeriaStudentRecord::when($searchQuery, function ($query, $searchQuery) {
                return $query->where('full_name', 'like', "%{$searchQuery}%")
                             ->orWhere('email', 'like', "%{$searchQuery}%");
            })->paginate($perPage);

            return $this->successJsonResponse('Students retrieved successfully', $students->items(), $students->total());
        } catch (\Throwable $th) {
            Log::error('Error fetching Nigeria students:', ['error' => $th->getMessage()]);
            return $this->exceptionJsonResponse('Failed to fetch students', $th);
        }
    }
}
