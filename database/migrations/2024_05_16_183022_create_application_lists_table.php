<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateApplicationListsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('application_lists', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('course_id');
            $table->unsignedBigInteger('country_id');
            $table->unsignedBigInteger('intake_id');
            $table->unsignedBigInteger('university_id');
            $table->unsignedBigInteger('course_details_id');
            $table->string('student_passport_no');
            $table->date('date_of_birth');
            $table->string('student_first_name');
            $table->string('student_last_name');
            $table->string('student_whatsapp_number')->nullable();
            $table->string('counsellor_number')->nullable();
            $table->string('student_email')->nullable();
            $table->string('counsellor_email')->nullable();
            $table->text('student_address');
            $table->string('student_city');
            $table->string('student_country');
            $table->string('student_region_state');
            $table->enum('gender', ['male', 'female']);
            $table->enum('visa_refusal', ['yes', 'no']);
            $table->timestamps();


            $table->foreign('course_id')->references('id')->on('courses')->onDelete('cascade');
            $table->foreign('country_id')->references('id')->on('application_countries')->onDelete('cascade');
            $table->foreign('intake_id')->references('id')->on('intakes')->onDelete('cascade');
            $table->foreign('university_id')->references('id')->on('universities')->onDelete('cascade');
            $table->foreign('course_details_id')->references('id')->on('course_details')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('application_lists');
    }
}
