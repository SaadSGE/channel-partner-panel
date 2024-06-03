<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Auth;
use Log;
use Spatie\Permission\Models\Role;

class AuthController extends Controller
{
    public function register(Request $request)
    {


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
                     'role' => 'channel partner',
                     'recruit_countries' => json_encode($request->recruite_countries),
                     'password' => bcrypt($request->password)
                 ]);

        $userDetail->save();
        $channelPartnerRole = Role::where('name', 'channel partner')->first();

        $userDetail->assignRole($channelPartnerRole);
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


        $credentials = $request->only('email', 'password');

        if (!Auth::attempt($credentials)) {
            return $this->errorJsonResponse('The provided credentials are incorrect');
        }

        // Get the authenticated user
        $user = Auth::user();

        $abilities = $user->getUserAbilitiesAttribute();

        $formattedAbilities = [];
        foreach ($abilities as $ability) {
            list($action, $subject) = explode('.', $ability);
            $formattedAbilities[] = ['action' => $subject, 'subject' => $action];
        }

        $token = $user->createToken('authToken')->plainTextToken;
        return $this->successJsonResponse('Credential match', [ 'accessToken' => $token,
        'userData' => $user,'abilities' => $formattedAbilities]);


    }
}
