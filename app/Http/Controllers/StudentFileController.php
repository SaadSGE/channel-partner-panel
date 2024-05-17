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

        try {
            $path = Storage::disk('public')->put('document', $request->file('test'), 'public');
            return $this->successJsonResponse('File uploaded success', $path);


        } catch(\Throwable $th) {

        }

    }
}
