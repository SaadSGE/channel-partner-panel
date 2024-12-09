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
        $studentId = $this->route('id');


        return [
            'general_info' => 'required|array',

            // Required fields
            'general_info.student_first_name' => 'required|string|max:255',
            'general_info.student_last_name' => 'required|string|max:255',
            'general_info.student_email' => [
                'required',
                'email',
                'unique:students,email,' . ($studentId ?? 'NULL') . ',id',
            ],
            'general_info.student_whatsapp_number' => 'required|string',

            // Nullable fields
            'general_info.student_passport_no' => [
                'nullable',
                'string',
                'unique:students,passport_no,' . ($studentId ?? 'NULL') . ',id',
            ],
            'general_info.student_address' => 'nullable|string',
            'general_info.student_city' => 'nullable|string',
            'general_info.student_country' => 'nullable|string',
            'general_info.student_region_state' => 'nullable|string',
            'general_info.date_of_birth' => 'nullable|date',
            'general_info.gender' => 'nullable',
            'general_info.visa_refusal' => 'nullable|in:yes,no',
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
