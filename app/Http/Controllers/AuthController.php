<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Auth;
use Log;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        // $request->validate([
        //     'firstName' => 'required|string|max:255',
        //     'lastName' => 'nullable|string|max:255',
        //     'email' => 'required|email|max:255',
        //     'mobileNumber' => 'nullable|string|max:255',
        //     'whatsappNumber' => 'nullable|string|max:255',
        //     'companyName' => 'required|string|max:255',
        //     'website' => 'nullable|url|max:255',
        //     'address' => 'required|string|max:255',
        //     'city' => 'required|string|max:255',
        //     'postCode' => 'required|string|max:255',
        //     'country' => 'required|string|max:255',
        //     'recruite_countries' => 'required|array',
        //     'password' => 'required',
        // ]);



        $userDetail = new User([
                     'first_name' => $request->firstName,
                     'last_name' => $request->lastName,
                     'email' => $request->email,
                     'mobile_number' => $request->mobileNumber,
                     'whatsapp_number' => $request->whatsappNumber,
                     'company_name' => $request->companyName,
                     'website' => $request->website,
                     'address' => $request->address,
                     'city' => $request->city,
                     'post_code' => $request->postCode,
                     'country' => $request->country,
                     'role' => 'admin',
                     'recruit_countries' => json_encode($request->recruite_countries),
                     'password' => bcrypt($request->password)
                 ]);

        $userDetail->save();
        return $this->successJsonResponse('User Registration Successfull', $userDetail);
    }

    /**
    * Handle a login request to the application.
    *
    * @param Request $request
    * @return \Illuminate\Http\JsonResponse
    */
    public function login(Request $request)
    {
        Log::info($request->all());
        // Validate the login request
        // $request->validate([
        //     'email' => 'required|email',
        //     'password' => 'required|string|min:6',
        // ]);

        // Attempt to authenticate the user
        $credentials = $request->only('email', 'password');

        if (!Auth::attempt($credentials)) {
            return $this->errorJsonResponse('The provided credentials are incorrect');
        }

        // Get the authenticated user
        $user = Auth::user();

        // Generate a Sanctum token for the user
        $token = $user->createToken('authToken')->plainTextToken;
        return $this->successJsonResponse('Credential match', [ 'accessToken' => $token,
        'userData' => $user,]);


    }
}
