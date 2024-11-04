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
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use App\Notifications\EmailNotification;
use Spatie\Activitylog\Models\Activity;

class AuthController extends Controller
{
    public function register(Request $request, FileUploadService $fileUploadService)
    {
        try {
            $validatedData = $this->validateRegistrationData($request);

            $role = $this->determineUserRole($request, $validatedData);
            $status = $this->determineUserStatus($request, $role);
            $userDetail = $this->createUser($validatedData, $role, $status);

            $this->handleFileUploads($request, $fileUploadService, $userDetail);

            $this->assignRoleAndNotify($userDetail, $role);

            return $this->successJsonResponse('User Registration Successful', $userDetail);
        } catch (\Illuminate\Validation\ValidationException $e) {
            return $this->handleValidationErrors($e);
        } catch (\Throwable $th) {
            return $this->exceptionJsonResponse($th);
        }
    }

    private function validateRegistrationData(Request $request)
    {
        return $request->validate([
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
            'branch_id' => 'nullable',
        ]);
    }

    private function determineUserRole(Request $request, array $validatedData)
    {
        return $request->createForm === 'admin' ? $validatedData['role'] : 'channel partner';
    }

    private function determineUserStatus(Request $request, string $role)
    {

        if ($request->createForm === 'admin' && strtolower($role) != 'probable channel partner') {
            return 1;
        }
        return 1;
    }

    private function createUser(array $data, string $role, int $status)
    {
        $userData = [
            'first_name' => $data['firstName'] ?? null,
            'last_name' => $data['lastName'] ?? null,
            'email' => $data['email'] ?? null,
            'mobile_number' => $data['mobileNumber'] ?? null,
            'whatsapp_number' => $data['whatsappNumber'] ?? null,
            'company_name' => $data['companyName'] ?? null,
            'website' => $data['website'] ?? null,
            'address' => $data['address'] ?? null,
            'city' => $data['city'] ?? null,
            'post_code' => $data['postCode'] ?? null,
            'country' => $data['country'] ?? null,
            'role' => $role,
            'status' => $status,
            'recruit_countries' => isset($data['recruitCountries']) ? json_encode($data['recruitCountries']) : null,
            'password' => bcrypt($data['password']),
            'branch_id' => $data['branch_id'] ?? null,
        ];

        return User::create($userData);
    }

    private function handleFileUploads(Request $request, FileUploadService $fileUploadService, User $user)
    {
        $files = ['agreement', 'commission_structure'];
        foreach ($files as $file) {
            if ($request->hasFile($file)) {
                $path = $fileUploadService->upload(
                    "channelPartnerPanel/channelPartnerDocument/{$user->email}/{$file}s",
                    $request->file($file)
                );
                $user->documents()->create([
                    'document_type' => $file,
                    'document_path' => $path,
                ]);
            }
        }
    }

    private function assignRoleAndNotify(User $user, string $role)
    {
        $assignedRole = Role::where('name', $role)->first();
        $user->assignRole($assignedRole);

        if (strtolower($role) != 'probable channel partner') {
            Notification::route('mail', $user->email)->notify(new \App\Notifications\WelcomeNotification($user));
            $admin = User::where('role', 'admin')->first();
            $admin->notify(new NewUserRegistrationNotification($user));
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

        if (Auth::attempt($credentials)) {
            $user = Auth::user();

            activity()
                ->performedOn($user)
                ->causedBy($user)
                ->withProperties([
                    'ip' => $request->ip(),
                    'user_agent' => $request->userAgent(),
                ])
                ->log('login');

            // Get the authenticated user


            $abilities = $user->getUserAbilitiesAttribute();

            $formattedAbilities = [];
            foreach ($abilities as $ability) {
                list($action, $subject) = explode('.', $ability);
                $formattedAbilities[] = ['action' => $subject, 'subject' => $action];
            }

            // Log the login activity


            $token = $user->createToken('authToken')->plainTextToken;
            return $this->successJsonResponse('Credential match', ['accessToken' => $token,
                'userData' => $user, 'abilities' => $formattedAbilities]);
        }

        return $this->errorJsonResponse('The provided credentials are incorrect');
    }

    public function resetPassword(Request $request)
    {
        try {
            $request->validate([
                'email' => 'required|email|exists:users,email',
            ]);

            $user = User::where('email', $request->email)->first();

            // Generate a random password
            $newPassword = Str::random(10);

            // Update the user's password
            $user->password = Hash::make($newPassword);
            $user->save();

            // Prepare email details
            $details = [
                'subject' => 'Password Reset',
                'body' => "Your new password is: $newPassword<br><br>Please change your password after logging in.",
                'recipients' => [$user->email],
                'sender_id' => 1, // Assuming 1 is the ID for system-generated emails
                'sender_name' => 'System',
                'sender_email' => config('mail.from.address'),
                'notification_type' => 'email',
            ];

            // Send the email notification
            Notification::route('mail', config('mail.from.address'))
                ->notify(new EmailNotification($details));

            return $this->successJsonResponse('A new password has been sent to your email.');
        } catch (\Illuminate\Validation\ValidationException $e) {
            // Handle validation errors
            return $this->handleValidationErrors($e);
        } catch (\Throwable $th) {
            // Log the error and return a response
            \Log::error('Failed to reset password', ['error' => $th->getMessage()]);
            return $this->exceptionJsonResponse('Failed to reset password', $th);
        }
    }

    // Add this new method to fetch login activity
    public function getLoginActivity()
    {
        $user = Auth::user();
        $loginActivities = Activity::where('subject_type', User::class)
            ->where('subject_id', $user->id)
            ->where('description', 'User logged in')
            ->orderBy('created_at', 'desc')
            ->take(10)
            ->get();

        return $this->successJsonResponse('Login activity retrieved successfully', $loginActivities);
    }
}
