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
            'degree_name' => 'nullable|string|max:255',
            'institution_name' => 'nullable|string|max:255',
            'passing_year' => 'nullable|date_format:Y',
            'result' => 'nullable|string|max:255',
        ];
    }
}
