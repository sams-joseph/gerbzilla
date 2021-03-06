<?php

use Illuminate\Database\Seeder;

class UnitsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('units')->insert([
            'name' => 'lbs',
        ]);

        DB::table('units')->insert([
            'name' => 'kgs',
        ]);

        DB::table('units')->insert([
            'name' => '%',
        ]);
    }
}
