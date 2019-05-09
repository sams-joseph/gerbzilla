<?php

use Illuminate\Database\Seeder;

class ExerciseTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('exercises')->insert([
            'name' => 'Barbell incline bench press',
            'category_id' => 1
        ]);

        DB::table('exercises')->insert([
            'name' => 'Barbell flat bench press',
            'category_id' => 1
        ]);

        DB::table('exercises')->insert([
            'name' => 'Dumbell incline bench press',
            'category_id' => 1
        ]);

        DB::table('exercises')->insert([
            'name' => 'Dumbell flat bench press',
            'category_id' => 1
        ]);
    }
}
