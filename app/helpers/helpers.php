<?php

if (!function_exists('findRole')) {
    function findRole($userId)
    {
        $user = \App\Models\User::find($userId);
        return $user->role;
    }
}

if (!function_exists('getImageUrl')) {
    function getImageUrl()
    {
        return "https://channel-partner-panel.ams3.cdn.digitaloceanspaces.com/";
    }
}
