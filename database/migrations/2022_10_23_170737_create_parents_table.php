<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('parents', function (Blueprint $table) {
            $table->increments('id');
            $table->string('main_guardian_name');
            $table->string('secondary_guardian_name')->nullable();
            $table->string('email')->unique();
            $table->string('main_guardian_phone');
            $table->string('secondary_guardian_phone')->nullable();
            $table->string('address')->nullable();
            $table->boolean('is_active')->default(value ('0'))->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('parents');
    }
};
