<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Log;
use Spatie\Permission\Models\Role;
use App\Notifications\NewUserRegistrationNotification;
use Illuminate\Support\Facades\Notification;
use App\Services\FileUploadService;

class AuthController extends Controller
{
    public function register(Request $request, FileUploadService $fileUploadService)
    {

        try {
            // Validate the request data
            $validatedData = $request->validate([
                'firstName' => 'required|string',
                'lastName' => 'required|string',
                'email' => 'required|email|unique:users,email',
                'password' => 'required|string|min:8|same:confirmPassword',
                'confirmPassword' => 'required|string|min:8',
                'mobileNumber' => 'nullable|string',
                'whatsappNumber' => 'nullable|string',
                'companyName' => 'nullable|string',
                'website' => 'nullable',
                'address' => 'nullable|string',
                'city' => 'nullable|string',
                'postCode' => 'nullable|string',
                'country' => 'nullable|string',
                'role' => 'nullable|string',
                'recruitCountries' => 'nullable|array',
                'recruitCountries.*' => 'string',
                'createForm' => 'nullable',
                'agreement' => 'nullable',
                'commission_structure' => 'nullable',
            ]);

            // Determine the role based on the form type
            $role = $request->createForm === 'admin' ? $validatedData['role'] : 'channel partner';
            if (strtolower($role) == 'probable channel partner') {
                $status = 0;
            } else {
                $status = 1;
            }
            // Handle file uploads
            $agreementPath = null;
            $commissionStructurePath = null;

            if ($request->hasFile('agreement')) {

                $agreementPath = $fileUploadService->upload(
                    'channelPartnerPanel/channelPartnerDocument/' . $validatedData['email'].' /agreements',
                    $request->file('agreement')
                );
            }

            if ($request->hasFile('commission_structure')) {
                $commissionStructurePath = $fileUploadService->upload(
                    'channelPartnerPanel/channelPartnerDocument/' . $validatedData['email'].' /commission_structures',
                    $request->file('commission_structure')
                );
            }


            // Create a new User instance
            $userDetail = new User([
                'first_name' => $validatedData['firstName'] ?? null,
                'last_name' => $validatedData['lastName'] ?? null,
                'email' => $validatedData['email'] ?? null,
                'mobile_number' => $validatedData['mobileNumber'] ?? null,
                'whatsapp_number' => $validatedData['whatsappNumber'] ?? null,
                'company_name' => $validatedData['companyName'] ?? null,
                'website' => $validatedData['website'] ?? null,
                'address' => $validatedData['address'] ?? null,
                'city' => $validatedData['city'] ?? null,
                'post_code' => $validatedData['postCode'] ?? null,
                'country' => $validatedData['country'] ?? null,
                'role' => $role,
                'status' => $status,
                'recruit_countries' => isset($validatedData['recruitCountries']) ? json_encode($validatedData['recruitCountries']) : null,
                'password' => bcrypt($validatedData['password']),
            ]);

            // Save the user details
            $userDetail->save();

            // Save the uploaded documents in a separate table or update the User model if you have file columns
            if ($agreementPath) {

                $userDetail->documents()->create([
                    'document_type' => 'agreement',
                    'document_path' => $agreementPath,
                ]);
            }

            if ($commissionStructurePath) {
                $userDetail->documents()->create([
                    'document_type' => 'commission_structure',
                    'document_path' => $commissionStructurePath,
                ]);
            }

            // Assign role to the user
            $assignedRole = Role::where('name', $role)->first();
            $userDetail->assignRole($assignedRole);

            if (strtolower($role) != 'probable channel partner') {
                Notification::route('mail', $userDetail->email)->notify(new \App\Notifications\WelcomeNotification($userDetail));

                // Notify the admin
                $admin = User::where('role', 'admin')->first();
                $admin->notify(new NewUserRegistrationNotification($userDetail));
            }

            return $this->successJsonResponse('User Registration Successful', $userDetail);
        } catch (\Illuminate\Validation\ValidationException $e) {
            return $this->handleValidationErrors($e);
        } catch (\Throwable $th) {
            return $this->exceptionJsonResponse($th);
        }
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
