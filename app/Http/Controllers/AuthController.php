<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Log;
use Spatie\Permission\Models\Role;
use App\Notifications\NewUserRegistrationNotification;
use Illuminate\Support\Facades\Notification;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        // Determine the role based on the form type
        $role = $request->createForm === 'admin' ? $request->role : 'channel partner';

        // Create a new User instance with nullable fields using null coalescing
        $userDetail = new User([
            'first_name' => $request->firstName ?? null,
            'last_name' => $request->lastName ?? null,
            'email' => $request->email ?? null,
            'mobile_number' => $request->mobileNumber ?? null,
            'whatsapp_number' => $request->whatsappNumber ?? null,
            'company_name' => $request->companyName ?? null,
            'website' => $request->website ?? null,
            'address' => $request->address ?? null,
            'city' => $request->city ?? null,
            'post_code' => $request->postCode ?? null,
            'country' => $request->country ?? null,
            'role' => $role,
            'recruit_countries' => $request->recruiteCountries ? json_encode($request->recruiteCountries) : null,
            'password' => bcrypt($request->password ?? ''),
        ]);

        // Save the user details
        $userDetail->save();

        // Assign the role to the user
        $assignedRole = Role::where('name', $role)->first();
        $userDetail->assignRole($assignedRole);

        $admin = User::where('role', 'admin')->first(); // Find the first admin user

        // Notify the newly registered user (if applicable)
        Notification::route('mail', $userDetail->email)->notify(new \App\Notifications\WelcomeNotification($userDetail));

        // Notify the admin about the new registration
        $admin->notify(new NewUserRegistrationNotification($userDetail));

        // Return a success response
        return $this->successJsonResponse('User Registration Successful', $userDetail);
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
        return $this->successJsonResponse('Credential match', ['accessToken' => $token,
            'userData' => $user, 'abilities' => $formattedAbilities]);

    }
}
