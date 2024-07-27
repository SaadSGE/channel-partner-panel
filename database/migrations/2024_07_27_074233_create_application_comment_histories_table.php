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
        Schema::create('application_comment_histories', function (Blueprint $table) {
            $table->id();
            $table->foreignId('application_id')->constrained('application_lists')->onDelete('cascade');
            $table->text('comment');
            $table->unsignedBigInteger('comment_by');
            $table->unsignedTinyInteger('status')->default(0);
            $table->timestamps();


            $table->foreign('comment_by')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('application_comment_histories');
    }
};
