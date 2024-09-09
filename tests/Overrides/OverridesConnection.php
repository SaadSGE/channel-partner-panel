<?php

namespace Tests\Overrides;

use Illuminate\Support\Facades\Config;

trait OverridesConnection
{
    protected function overrideConnection()
    {
        // Ensure the default connection is overridden to SQLite for testing
        Config::set('database.default', 'sqlite');
        Config::set('database.connections.sqlite', [
            'driver' => 'sqlite',
            'database' => ':memory:',
            'prefix' => '',
        ]);
        $models = [
            \App\Models\Intake::class,
            \App\Models\University::class,
            \App\Models\Course::class,
            \App\Models\ApplicationCountry::class,
            \App\Models\CountryIntakeUniversityCourse::class,
            \App\Models\CourseDetails::class,
            \App\Models\RequestRecord::class,
        ];

        foreach ($models as $model) {
            // Override connection for each model
            $model::setConnectionResolver(app('db'));
            $model::setConnection('sqlite'); // Use SQLite connection for testing
        }
    }
}
