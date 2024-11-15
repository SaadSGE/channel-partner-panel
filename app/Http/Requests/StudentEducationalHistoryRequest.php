<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StudentEducationalHistoryRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'educational_history' => 'nullable|array',
            'educational_history.*.degree_name' => 'nullable|string|max:255',
            'educational_history.*.institution_name' => 'nullable|string|max:255',
            'educational_history.*.passing_year' => 'nullable|date_format:Y',
            'educational_history.*.result' => 'nullable|string|max:255',
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
