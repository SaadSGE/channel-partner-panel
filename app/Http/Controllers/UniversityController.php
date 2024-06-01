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
        $universities = University::with('country')->get();
        return $this->successJsonResponse('University Data Found', $universities);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $request->validate([
            'countryId' => 'required',
            'name' => 'required|string|max:255',
            'address' => 'required|string|max:255',
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
            'name' => 'required|string|max:255',
            'address' => 'required|string|max:255',
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
        } catch(\Throwable $th) {
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
        } catch(\Throwable $th) {
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
