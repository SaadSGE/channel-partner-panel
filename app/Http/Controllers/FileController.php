<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use ZipArchive;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Storage;

class FileController extends Controller
{
    //
    public function download($fileName)
    {
        $filePath = 'documents/' . $fileName; // Adjust the path as needed

        if (Storage::exists($filePath)) {
            return Storage::download($filePath);
        }

        return abort(404, 'File not found.');
    }

    public function downloadAll(Request $request)
    {
        // Decode the documents from JSON
        $documents = json_decode($request->input('documents', '[]'), true);

        if (!is_array($documents)) {
            return response()->json(['error' => 'Invalid documents format'], 400);
        }

        $zipFileName = 'documents_' . time() . '.zip';
        $zipPath = storage_path('app/' . $zipFileName);

        $zip = new ZipArchive();
        if ($zip->open($zipPath, ZipArchive::CREATE | ZipArchive::OVERWRITE) === true) {
            $client = new Client();

            foreach ($documents as $document) {
                $fileUrl = $document['path'];
                $fileName = basename($fileUrl); // Optional: Use the basename of the URL as the file name

                // Download file from URL
                $response = $client->get($fileUrl);
                if ($response->getStatusCode() === 200) {
                    $zip->addFromString($fileName, $response->getBody()->getContents());
                }
            }

            $zip->close();
        } else {
            return response()->json(['error' => 'Could not create ZIP file'], 500);
        }

        // Upload the ZIP file to DigitalOcean Spaces
        $zipFileUrl = Storage::disk('do_spaces')->putFileAs(
            '',
            new \Illuminate\Http\File($zipPath),
            $zipFileName,
            'public'
        );

        // Delete the local ZIP file after upload
        unlink($zipPath);

        // Return the URL of the ZIP file
        return $this->successJsonResponse("Zip file found", ['zipUrl' => Storage::disk('do_spaces')->url($zipFileName)]);

    }

}
