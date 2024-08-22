<?php

namespace App\Jobs;

use App\Models\User;
use App\Services\FileUploadService;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Exception;
use Illuminate\Support\Facades\Log;

class UploadChannelPartnerDocuments implements ShouldQueue
{
    use Dispatchable;
    use InteractsWithQueue;
    use Queueable;
    use SerializesModels;

    protected $user;
    protected $agreement;
    protected $commissionStructure;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(User $user, $agreement, $commissionStructure)
    {
        $this->user = $user;
        $this->agreement = $agreement;
        $this->commissionStructure = $commissionStructure;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle(FileUploadService $fileUploadService)
    {
        try {
            // Handle file uploads
            if ($this->agreement) {
                $agreementPath = $fileUploadService->upload(
                    'channelPartnerPanel/channelPartnerDocument/' . $this->user->email . '/agreements',
                    $this->agreement
                );

                // Save agreement document path in the database
                $this->user->documents()->create([
                    'document_type' => 'agreement',
                    'document_path' => $agreementPath,
                ]);
            }

            if ($this->commissionStructure) {
                $commissionStructurePath = $fileUploadService->upload(
                    'channelPartnerPanel/channelPartnerDocument/' . $this->user->email . '/commission_structures',
                    $this->commissionStructure
                );

                // Save commission structure document path in the database
                $this->user->documents()->create([
                    'document_type' => 'commission_structure',
                    'document_path' => $commissionStructurePath,
                ]);
            }
        } catch (Exception $e) {
            Log::error('File upload failed: ' . $e->getMessage());
        }
    }
}
