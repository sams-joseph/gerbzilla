<template>
  <div>
    <page-header></page-header>
    <navigation></navigation>
    <side-navigation></side-navigation>
    <loader v-if="loading"></loader>
    <div class="relative container mx-auto mb-20">
      <transition name="fade">
        <create-user-form
          @cancel-user-create="toggleModal"
          @create-user-success="refreshData"
          v-bind:show="showModal"
        ></create-user-form>
      </transition>
      <transition name="fade">
        <user-list v-if="!loading" heading="Users" v-bind:users="users" v-bind:show="showModal"></user-list>
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
      .get(`${process.env.MIX_BASE_URL}/trainer/users`)
      .then(res => {
        this.users = res.data;
        this.loading = false;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
