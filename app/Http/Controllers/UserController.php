<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Services\FileUploadService;
use Illuminate\Support\Facades\Hash;
use Spatie\Activitylog\Models\Activity;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Retrieve query parameters
        $searchQuery = strtoupper(strtolower(trim(request()->query('searchQuery'))));
        $perPage = (int) request()->query('perPage', 10);
        $sortBy = request()->query('sortBy', 'created_at');
        $sortDesc = filter_var(request()->query('sortDesc'), FILTER_VALIDATE_BOOLEAN);
        $roleFilter = request()->query('role', null);
        $parentId = request()->query('parentId', null);
        $fetchAll = filter_var(request()->query('fetchAll'), FILTER_VALIDATE_BOOLEAN);

        if (auth('api')->user()->role != 'admin') {
            $parentId = auth('api')->user()->id;
        }

        // Query the users
        $query = User::with(['parent:id,parent_id,first_name,last_name,role','documents'])
            ->where('role', '!=', 'admin')
            ->when($searchQuery, function ($query, $searchQuery) {
                return $query->where(function ($query) use ($searchQuery) {
                    $query->where('first_name', 'LIKE', "%$searchQuery%")
                        ->orWhere('last_name', 'LIKE', "%$searchQuery%")
                        ->orWhere('email', 'LIKE', "%$searchQuery%");
                });
            })
            ->when($roleFilter, function ($query, $roleFilter) {
                return $query->where('role', 'LIKE', "%$roleFilter%");
            })
            ->when($parentId, function ($query, $parentId) {
                return $query->where('parent_id', $parentId);
            })
            ->when($sortBy, function ($query) use ($sortBy, $sortDesc) {
                return $query->orderBy($sortBy, $sortDesc ? 'DESC' : 'ASC');
            }, function ($query) {
                return $query->latest('created_at');
            });

        if ($fetchAll) {
            $users = $query->get();
            $totalRows = $users->count();
        } else {
            $queryResult = $query->paginate($perPage)->toArray();
            $users = $queryResult['data'];
            $totalRows = $queryResult['total'];
        }

        // Return success response with user data
        return $this->successJsonResponse('User List Found', $users, $totalRows);
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        try {
            $user = User::with('documents')->findOrFail($id);
            return $this->successJsonResponse('User data found', $user);
        } catch (\Throwable $th) {
            \Log::error($th);
            return $this->exceptionJsonResponse('Failed to find user', $th);
        }
    }

    /**
 * Update the specified resource in storage.
 */
    public function update(Request $request, string $id, FileUploadService $fileUploadService)
    {

        // Validate the incoming request data
        $validatedData = $request->validate([
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'email' => 'required|email|unique:users,email,' . $id,
            'mobile_number' => 'nullable|string',
            'whatsapp_number' => 'nullable|string',
            'company_name' => 'nullable|string',
            'website' => 'nullable',
            'address' => 'nullable|string',
            'city' => 'nullable|string',
            'post_code' => 'nullable|string',
            'country' => 'nullable|string',
            'role' => 'required|string',
            'recruit_countries' => 'nullable|array',
            'agreement' => 'nullable',
            'commission_structure' => 'nullable',
        ]);

        try {
            // Find the user by ID
            $user = User::findOrFail($id);

            // Update basic user details
            $user->first_name = $validatedData['first_name'];
            $user->last_name = $validatedData['last_name'];
            $user->email = $validatedData['email'];
            $user->mobile_number = $validatedData['mobile_number'] ?? null;
            $user->whatsapp_number = $validatedData['whatsapp_number'] ?? null;
            $user->company_name = $validatedData['company_name'] ?? null;
            $user->website = $validatedData['website'] ?? null;
            $user->address = $validatedData['address'] ?? null;
            $user->city = $validatedData['city'] ?? null;
            $user->post_code = $validatedData['post_code'] ?? null;
            $user->country = $validatedData['country'] ?? null;
            $user->role = $validatedData['role'];

            // Update recruit_countries
            $user->recruit_countries = isset($validatedData['recruit_countries']) ? json_encode($validatedData['recruit_countries']) : null;

            // Handle file uploads
            if ($request->hasFile('agreement')) {
                // Upload the agreement document
                $agreementPath = $fileUploadService->upload(
                    'channelPartnerPanel/channelPartnerDocument/' . $user->email . '/agreements',
                    $request->file('agreement')
                );

                // Update or create the document record in the documents table
                $user->documents()->updateOrCreate(
                    ['document_type' => 'agreement'],
                    ['document_path' => $agreementPath]
                );
            }

            if ($request->hasFile('commission_structure')) {
                // Upload the commission structure document
                $commissionStructurePath = $fileUploadService->upload(
                    'channelPartnerPanel/channelPartnerDocument/' . $user->email . '/commission_structures',
                    $request->file('commission_structure')
                );

                // Update or create the document record in the documents table
                $user->documents()->updateOrCreate(
                    ['document_type' => 'commission_structure'],
                    ['document_path' => $commissionStructurePath]
                );
            }

            // Sync the role (remove old role and assign the new one)
            $user->syncRoles([$validatedData['role']]);

            // Save the updated user details
            $user->save();
            activity()
            ->performedOn($user)
            ->causedBy(auth()->user())
            ->withProperties([
                'ip' => $request->ip(),
                'user_agent' => $request->userAgent(),
                'updated_fields' => $validatedData,
            ])
            ->log('profile_update');
            // Return success response
            return $this->successJsonResponse('User updated successfully', $user);

        } catch (\Throwable $th) {
            \Log::error($th);
            return $this->exceptionJsonResponse('Failed to update user', $th);
        }
    }




    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    public function setParent(Request $request, $id)
    {
        // Validate the request data
        $validated = $request->validate([
            'parent_id' => 'nullable|exists:users,id',
        ]);

        // Find the user by ID
        $user = User::find($id);

        if (!$user) {
            return $this->errorJsonResponse('User not found');
        }

        // Set the parent_id
        $user->parent_id = $validated['parent_id'];
        $user->save();

        return $this->successJsonResponse('Parent Id Save');
    }

    public function allUser()
    {
        $users = User::get(['id','first_name','email','last_name','role']);
        return $this->successJsonResponse('User Data Found', $users);
    }
    public function getProfile()
    {
        try {
            // Get the currently authenticated user
            $user = auth('api')->user();

            if (!$user) {
                return $this->errorJsonResponse('User not authenticated', null, 401);
            }

            // Load any related data if needed, e.g., 'documents'
            $user->load('documents');

            // Return the user's profile data
            return $this->successJsonResponse('User profile found', $user);

        } catch (\Throwable $th) {
            \Log::error($th);
            return $this->exceptionJsonResponse('Failed to fetch user profile', $th);
        }
    }
    public function updateProfile(Request $request)
    {
        \Log::info($request->all());
        // Validate the incoming request data
        $validatedData = $request->validate([
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'mobile_number' => 'nullable|string',
            'whatsapp_number' => 'nullable|string',
            'company_name' => 'nullable|string',
            'website' => 'nullable|url',
            'address' => 'nullable|string',
            'city' => 'nullable|string',
            'post_code' => 'nullable|string',
            'country' => 'nullable|string',
        ]);

        try {
            // Get the currently authenticated user
            $user = auth('api')->user();

            // Update user profile details
            $user->first_name = $validatedData['first_name'];
            $user->last_name = $validatedData['last_name'];

            $user->mobile_number = $validatedData['mobile_number'] ?? $user->mobile_number;
            $user->whatsapp_number = $validatedData['whatsapp_number'] ?? $user->whatsapp_number;
            $user->company_name = $validatedData['company_name'] ?? $user->company_name;
            $user->website = $validatedData['website'] ?? $user->website;
            $user->address = $validatedData['address'] ?? $user->address;
            $user->city = $validatedData['city'] ?? $user->city;
            $user->post_code = $validatedData['post_code'] ?? $user->post_code;
            $user->country = $validatedData['country'] ?? $user->country;

            // Save the updated user profile
            $user->save();

            // Return the updated user profile with success response
            return $this->successJsonResponse('Profile updated successfully', $user);

        } catch (\Throwable $th) {
            // Log the error
            \Log::error($th);

            // Return an exception response
            return $this->exceptionJsonResponse('Failed to update profile', $th);
        }
    }
    public function changePassword(Request $request)
    {
        try {

            $validatedData = $request->validate([
                'current_password' => 'required|string|min:8',
                'new_password' => 'required|string|min:8',
            ]);


            // Get the currently authenticated user
            $user = auth('api')->user();

            // Check if the provided current password matches the user's actual current password
            if (!Hash::check($validatedData['current_password'], $user->password)) {
                return $this->errorJsonResponse('Current password is incorrect');
            }

            // Update the user's password
            $user->password = Hash::make($validatedData['new_password']);
            $user->save();
            activity()
            ->performedOn($user)
            ->causedBy($user)
            ->withProperties([
                'ip' => $request->ip(),
                'user_agent' => $request->userAgent(),
            ])
            ->log('password_change');
            // Return a success response
            return $this->successJsonResponse('Password changed successfully');

        } catch (\Illuminate\Validation\ValidationException $e) {
            return $this->handleValidationErrors($e);
        } catch (\Throwable $th) {
            // Log the error
            \Log::error($th);

            // Return an exception response
            return $this->exceptionJsonResponse('Failed to change password', $th);
        }
    }

    public function fetchAllUser()
    {
        $users = User::filterByRole()->get(['id','first_name','last_name','email','role']);
        return $this->successJsonResponse('User list found', $users);
    }

    public function getActivityLogs(Request $request, User $user)
    {
        $perPage = $request->input('per_page', 10);
        $sortBy = $request->input('sort_by', 'created_at');
        $sortOrder = $request->input('sort_order', 'desc');
        $activityType = $request->input('activity_type');
        $searchQuery = $request->input('search');
        $dateFrom = $request->input('date_from');
        $dateTo = $request->input('date_to');

        $activityLogs = Activity::where(function ($query) use ($user) {
            $query->causedBy($user)
                  ->orWhere(function ($subQuery) use ($user) {
                      $subQuery->where('subject_type', User::class)
                               ->where('subject_id', $user->id);
                  });
        })
        ->when($activityType, function ($query, $activityType) {
            return $query->where('description', $activityType);
        })
        ->when($searchQuery, function ($query, $searchQuery) {
            return $query->where(function ($query) use ($searchQuery) {
                $query->where('description', 'LIKE', "%{$searchQuery}%")
                    ->orWhere('properties', 'LIKE', "%{$searchQuery}%");
            });
        })
        ->when($dateFrom, function ($query, $dateFrom) {
            return $query->whereDate('created_at', '>=', $dateFrom);
        })
        ->when($dateTo, function ($query, $dateTo) {
            return $query->whereDate('created_at', '<=', $dateTo);
        })
        ->orderBy($sortBy, $sortOrder)
        ->paginate($perPage);

        return $this->successJsonResponse('Activity logs retrieved successfully', $activityLogs);
    }
}
