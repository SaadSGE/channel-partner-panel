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
        return [
            'student_first_name' => 'required|string|max:255',
            'student_last_name' => 'required|string|max:255',
            'student_passport_no' => 'required|string|unique:students,passport_no',
            'student_email' => 'required|email|unique:students,email',
            'student_whatsapp_number' => 'nullable|string',
            'student_address' => 'nullable|string',
            'student_city' => 'nullable|string',
            'student_country' => 'nullable|string',
            'student_region_state' => 'nullable|string',
            'date_of_birth' => 'required|date',
            'gender' => 'required|in:male,female',
            'visa_refusal' => 'required|in:yes,no',
        ];
    }
}
