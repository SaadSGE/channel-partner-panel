<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Throwable;
use Log;
use App\Services\FileUploadService;

class StudentFileController extends Controller
{
    //
    public function upload(Request $request)
    {

        try {
            $file = $request->file('student_document');
            $filePath = 'channelPartnerPanel/studentDocument/';
            $originalFileName = $file->getClientOriginalName();
            $fileUploadService = new FileUploadService();
            $path = $fileUploadService->upload($filePath, $file);

            return $this->successJsonResponse('File uploaded successfully', [
                'path' => $path,
                'originalFileName' => $originalFileName
            ]);

        } catch (\Throwable $th) {
            \Log::error('File upload error: ' . $th);

            return $this->errorJsonResponse('File upload failed', $th);
        }
    }

    public function uploadExistingApplication(Request $request)
    {

        try {
            Log::info($request->application_id);
            $file = $request->file('student_document');
            $filePath = 'channelPartnerPanel/studentDocument/';
            $originalFileName = $file->getClientOriginalName();
            $fileUploadService = new FileUploadService();
            $path = $fileUploadService->upload($filePath, $file);

            return $this->successJsonResponse('File uploaded successfully', [
                'path' => $path,
                'originalFileName' => $originalFileName
            ]);

        } catch (\Throwable $th) {
            \Log::error('File upload error: ' . $th);

            return $this->errorJsonResponse('File upload failed', $th);
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
