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
            'interested_university.*.id' => 'nullable',
            'interested_university.*.country_id' => 'nullable',
            'interested_university.*.intake_id' => 'nullable',
            'interested_university.*.university_id' => 'nullable',
            'interested_university.*.course_id' => 'nullable',
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
