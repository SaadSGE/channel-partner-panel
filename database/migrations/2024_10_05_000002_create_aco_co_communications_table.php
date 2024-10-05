<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class () extends Migration {
    public function up(): void
    {
        Schema::create('aco_co_communications', function (Blueprint $table) {
            $table->id();
            $table->foreignId('application_id')->constrained('application_lists')->onDelete('cascade');
            $table->text('message');
            $table->unsignedBigInteger('created_by');
            $table->timestamps();

            $table->foreign('created_by')->references('id')->on('users')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('aco_co_communications');
    }
};
