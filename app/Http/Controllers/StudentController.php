<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;

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
}
