<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StudentInterestedUniversityRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'interested_university' => 'nullable|array',
            'interested_university.*.country_id' => 'nullable|exists:application_countries,id',
            'interested_university.*.intake_id' => 'nullable|exists:intakes,id',
            'interested_university.*.university_id' => 'nullable|exists:universities,id',
            'interested_university.*.course_id' => 'nullable|exists:courses,id',
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
