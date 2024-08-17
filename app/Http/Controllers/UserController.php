<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Retrieve query parameters
        $searchQuery = strtoupper(strtolower(trim(request()->query('searchQuery'))));
        $perPage = (int) request()->query('perPage', 10); // Default to 10 if not specified
        $sortBy = request()->query('sortBy', 'created_at'); // Default to sorting by 'created_at'
        $sortDesc = filter_var(request()->query('sortDesc'), FILTER_VALIDATE_BOOLEAN);
        $roleFilter = request()->query('role', null); // Get the role filter query parameter
        $parentId = request()->query('parentId', null); // Get the parentId filter query parameter
        if(auth('api')->user()->role != 'admin') {
            $parentId = auth('api')->user()->id;
        }
        // Query the users
        $queryResult = User::with(['parent:id,parent_id,first_name,last_name,role'])->where('role', '!=', 'admin') // Exclude admin users
            ->when($searchQuery, function ($query, $searchQuery) {
                return $query->where(function ($query) use ($searchQuery) {
                    $query->where('first_name', 'LIKE', "%$searchQuery%")
                        ->orWhere('last_name', 'LIKE', "%$searchQuery%")
                        ->orWhere('email', 'LIKE', "%$searchQuery%");
                });
            })
            ->when($roleFilter, function ($query, $roleFilter) {
                return $query->where('role', $roleFilter); // Apply role filtering
            })
            ->when($parentId, function ($query, $parentId) {
                return $query->where('parent_id', $parentId); // Apply parent_id filtering
            })
            ->when($sortBy, function ($query) use ($sortBy, $sortDesc) {
                return $query->orderBy($sortBy, $sortDesc ? 'DESC' : 'ASC');
            }, function ($query) {
                return $query->latest('created_at');
            })
            ->paginate($perPage)
            ->toArray();

        // Extract users and total rows
        $users = $perPage ? $queryResult['data'] : $queryResult;
        $totalRows = $perPage ? $queryResult['total'] : count($queryResult);

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
            $user = User::findOrFail($id);
            return $this->successJsonResponse('User data found', $user);
        } catch(\Throwable $th) {
            \Log::error($th);
            return $this->exceptionJsonResponse('Failed to find user', $th);
        }
    }

    /**
 * Update the specified resource in storage.
 */
    public function update(Request $request, string $id)
    {
        // Validate the incoming request data
        $validatedData = $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email,' . $id,
            'mobile_number' => 'nullable|string',
            'whatsapp_number' => 'nullable|string',
            'company_name' => 'nullable|string',
            'website' => 'nullable|url|max:255',
            'address' => 'nullable|string|max:255',
            'city' => 'nullable|string|max:255',
            'post_code' => 'nullable|string',
            'country' => 'nullable|string|max:255',
            'role' => 'required|string|max:50',
            'recruit_countries' => 'nullable|array',


        ]);

        try {
            // Find the user by ID
            $user = User::findOrFail($id);

            // Update user details
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

            $user->recruit_countries = isset($validatedData['recruit_countries']) ? json_encode($validatedData['recruit_countries']) : null;


            $user->save();

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
        $users = User::get(['id','first_name','last_name','role']);
        return $this->successJsonResponse('User Data Found', $users);
    }
}
