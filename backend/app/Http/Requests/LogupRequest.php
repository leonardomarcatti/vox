<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LogupRequest extends FormRequest
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
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users',
            'password' => 'required|string|confirmed|min:3',
            'password_confirmation' => 'required|string|min:3',
        ];
    }

    public function messages() : array
    {
        return [
            'name.required' => 'O campo é obrigatório',
            'name.string' => 'O campo deve ser preenchido com algum texto',
            'name.max' => 'O campo é muito longo',
            'email.required' => 'O campo é obrigatório',
            'email.email' => 'O campo deve ser do tipo email',
            'email.unique' => 'Esse email já está em uso.',
            'password.required' => 'O campo é obrigatório',
            'password.string' => 'O campo deve ser preenchido',
            'password.min' => 'Sua senha deve ter no mínimo 3 caracteres',
            'password.confirmed' => 'As senhas não batem',
            'password_confirmation.required' => 'O campo é obrigatório',
            'password_confirmation.string' => 'O campo deve ser preenchido',
            'password_confirmation.min' => 'Sua senha deve ter no mínimo 3 caracteres',
        ];
    }
}
