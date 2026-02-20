<?php

namespace App\Http\Controllers;

use Symfony\Component\HttpFoundation\JsonResponse;
use App\Http\Requests\LogupRequest;
use App\Http\Requests\LoginRequest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{

    private function issueToken(User $user) : array
    {
        $token = $user->createToken('auth_token');

        return ['token' => $token->plainTextToken];
    }

    public function logup(LogupRequest $r): JsonResponse
    {
        $newUser = User::create(['name' => $r->name, 'email' => $r->email, 'password' => $r->password]);
        return response()->json(['status' => true, 'user' => $newUser], 201 );
    }


    public function login(LoginRequest $r) : JsonResponse
    {
        $user = Auth::attempt($r->only('email', 'password'));

        if ($user) {
            $data = $this->issueToken(Auth::user());
            $data['status'] = true;
            return \response()->json($data, 200);
        }

        return \response()->json(['status' => false], 401);
    }

}
