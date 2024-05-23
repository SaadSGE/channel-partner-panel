<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Throwable;
use Log;

class StudentFileController extends Controller
{
    //
    public function upload(Request $request)
    {

        $request->validate([
            'test' => 'required',
        ]);

        try {

            $path = Storage::disk('public')->putFile('document', $request->file('test'));
            return $this->successJsonResponse('File uploaded successfully', $path);

        } catch (\Throwable $th) {

            \Log::error('File upload error: ' .$th);

            return $this->errorJsonResponse('File upload failed', $th);
        } catch (\Throwable $th) {
            // Log the error for debugging
            \Log::error('File upload error: ' . $th);

            // Return an exception response
            return $this->exceptionJsonResponse('An unexpected error occurred', $th);
        }
    }

    public function show($filename)
    {
        Log::info('test');
        $path = storage_path('app/public/document/' . $filename);

        if (!file_exists($path)) {
            abort(404);
        }

        $file = file_get_contents($path);
        $type = mime_content_type($path);

        $response = response($file, 200)->header('Content-Type', $type);

        if ($type === 'application/pdf') {
            $response->header('Content-Disposition', 'inline; filename="' . $filename . '"');
        }

        return $response;
    }

}
