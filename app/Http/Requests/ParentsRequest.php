<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ParentsRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'email' => 'required|unique:parents,email',
            'main_guardian_name' => 'required',
            'main_guardian_phone' => 'required',
            'secondary_guardian_name' => 'required',
            'secondary_guardian_phone' => 'required',
            'address'=> 'required',
        ];
    }
}
