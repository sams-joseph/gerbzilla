<?php

use Illuminate\Database\Seeder;

use App\Role;

class RoleTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $role_member = new Role();
        $role_member->name = 'member';
        $role_member->description = 'member';
        $role_member->save();

        $role_trainer = new Role();
        $role_trainer->name = 'trainer';
        $role_trainer->description = 'trainer';
        $role_trainer->save();

        $role_trainer = new Role();
        $role_trainer->name = 'admin';
        $role_trainer->description = 'admin';
        $role_trainer->save();
    }
}
