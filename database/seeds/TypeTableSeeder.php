<?php

use Illuminate\Database\Seeder;

use App\Type;

class TypeTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
        public function run()
    {
        $strength = new Type();
        $strength->name = 'strength';
        $strength->save();

        $hypertrophy = new Type();
        $hypertrophy->name = 'hypertrophy';
        $hypertrophy->save();

        $fitness = new Type();
        $fitness->name = 'fitness';
        $fitness->save();
    }
}
