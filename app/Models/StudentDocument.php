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
        $url = Storage::disk('public')->url($value);
        if (pathinfo($url, PATHINFO_EXTENSION) === 'pdf') {

            $value = "https://linkedme.ams3.cdn.digitaloceanspaces.com/test/content/document/4Vdx1nQb91f72f19CnXqiyAqDpG19qh1tRszlnDt.pdf";
            $client = new Client();
            $response = $client->get($value);
            $pdfContents = $response->getBody()->getContents();
            $pdfContents = base64_encode($pdfContents);
            return response($pdfContents);
        }
        return $url;

    }
}
