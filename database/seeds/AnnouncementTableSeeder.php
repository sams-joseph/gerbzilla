<?php

use Illuminate\Database\Seeder;

class AnnouncementTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('announcements')->insert([
            'title' => 'Welcome',
            'short_desc' => 'The new Gerbzilla Training application. Track your progress and manage your workouts all from one location.',
            'long_desc' => 'This is the long description.'
        ]);
    }
}
