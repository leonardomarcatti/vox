<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class NewTaskRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => 'required|string|',
            'description' => 'required|string',
        ];
    }

    public function messages() : array
    {
        return [
            'title.required' => 'O campo é obrigatório',
            'title.string' => 'O campo deve ser um texto',
            'description.required' => 'O campo é obrigatório',
            'description.string' => 'O campo deve ser um texto',
        ];
    }
}
