<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use OpenAI\Client;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log;

class AIController extends Controller
{
    public function generateResponse(Request $request)
    {
        try {
            $request->validate([
                "url" => "required|string",
            ]);

            $client = \OpenAI::client(env('OPENAI_API_KEY'));
            $prompt = "Return passport no and name from the image";
            $messages = [
                ['role' => 'user', 'content' => $prompt],
            ];



            $messages[] = [

                'content' => [
                    [
                        'type' => 'image_url',
                        'image_url' => [
                            'url' => $request->url
                        ]
                    ]
                ]
            ];


            $response = $client->chat()->create([
                'model' => 'gpt-4o-mini',
                'messages' => $messages,
                'max_tokens' => 300
            ]);


            return response()->json([
                'generated_response' => $response->choices[0]->message->content
            ]);

        } catch (\Exception $e) {
            Log::error('Error in AIController: ' . $e->getMessage());
            return response()->json([
                'error' => 'An error occurred while processing your request.',
                'details' => $e->getMessage()
            ], 500);
        }
    }
}
