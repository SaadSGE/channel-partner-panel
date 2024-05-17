<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;

abstract class Controller
{
    //
    /**
    * Success JSON Response Method.
    *
    * @param string $message
    * @param null $data
    * @param null $total
    * @return JsonResponse
    */
    public function successJsonResponse(string $message, $data = null, $total = null, int $statusCode = 200): JsonResponse
    {
        return response()->json([
            'status' => true,
            'message' => $message,
            'data' => $data ?: [],
            'total' => $total ?: (is_null($data) ? 0 : (is_array($data) ? count($data) : 1)),
        ], $statusCode);
    }


    /**
     * Error JSON Response Method.
     *
     * @param string $message
     * @param array $data
     * @return JsonResponse
     */
    public function errorJsonResponse(string $message, array $data = [], int $statusCode = 400): JsonResponse
    {
        return response()->json([
            'status' => false,
            'message' => $message,
            'data' => $data,
            'total' => 0,
        ], $statusCode);
    }


    /**
     * Exception JSON Response.
     *
     * @param $exception
     * @param string|null $message
     * @param string $channel
     * @return JsonResponse
     */

    public function exceptionJsonResponse($exception, string $message = null, string $channel = 'default', int $statusCode = 500): JsonResponse
    {
        $exceptionMessage = is_string($exception) ? $exception : $exception->getMessage();

        return response()->json([
            'status' => false,
            'message' => $message ?? 'Something went wrong! Please try again later.',
            'data' => [
                'exceptions' => $exceptionMessage,
            ],
            'total' => 0,
        ], $statusCode);
    }

}
