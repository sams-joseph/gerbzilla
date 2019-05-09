<?php

use Illuminate\Database\Seeder;

use App\User;
use App\Role;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $role_member = Role::where('name', 'member')->first();
        $role_trainer  = Role::where('name', 'trainer')->first();

        $member = new User();
        $member->first_name = 'Member';
        $member->last_name = 'Name';
        $member->email = 'member@example.com';
        $member->password = bcrypt('secret');
        $member->save();
        $member->roles()->attach($role_member);

        $trainer = new User();
        $trainer->first_name = 'Trainer';
        $trainer->last_name = 'Name';
        $trainer->email = 'trainer@example.com';
        $trainer->password = bcrypt('secret');
        $trainer->save();
        $trainer->roles()->attach($role_trainer);
    }
}
