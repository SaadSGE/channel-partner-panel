<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;

class MaintenanceMode extends Command
{
    protected $signature = 'maintenance {mode : The mode (up/down)} {--secret= : Secret token for bypass}';
    protected $description = 'Put the application in maintenance mode or bring it back up';

    public function handle()
    {
        $mode = $this->argument('mode');
        $secret = $this->option('secret');

        if ($mode === 'down') {
            $command = 'down';
            if ($secret) {
                $command .= ' --secret=' . $secret;
            }
            $this->info('Application is now in maintenance mode.');
        } elseif ($mode === 'up') {
            $command = 'up';
            $this->info('Application is now live.');
        } else {
            $this->error('Invalid mode. Use "up" or "down".');
            return 1;
        }

        Artisan::call($command);
        return 0;
    }
}
