<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Throwable;
use Log;
use App\Services\FileUploadService;
use Illuminate\Support\Facades\Http;
use App\Http\Controllers\AIController;
use Spatie\PdfToImage\Pdf;
use GuzzleHttp\Client;

class StudentFileController extends Controller
{
    //
    public function upload(Request $request)
    {
        try {
            $file = $request->file('student_document');
            $filePath = 'channelPartnerPanel/tempStudentDocument';
            $originalFileName = $file->getClientOriginalName();

            // Check if the file is a PDF and convert to image if necessary
            // if ($file->getClientOriginalExtension() === 'pdf') {
            //     $file = $this->convertPdfToImage($file);
            // }

            // Upload file (either the converted image or original file)
            $fileUploadService = new FileUploadService();
            $path = $fileUploadService->upload($filePath, $file);

            // Construct the public URL
            $publicUrl = env('DO_URL') . $path;
            \Log::info('Public URL: ' . $publicUrl);

            $client = new Client();
            $response = $client->post('http://134.122.104.232:82/api/shortener-url', [
                'form_params' => [
                    'original_url' => $publicUrl
                ]
            ]);

            $responseBody = $response->getBody();

            $temporaryShrinkUrl = json_decode($responseBody)->data->short_url;


            // $extractedData = null;

            // if ($request->document_name === 'passport') {
            //     $extractedData = $this->processPassportImage($temporaryShrinkUrl);
            // }

            return $this->successJsonResponse('File uploaded successfully', [
                'path' => $path,
                'originalFileName' => $originalFileName,
                'temporaryShrinkUrl' => $temporaryShrinkUrl,
            ]);

        } catch (\Throwable $th) {
            \Log::error('File upload error: ' . $th);
            return $this->errorJsonResponse('File upload failed');
        }
    }

    private function convertPdfToImage($pdfFile)
    {
        // Save PDF temporarily to convert it to an image
        $originalFileName = $pdfFile->getClientOriginalName();
        $tempPdfPath = storage_path('app/temp/' . $originalFileName);
        $pdfFile->move(storage_path('app/temp/'), $originalFileName);

        // Convert PDF to image
        $pdf = new Pdf($tempPdfPath);
        $imagePath = storage_path('app/temp/' . pathinfo($originalFileName, PATHINFO_FILENAME) . '.jpg');
        $pdf->saveImage($imagePath);

        // Load the converted image as a file for upload
        $imageFile = new \Illuminate\Http\File($imagePath);

        // Clean up temporary PDF file
        if (file_exists($tempPdfPath)) {
            unlink($tempPdfPath);
        }

        return $imageFile;
    }

    /**
     * Process passport image using AI
     *
     * @param string $imageUrl
     * @return string|null
     */
    private function processPassportImage($imageUrl)
    {
        try {
            $aiController = new AIController();
            $aiRequest = new Request([
                'url' => $imageUrl
            ]);

            $aiResponse = $aiController->generateResponse($aiRequest);
            $aiContent = json_decode($aiResponse->getContent());

            return $aiContent->generated_response ?? null;

        } catch (\Exception $e) {
            \Log::error('Passport processing error: ' . $e->getMessage());
            return null;
        }
    }

    public function uploadExistingApplication(Request $request)
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

    public function show($filename)
    {

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
