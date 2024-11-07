<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StudentGeneralInfoRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        $studentId = $this->route('student'); // Assuming you pass the student ID as a route parameter for update

        return [
            'general_info' => 'required|array',

            // Conditionally required fields for create (POST) and update (PUT/PATCH)
            'general_info.student_first_name' => $this->isMethod('post') ? 'required|string|max:255' : 'sometimes|required|string|max:255',
            'general_info.student_last_name' => $this->isMethod('post') ? 'required|string|max:255' : 'sometimes|required|string|max:255',

            // Unique fields with conditional update handling
            'general_info.student_passport_no' => [
                $this->isMethod('post') ? 'required' : 'sometimes',
                'string',
                'unique:students,passport_no,' . ($studentId ?? 'NULL') . ',id',
            ],
            'general_info.student_email' => [
                $this->isMethod('post') ? 'required' : 'sometimes',
                'email',
                'unique:students,email,' . ($studentId ?? 'NULL') . ',id',
            ],

            'general_info.student_whatsapp_number' => 'nullable|string',
            'general_info.student_address' => 'nullable|string',
            'general_info.student_city' => 'nullable|string',
            'general_info.student_country' => 'nullable|string',
            'general_info.student_region_state' => 'nullable|string',

            // Date and gender fields
            'general_info.date_of_birth' => $this->isMethod('post') ? 'required|date' : 'sometimes|required|date',
            'general_info.gender' => $this->isMethod('post') ? 'required|in:male,female' : 'sometimes|required|in:male,female',

            // Visa refusal status
            'general_info.visa_refusal' => $this->isMethod('post') ? 'required|in:yes,no' : 'sometimes|required|in:yes,no',
        ];
    }

    public function failedValidation(\Illuminate\Contracts\Validation\Validator $validator)
    {
        $flattenedErrors = collect($validator->errors())->flatten()->all();

        throw new \Illuminate\Http\Exceptions\HttpResponseException(
            response()->json([
                'status' => false,
                'message' => 'Validation Error',
                'data' => $flattenedErrors,
                'total' => 0,
            ], 422)
        );
    }
}
