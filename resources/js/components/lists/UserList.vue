<template>
  <div class="container mx-auto mb-20 flex px-0 md:px-8">
    <aside class="w-48 hidden md:block">
      <h1 class="text-grey-darkest font-normal text-2xl mb-10">Status</h1>
      <ul class="list-reset">
        <li class="text-grey-darkest pb-6">
          <input
            class="mr-2"
            type="checkbox"
            id="active"
            name="active"
            value="1"
            v-model="is_active"
          >
          <label for="active">Active</label>
          <span class="bg-grey-lighter rounded-full float-right px-2 py-1">{{ getNumUsers(1) }}</span>
        </li>
        <li class="text-grey-darkest pb-6">
          <input
            class="mr-2"
            type="checkbox"
            id="inactive"
            name="inactive"
            value="2"
            v-model="not_active"
          >
          <label for="inactive">Inactive</label>
          <span class="bg-grey-lighter rounded-full float-right px-2 py-1">{{ getNumUsers(2) }}</span>
        </li>
      </ul>
    </aside>
    <div class="flex-1">
      <div class="px-4">
        <h1 class="text-grey-darkest font-normal text-2xl mb-10 px-4">{{ heading }}</h1>
        <ul class="list-reset px-4 md:px-0">
          <li
            class="w-full py-4 md:hover:bg-grey-lighter rounded-lg px-4 flex items-center shadow-lg md:shadow-none mb-4 md:mb-0"
            v-for="user in filteredUsers"
            v-bind:key="user.id"
          >
            <span class="rounded-full mr-6 h-12 w-12">
              <svg
                class="fill-current text-green"
                width="41"
                height="41"
                viewBox="0 0 41 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.75 0.75C9.908 0.75 0.75 9.908 0.75 20.75C0.75 31.592 9.908 40.75 20.75 40.75C31.592 40.75 40.75 31.592 40.75 20.75C40.75 9.908 31.592 0.75 20.75 0.75ZM20.75 36.75C16.448 36.75 12.48 34.946 9.57 32.07C11.076 28.456 14.6 25.894 18.75 25.894H22.75C26.9 25.894 30.424 28.456 31.93 32.07C29.02 34.946 25.052 36.75 20.75 36.75ZM20.75 10.75C24.204 10.75 26.75 13.294 26.75 16.75C26.75 20.206 24.204 22.75 20.75 22.75C17.298 22.75 14.75 20.206 14.75 16.75C14.75 13.294 17.298 10.75 20.75 10.75Z"
                ></path>
              </svg>
            </span>
            <span class="text-grey-darkest mr-6">{{ `${user.first_name} ${user.last_name}` }}</span>
            <span class="flex-1"></span>
            <router-link :to="{ name: 'user', params: { id: user.id }}">
              <span class="h-10 w-10 rounded-full bg-grey-light flex items-center justify-center">
                <svg
                  class="fill-current text-grey-darkest"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z"
                  ></path>
                  <path
                    d="M11.412,8.586C11.791,8.966,12,9.468,12,10h2c0-1.065-0.416-2.069-1.174-2.828c-1.514-1.512-4.139-1.512-5.652,0 l1.412,1.416C9.346,7.83,10.656,7.832,11.412,8.586z"
                  ></path>
                </svg>
              </span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>

    <transition name="fade">
      <div
        class="fixed bg-white shadow-lg p-8 pin-b pin-l pin-r ml-8 mr-8 mb-32 rounded-lg md:hidden"
        v-if="showFilterMenu"
        v-closable="{
          exclude: ['button'],
          handler: 'toggleFilterMenu'
        }"
      >
        <h1 class="text-grey-darkest font-normal text-2xl mb-10">Status</h1>
        <ul class="list-reset">
          <li class="text-grey-darkest pb-6">
            <input
              class="mr-2"
              type="checkbox"
              id="active"
              name="active"
              value="1"
              v-model="is_active"
            >
            Active
            <span
              class="bg-grey-lighter rounded-full float-right px-2 py-1"
            >{{ getNumUsers(1) }}</span>
          </li>
          <li class="text-grey-darkest pb-6">
            <input
              class="mr-2"
              type="checkbox"
              id="inactive"
              name="inactive"
              value="2"
              v-model="not_active"
            >
            Inactive
            <span
              class="bg-grey-lighter rounded-full float-right px-2 py-1"
            >{{ getNumUsers(2) }}</span>
          </li>
        </ul>
      </div>
    </transition>
    <div
      ref="button"
      @click="toggleFilterMenu"
      class="cursor-pointer fixed pin-b pin-l w-12 h-12 bg-white shadow-lg rounded-full ml-8 mb-8 flex items-center justify-center md:hidden"
    >
      <svg
        class="fill-current text-grey-darkest"
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
      >
        <path d="M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z"></path>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showFilterMenu: false,
      is_active: false,
      not_active: false
    };
  },

  methods: {
    toggleFilterMenu() {
      this.showFilterMenu = !this.showFilterMenu;
    },

    getNumUsers(id) {
      const users = this.users.filter(user => {
        return user.is_active === id;
      });

      return users.length;
    }
  },

  computed: {
    filteredUsers() {
      if (this.is_active) {
        return this.users.filter(user => {
          return user.is_active === 1;
        });
      } else if (this.not_active) {
        return this.users.filter(user => {
          return user.is_active === 2;
        });
      } else {
        return this.users;
      }
    }
  },

  props: {
    users: Array,
    heading: String
  }
};
</script>