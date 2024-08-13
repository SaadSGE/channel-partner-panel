<?php

if (!function_exists('findRole')) {
    function findRole($userId)
    {
        $user = \App\Models\User::find($userId);
        return $user->role;
    }
}
