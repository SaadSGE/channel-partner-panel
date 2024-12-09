<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use GuzzleHttp\Client;

class StudentDocument extends Model
{
    use HasFactory;
    protected $guarded = [];
    protected $appends = ['original_path'];

    // public function getPathAttribute($value)
    // {
    //     if (!$value) {
    //         return null;
    //     }

    //     $url = Storage::disk('public')->url($value);
    //     if (pathinfo($url, PATHINFO_EXTENSION) === 'pdf') {

    //         $url = Storage::disk('public')->url($value);
    //     }

    //     return $url;
    // }

    public function getPathAttribute($value)
    {
        $fileType = $this->determineFileType($value);
        return [
            'path' => "https://channel-partner-panel.ams3.cdn.digitaloceanspaces.com/".$value,
            'file_name' => basename($value),
            'file_type' => $fileType,
            'document_name' => $this->document_name,

        ];

    }
    public function getOriginalPathAttribute()
    {
        return $this->path['path'];
    }
    private function determineFileType($filePath)
    {
        $extension = pathinfo($filePath, PATHINFO_EXTENSION);
        $fileType = '';

        switch (strtolower($extension)) {
            case 'pdf':
                $fileType = 'pdf';
                break;
            case 'jpg':
            case 'jpeg':
            case 'png':
            case 'gif':
                $fileType = 'image';
                break;
            case 'doc':
            case 'docx':
                $fileType = 'document';
                break;
            default:
                $fileType = 'unknown';
        }

        return $fileType;
    }
}
