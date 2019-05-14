<template>
  <div>
    <navigation></navigation>
    <side-navigation></side-navigation>
    <div v-if="loading" class="w-full">
      <div class="pl-6 flex flex-col items-center">
        <div class="mb-4">
          <img src="/images/puff.svg" alt="Loading">
        </div>
        <h6 class="text-grey-darkest font-bold text-lg">Loading</h6>
      </div>
    </div>
    <transition name="fade">
      <user-list v-if="!loading" heading="Users" v-bind:data="users"></user-list>
    </transition>
    <transition name="fade">
      <create-user-form
        @cancel-user-create="toggleModal"
        @create-user-success="refreshData"
        v-bind:show="showModal"
      ></create-user-form>
    </transition>
    <div
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
        .catch(err => {
          console.log(err);
        });
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
