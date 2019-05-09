<?php

use Illuminate\Database\Seeder;

class BodyPartTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('bodyparts')->insert([
            'name' => 'Chest',
        ]);

        DB::table('bodyparts')->insert([
            'name' => 'Back',
        ]);

        DB::table('bodyparts')->insert([
            'name' => 'Shoulders',
        ]);

        DB::table('bodyparts')->insert([
            'name' => 'Legs',
        ]);

        DB::table('bodyparts')->insert([
            'name' => 'Traps',
        ]);
    }
}
