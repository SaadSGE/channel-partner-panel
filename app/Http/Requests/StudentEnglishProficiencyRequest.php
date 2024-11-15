<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StudentEnglishProficiencyRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'english_proficiency' => 'nullable|array',
            'english_proficiency.*.proficiency_title' => 'nullable|string|max:255',
            'english_proficiency.*.overall_score' => 'nullable|numeric',
            'english_proficiency.*.listening' => 'nullable|numeric',
            'english_proficiency.*.speaking' => 'nullable|numeric',
            'english_proficiency.*.writing' => 'nullable|numeric',
            'english_proficiency.*.reading' => 'nullable|numeric',
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
