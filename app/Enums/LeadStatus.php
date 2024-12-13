<?php

namespace App\Enums;

class LeadStatus
{
    public const INITIAL = 0;
    public const NO_RESPONSE = 1;
    public const CROWDED_PLACE = 2;
    public const NOT_INTERESTED_AT_MOMENT = 3;
    public const NUMBER_OFF = 4;
    public const NOT_INTERESTED = 5;
    public const HONS_RUNNING_NOT_INTERESTED = 6;
    public const NOT_INTERESTED_GIVEN_COUNTRY = 7;
    public const UNREACHED_NUMBER = 8;
    public const REGISTERED_NOT_READY = 9;
    public const TALK_LATER = 10;
    public const RESULT_NOT_PUBLISHED = 11;
    public const USER_BUSY = 12;
    public const INTERESTED_NO_DOCUMENTS = 13;
    public const ANOTHER_PERSON_WILL_INFORM = 14;
    public const INTERESTED_JOIN_EVENT = 15;
    public const INTERESTED_IN_OTHER_COUNTRY = 16;
    public const INTERESTED_IN_OTHER_COURSE = 17;
    public const INTERESTED_IN_OTHER_COUNTRY_AND_COURSE = 18;
    public const INTERESTED_IN_OTHER_COURSE_AND_COUNTRY = 19;


    public static function getStatusName($id)
    {
        $statuses = [
            self::INITIAL => "Initial",
            self::NO_RESPONSE => "No response",
            self::CROWDED_PLACE => "User is in crowded place & couldn't understand speaking",
            self::NOT_INTERESTED_AT_MOMENT => "User isn't interested at this moment",
            self::NUMBER_OFF => "Number off",
            self::NOT_INTERESTED => "Not interested",
            self::HONS_RUNNING_NOT_INTERESTED => "Hons running, user is not interested for current intake",
            self::NOT_INTERESTED_GIVEN_COUNTRY => "User is not interested for given country",
            self::UNREACHED_NUMBER => "Unreached Number",
            self::REGISTERED_NOT_READY => "User registered for knowing details but user isn't ready",
            self::TALK_LATER => "Talk Later",
            self::RESULT_NOT_PUBLISHED => "User result isn't published yet",
            self::USER_BUSY => "User is busy now",
            self::INTERESTED_NO_DOCUMENTS => "Interested, but no document ready",
            self::ANOTHER_PERSON_WILL_INFORM => "Another person received & will inform him",
            self::INTERESTED_JOIN_EVENT => "Interested to join event",
            self::INTERESTED_IN_OTHER_COUNTRY => "Interested in other country",
            self::INTERESTED_IN_OTHER_COURSE => "Interested in other course",
            self::INTERESTED_IN_OTHER_COUNTRY_AND_COURSE => "Interested in other country and course",
            self::INTERESTED_IN_OTHER_COURSE_AND_COUNTRY => "Interested in other course and country",
        ];

        return $statuses[$id] ?? "Unknown status";
    }
}
