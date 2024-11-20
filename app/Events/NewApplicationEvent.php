<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class NewApplicationEvent implements ShouldBroadcast
{
    use Dispatchable;
    use InteractsWithSockets;
    use SerializesModels;

    public $application;
    public $details;

    public function __construct($application, $details)
    {
        $this->application = $application;
        $this->details = $details;
    }

    public function broadcastOn()
    {
        return new PrivateChannel('App.Models.User.' . $this->details['sender_id']);
    }

    public function broadcastAs()
    {
        return 'new.application.event';
    }
}
