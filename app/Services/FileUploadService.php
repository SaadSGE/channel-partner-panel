<?php

namespace App\Services;

use Illuminate\Support\Facades\Storage;

class FileUploadService
{
    /**
     * Upload a file to the specified file path.
     *
     * @param string $filePath
     * @param \Illuminate\Http\UploadedFile $file
     * @return string
     */
    public function upload(string $filePath, $file): string
    {
        $originalFileName = $file->getClientOriginalName();
        $randomNumber = rand(100000, 999999);
        $fullFilePath = $filePath . '/' . $randomNumber;

        $path = Storage::disk('do_spaces')->putFileAs(
            $fullFilePath,
            $file,
            $originalFileName,
            'public'
        );

        return $path;
    }
}
