<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('university_communications', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('application_id');
            $table->string('subject');
            $table->longText('message');
            $table->unsignedBigInteger('created_by');
            $table->timestamps();

            // Foreign key constraints
            $table->foreign('created_by')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('application_id')->references('id')->on('application_lists')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('university_communications');
    }
};
