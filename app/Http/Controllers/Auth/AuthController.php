<?php

namespace App\Http\Controllers\Auth;

use Hash;
use App\Models\User;
use Inertia\Inertia;
use App\Http\Requests\Login;
use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\UserRegistration;
use GuzzleHttp\Psr7\Request;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    /**
     * Write code on Method
     *
     * @return response()
     */
    public function index()
    {
    
        return Inertia::render('Auth/login');
    }

    /**
     * Write code on Method
     *
     * @return response()
     */
  
    public function postLogin(Login $request)
    {
        $user = User::where('email', $request->email)->first();
\Log::info("user :: ". $user);


        if (!$user || ! Hash::check($request->password, $user->password)) {
            \Log::info("if user");
            throw ValidationException::withMessages([
                'login' => ['The provided credentials are incorrect.'],
            ]);
        }
        $userToken = $user->createToken("apptoken")->plainTextToken;
        $user->token =  $userToken;
        return Inertia::render('welcome');
    }


    public function logout(Request $request)
    {
        \Log::info("message");
        $request->user()->currentAccessToken()->delete();
        return Inertia::render('welcome');

    }
}
