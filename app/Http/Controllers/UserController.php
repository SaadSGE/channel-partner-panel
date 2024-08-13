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

        // Query the users
        $queryResult = User::where('role', '!=', 'admin') // Exclude admin users
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
            ->when($sortBy, function ($query) use ($sortBy, $sortDesc) {
                return $query->orderBy($sortBy, $sortDesc ? 'DESC' : 'ASC');
            }, function ($query) {
                return $query->latest('created_at');
            })
            ->when($perPage, function ($query, $perPage) {
                return $query->paginate($perPage);
            }, function ($query) {
                return $query->get();
            })
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
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
