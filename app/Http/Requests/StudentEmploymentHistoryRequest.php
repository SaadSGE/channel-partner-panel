<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StudentEmploymentHistoryRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'employment_history' => 'nullable|array',
            'employment_history.*.id' => 'nullable',
            'employment_history.*.company_name' => 'nullable|string|max:255',
            'employment_history.*.designation' => 'nullable|string|max:255',
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
