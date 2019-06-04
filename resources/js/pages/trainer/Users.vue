<template>
  <div>
    <navigation></navigation>
    <sub-navigation>
      <li class="inline-block">
        <router-link
          exact-active-class="router-link-active-alt"
          to="/t/users"
          class="text-grey-darker mr-4"
          exact
        >Users</router-link>
      </li>
      <li class="inline-block">
        <router-link
          exact-active-class="router-link-active-alt"
          to="/t/exercises"
          class="text-grey-darker mr-4"
          exact
        >Exercises</router-link>
      </li>
    </sub-navigation>
    <loader v-if="loading"></loader>
    <div class="relative mb-20">
      <create-user-form
        @close-user-create="toggleModal"
        @create-user-success="refreshData"
        v-show="showModal"
      ></create-user-form>
      <transition name="fade">
        <user-list
          v-if="!loading && !showModal"
          heading="Users"
          v-bind:users="users"
          v-bind:show="showModal"
          v-bind:expiring="expiring"
        ></user-list>
      </transition>
    </div>
    <div
      v-if="!showModal"
      @click="toggleModal"
      class="cursor-pointer fixed pin-b pin-r w-12 h-12 bg-red hover:bg-red-dark shadow-lg rounded-full mr-8 mb-8 flex items-center justify-center"
    >
      <svg
        class="fill-current text-white"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M11 3L11 11 3 11 3 13 11 13 11 21 13 21 13 13 21 13 21 11 13 11 13 3z"></path>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: {},
      expiring: {},
      showModal: false,
      loading: true
    };
  },

  methods: {
    refreshData() {
      this.loading = true;

      this.$http
        .get(`${process.env.MIX_BASE_URL}/trainer/users`)
        .then(res => {
          this.users = res.data;
          this.loading = false;
        })
        .catch(err => {});
    },

    toggleModal() {
      this.showModal = !this.showModal;
    }
  },

  mounted() {
    this.$http
      .all([
        this.$http.get(`${process.env.MIX_BASE_URL}/trainer/expiring`),
        this.$http.get(`${process.env.MIX_BASE_URL}/trainer/users`)
      ])
      .then(
        this.$http.spread((expiring, all) => {
          this.users = all.data;
          this.expiring = expiring.data;

          this.loading = false;
        })
      )
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
