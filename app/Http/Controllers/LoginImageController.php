<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LoginImageController extends Controller
{
    public function getLoginImage()
    {
        // You can modify this to fetch from database or configuration
        return response()->json([
            'image_url' => 'https://media.licdn.com/dms/image/v2/D5612AQGiy2p56Mj_lA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1681815854455?e=2147483647&v=beta&t=YF07eEJFY9pw1egoify7dwoJ0YDmQwj68Vy_hUrfd8Q'
        ]);
    }
}
