<template>
  <div class="flex px-0 md:px-8 mt-20">
    <aside class="w-1/4 hidden md:block">
      <input
        class="w-full border border-grey-light bg-grey-lighter rounded-full px-4 py-2 focus:outline-none mb-8"
        type="text"
        name="search"
        v-model="query"
        placeholder="Search"
      >
      <h1 class="text-grey-darkest font-normal text-2xl mb-10 mx-2">Status</h1>
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
    </aside>
    <div class="flex-1">
      <div class="px-4">
        <h1 v-if="showLastWeek" class="text-grey-darkest font-normal text-2xl mb-10 px-4">Expiring</h1>
        <ul v-if="showLastWeek" class="list-reset px-4 md:px-0 mb-10 flex flex-wrap">
          <li
            v-for="user in expiring"
            v-bind:key="user.id"
            class="w-full md:w-1/2 lg:w-1/3 py-4 md:hover:bg-grey-lighter rounded-lg px-4 flex items-center shadow-lg md:shadow-none mb-4 md:mb-0 bg-white"
          >
            <router-link :to="{ name: 'user', params: { id: user.id }}" class="flex items-center">
              <span class="rounded-full mr-6 h-12 w-12">
                <img src="/images/profile-icon.svg" alt="Profile Icon">
              </span>
              <span class="text-grey-darkest mr-6">{{ `${user.first_name} ${user.last_name}` }}</span>
            </router-link>
          </li>
        </ul>
        <h1 class="text-grey-darkest font-normal text-2xl mb-10 px-4">{{ heading }}</h1>
        <ul class="list-reset px-4 md:px-0 flex flex-wrap">
          <li
            v-for="user in filteredUsers"
            v-bind:key="user.id"
            class="w-full md:w-1/2 lg:w-1/3 py-4 md:hover:bg-grey-lighter rounded-lg px-4 flex items-center shadow-lg md:shadow-none mb-4 md:mb-0 bg-white"
          >
            <router-link :to="{ name: 'user', params: { id: user.id }}" class="flex items-center">
              <span class="rounded-full mr-6 h-12 w-12">
                <img src="/images/profile-icon.svg" alt="Profile Icon">
              </span>
              <span class="text-grey-darkest mr-6">{{ `${user.first_name} ${user.last_name}` }}</span>
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
        <input
          class="w-full border border-grey-light bg-grey-lighter rounded-full px-4 py-2 focus:outline-none mb-8"
          type="text"
          name="search"
          v-model="query"
          placeholder="Search"
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
        return name.includes(this.query);
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