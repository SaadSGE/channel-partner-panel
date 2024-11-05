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
            'proficiency_title' => 'nullable|string|max:255',
            'overall_score' => 'nullable|numeric',
            'listening' => 'nullable|numeric',
            'speaking' => 'nullable|numeric',
            'writing' => 'nullable|numeric',
            'reading' => 'nullable|numeric',
        ];
    }
}
