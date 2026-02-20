<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StatusSeeds extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('status')->insert(['status' => 'ToDo']);
        DB::table('status')->insert(['status' => 'Doing']);
        DB::table('status')->insert(['status' => 'Done']);
    }
}
