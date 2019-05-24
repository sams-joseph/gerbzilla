<template>
  <div class="flex px-0 md:px-8 mt-20">
    <aside class="w-1/4 hidden md:block">
      <div class="relative">
        <div class="absolute pin-r py-1 pr-2">
          <svg class="fill-current text-grey-darkest" width="24" height="28" viewBox="0 0 24 24">
            <path
              d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z"
            ></path>
            <path
              d="M11.412,8.586C11.791,8.966,12,9.468,12,10h2c0-1.065-0.416-2.069-1.174-2.828c-1.514-1.512-4.139-1.512-5.652,0 l1.412,1.416C9.346,7.83,10.656,7.832,11.412,8.586z"
            ></path>
          </svg>
        </div>
        <input
          class="w-full border border-grey-light text-grey-darkest bg-grey-lighter rounded-full px-4 py-2 focus:outline-none mb-8"
          type="text"
          name="search"
          v-model="query"
          placeholder="Search"
        >
      </div>
      <h1 class="text-grey-darkest font-normal text-2xl mb-10 mx-2">Status</h1>
      <ul class="list-reset">
        <li class="hover:bg-grey-lighter p-2 rounded flex items-center">
          <label class="checkbox-container flex-1">
            Active
            <input type="checkbox" id="active" name="active" value="1" v-model="activity">
            <span class="checkbox-checkmark"></span>
          </label>
          <span
            class="bg-grey-light text-grey-darkest rounded-full float-right px-2 py-1"
          >{{ getNumUsers(1) }}</span>
        </li>
        <li class="hover:bg-grey-lighter p-2 rounded flex items-center">
          <label class="checkbox-container flex-1">
            Inactive
            <input
              type="checkbox"
              id="inactive"
              name="inactive"
              value="2"
              v-model="activity"
            >
            <span class="checkbox-checkmark"></span>
          </label>
          <span
            class="bg-grey-light text-grey-darkest rounded-full float-right px-2 py-1"
          >{{ getNumUsers(2) }}</span>
        </li>
      </ul>
    </aside>
    <div class="flex-1">
      <div class="px-4">
        <div class="px-4">
          <div class="relative md:hidden">
            <div class="absolute pin-r py-1 pr-2">
              <svg
                class="fill-current text-grey-darkest"
                width="24"
                height="28"
                viewBox="0 0 24 24"
              >
                <path
                  d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z"
                ></path>
                <path
                  d="M11.412,8.586C11.791,8.966,12,9.468,12,10h2c0-1.065-0.416-2.069-1.174-2.828c-1.514-1.512-4.139-1.512-5.652,0 l1.412,1.416C9.346,7.83,10.656,7.832,11.412,8.586z"
                ></path>
              </svg>
            </div>
            <input
              class="w-full border border-grey-light bg-grey-lighter rounded-full px-4 py-2 focus:outline-none mb-8"
              type="text"
              name="search"
              v-model="query"
              placeholder="Search"
            >
          </div>
        </div>
        <h1 v-if="showLastWeek" class="text-grey-darkest font-normal text-2xl mb-10 px-4">Expiring</h1>
        <ul v-if="showLastWeek" class="list-reset px-4 md:px-0 mb-10 flex flex-wrap">
          <li
            v-for="user in expiring"
            v-bind:key="user.id"
            class="w-full lg:w-1/2 py-4 md:hover:bg-grey-lighter rounded-lg px-4 flex items-center shadow-lg md:shadow-none mb-4 md:mb-0 bg-white"
          >
            <router-link
              :to="{ name: 'user', params: { id: user.id }}"
              class="w-full flex items-center"
            >
              <span class="rounded-full mr-6 h-18 w-18 md:h-12 md:w-12">
                <img class="w-full md:w-auto" src="/images/profile-icon.svg" alt="Profile Icon">
              </span>
              <div class="flex-1">
                <span
                  class="block text-grey-darkest mr-6 font-medium"
                >{{ `${user.first_name} ${user.last_name}` }}</span>
                <span
                  class="text-blue text-sm mr-6"
                >{{ user.block_expiration ? $moment(user.block_expiration).format('MMMM Do YYYY') : 'Past expiration' }}</span>
              </div>
              <div>
                <svg
                  class="fill-current"
                  :class="{'text-green': user.is_active === 1, 'text-grey-dark': user.is_active === 2}"
                  width="20"
                  height="20"
                  viewBox="0 0 34 34"
                >
                  <path
                    d="M16.9999 31.1667C9.17588 31.1667 2.83325 24.824 2.83325 17C2.83325 9.17598 9.17588 2.83334 16.9999 2.83334C24.824 2.83334 31.1666 9.17598 31.1666 17C31.1666 24.824 24.824 31.1667 16.9999 31.1667ZM11.3333 14.1667L8.49992 17L15.5833 24.0833L25.4999 14.1667L22.6666 11.3333L15.5833 18.4167L11.3333 14.1667Z"
                  ></path>
                </svg>
              </div>
            </router-link>
          </li>
        </ul>
        <h1 class="text-grey-darkest font-normal text-2xl mb-10 px-4">{{ heading }}</h1>
        <ul class="list-reset px-4 md:px-0 flex flex-wrap">
          <li
            v-for="user in filteredUsers"
            v-bind:key="user.id"
            class="w-full lg:w-1/2 py-4 md:hover:bg-grey-lighter rounded-lg px-4 flex items-center shadow-lg md:shadow-none mb-4 md:mb-0 bg-white"
          >
            <router-link
              :to="{ name: 'user', params: { id: user.id }}"
              class="flex items-center w-full"
            >
              <span class="rounded-full mr-6 h-18 w-18 md:h-12 md:w-12">
                <img class="w-full md:w-auto" src="/images/profile-icon.svg" alt="Profile Icon">
              </span>
              <div class="flex-1">
                <span
                  class="block text-grey-darkest font-medium mr-6"
                >{{ `${user.first_name} ${user.last_name}` }}</span>
                <span
                  class="text-blue text-sm mr-6"
                >{{ user.block_expiration ? $moment(user.block_expiration).format('MMMM Do YYYY') : 'Past expiration' }}</span>
              </div>
              <div>
                <svg
                  class="fill-current"
                  :class="{'text-green': user.is_active === 1, 'text-grey-dark': user.is_active === 2}"
                  width="20"
                  height="20"
                  viewBox="0 0 34 34"
                >
                  <path
                    d="M16.9999 31.1667C9.17588 31.1667 2.83325 24.824 2.83325 17C2.83325 9.17598 9.17588 2.83334 16.9999 2.83334C24.824 2.83334 31.1666 9.17598 31.1666 17C31.1666 24.824 24.824 31.1667 16.9999 31.1667ZM11.3333 14.1667L8.49992 17L15.5833 24.0833L25.4999 14.1667L22.6666 11.3333L15.5833 18.4167L11.3333 14.1667Z"
                  ></path>
                </svg>
              </div>
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
          <li class="hover:bg-grey-lightest p-2 rounded flex items-center">
            <label class="checkbox-container flex-1">
              Active
              <input type="checkbox" id="active" name="active" value="1" v-model="activity">
              <span class="checkbox-checkmark"></span>
            </label>
            <span class="bg-grey-lighter rounded-full float-right px-2 py-1">{{ getNumUsers(1) }}</span>
          </li>
          <li class="hover:bg-grey-lightest p-2 rounded flex items-center">
            <label class="checkbox-container flex-1">
              Inactive
              <input
                type="checkbox"
                id="inactive"
                name="inactive"
                value="2"
                v-model="activity"
              >
              <span class="checkbox-checkmark"></span>
            </label>
            <span class="bg-grey-lighter rounded-full float-right px-2 py-1">{{ getNumUsers(2) }}</span>
          </li>
        </ul>
      </div>
    </transition>
    <div
      ref="button"
      v-if="!show"
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
      activity: [],
      query: ""
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
      if (this.activity.length) {
        return this.searchResults.filter(user => {
          for (const status of this.activity) {
            if (user.is_active === parseInt(status)) {
              return true;
            }
          }
          return false;
        });
      } else {
        return this.searchResults;
      }
    },

    searchResults() {
      return this.users.filter(user => {
        const name = `${user.first_name} ${user.last_name}`;
        return name.toLowerCase().includes(this.query.toLowerCase());
      });
    },

    showLastWeek() {
      return !!this.expiring.length;
    }
  },

  props: {
    users: Array,
    expiring: Array,
    heading: String,
    show: Boolean
  }
};
</script>