<?php

namespace App\Services;

use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log;
use Exception;

class FileUploadService
{
    /**
     * Upload a file to the specified file path.
     *
     * @param string $filePath
     * @param \Illuminate\Http\UploadedFile $file
     * @return string|null
     */
    public function upload(string $filePath, $file): ?string
    {
        Log::info('hello');
        try {
            $originalFileName = $file->getClientOriginalName();
            $randomNumber = rand(100000, 999999);
            $fullFilePath = $filePath . '/' . $randomNumber;

            $path = Storage::disk('do_spaces')->putFileAs(
                $fullFilePath,
                $file,
                $originalFileName,
                'public'
            );

            if (!$path) {
                throw new Exception("File upload failed.");
            }

            return $path;

        } catch (Exception $e) {
            // Log the error
            Log::error('File upload failed: ' . $e->getMessage(), [
                'filePath' => $filePath,
                'fileName' => $file->getClientOriginalName(),
            ]);

            return null;
        }
    }
}
