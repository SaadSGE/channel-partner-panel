<?php

if (!function_exists('findRole')) {
    function findRole($userId)
    {
        $user = \App\Models\User::find($userId);
        return $user->role;
    }
}

if (!function_exists('stringContains')) {
    function stringContains($haystack, $needle, $caseSensitive = false)
    {
        if (!$caseSensitive) {
            $haystack = strtolower($haystack);
            $needle = strtolower($needle);
        }

        return str_contains($haystack, $needle);
    }
}

if (!function_exists('getImageUrl')) {
    function getImageUrl()
    {
        return config('filesystems.disks.do_spaces.url', env('DO_URL'));
    }
}
