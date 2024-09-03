<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\University;
use Illuminate\Support\Facades\Storage;
use Log;

class UniversityController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Retrieve query parameters
        $searchQuery = strtoupper(strtolower(trim(request()->query('searchQuery'))));
        $perPage = request()->query('perPage');
        $page = request()->query('page');
        $sortBy = request()->query('sortBy', 'created_at');
        $sortDesc = filter_var(request()->query('sortDesc'), FILTER_VALIDATE_BOOLEAN);

        // Query the universities
        $query = University::with('country')
            ->when($searchQuery, function ($query, $searchQuery) {
                return $query->where(function ($query) use ($searchQuery) {
                    $query->where('name', 'LIKE', "%$searchQuery%");
                });
            })
            ->when($sortBy, function ($query) use ($sortBy, $sortDesc) {
                return $query->orderBy($sortBy, $sortDesc ? 'DESC' : 'ASC');
            }, function ($query) {
                return $query->latest('created_at');
            });

        // Check if page is null, if so, fetch all records without pagination
        if (is_null($page)) {
            $universities = $query->get()->toArray();
            $totalRows = count($universities);
        } else {
            // Paginate the results if page is provided
            $perPage = (int) $perPage ?: 10; // Set a default perPage value if null
            $queryResult = $query->paginate($perPage)->toArray();
            $universities = $queryResult['data'];
            $totalRows = $queryResult['total'];
        }

        // Return success response with university data
        return $this->successJsonResponse('University Data Found', $universities, $totalRows);
    }



    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $request->validate([
            'countryId' => 'required',
            'name' => 'required|string',
            'address' => 'required|string',
            'logo' => 'required'
        ]);

        try {



            $university = University::create([
                'country_id' => $request->countryId,
                'name' => $request->name,
                'address' => $request->address,
                'logo' => $request->logo,
            ]);



            return $this->successJsonResponse('University created successfully', $university->load('country'));

        } catch (\Throwable $th) {
            // Log the error for debugging
            \Log::error('File upload error: ' . $th);

            // Return an exception response
            return $this->exceptionJsonResponse('An unexpected error occurred', $th);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {

        $validatedData = $request->validate([
            'name' => 'required|string',
            'address' => 'required|string',
            'countryId' => 'required|integer',
            'logo' => 'required',
        ]);

        try {
            $university = University::findOrFail($id);
            $university->name = $validatedData['name'];
            $university->address = $validatedData['address'];
            $university->country_id = $validatedData['countryId'];
            $university->logo = $validatedData['logo'];
            $university->save();
            return $this->successJsonResponse('University updated successfully', $university->load('country'));
        } catch (\Throwable $th) {
            Log::error($th);
            return $this->exceptionJsonResponse('An unexpected error occurred', $th);
        }

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {
            $university = University::findOrFail($id);
            if ($university->logo) {

                Storage::disk('do_spaces')->delete($university->logo);
            }
            $university->delete();
            return $this->successJsonResponse('University deleted successfully');
        } catch (\Throwable $th) {
            \Log::error('University logo delete error: ' . $th);
            return $this->exceptionJsonResponse('An unexpected error occurred', $th);
        }
    }
    public function logoUpload(Request $request)
    {
        $path = Storage::disk('do_spaces')->put('channelPartnerPanel/universityLogo', $request->file('file'), 'public');
        return $path;
    }
}
