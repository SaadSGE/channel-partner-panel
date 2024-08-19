<?php

namespace App\Jobs;

use App\Models\Student;
use App\Models\StudentDocument;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Storage;
use ZipArchive;
use GuzzleHttp\Client;

class GenerateStudentDocumentsZip implements ShouldQueue
{
    use Dispatchable;
    use InteractsWithQueue;
    use Queueable;
    use SerializesModels;

    protected $student;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(Student $student)
    {
        $this->student = $student;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $documents = StudentDocument::where('student_id', $this->student->id)->get();

        $zipFileName = 'documents_' . $this->student->email . '_' . time() . '.zip';
        $zipPath = storage_path('app/' . $zipFileName);
        $zipDirectory = 'channelPartnerPanel/studentDocument/' . $this->student->email;
        $zip = new ZipArchive();
        if ($zip->open($zipPath, ZipArchive::CREATE | ZipArchive::OVERWRITE) === true) {
            $client = new Client();

            foreach ($documents as $document) {
                $fileUrl = $document->original_path;
                $fileName = basename($fileUrl);

                $response = $client->get($fileUrl);
                if ($response->getStatusCode() === 200) {
                    $zip->addFromString($fileName, $response->getBody()->getContents());
                }
            }

            $zip->close();

            // Upload the ZIP file to DigitalOcean Spaces
            $zipFileUrl = Storage::disk('do_spaces')->putFileAs(
                $zipDirectory,
                new \Illuminate\Http\File($zipPath),
                $zipFileName,
                'public'
            );

            // Store the ZIP link in the student's record
            $this->student->document_zip_link = $zipFileUrl;
            $this->student->save();

            // Delete the local ZIP file after upload
            unlink($zipPath);
        } else {
            \Log::error('Failed to create ZIP file for student ID: ' . $this->student->id);
        }
    }
}
