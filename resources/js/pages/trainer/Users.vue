<template>
  <div>
    <page-header></page-header>
    <navigation></navigation>
    <side-navigation></side-navigation>
    <loader v-if="loading"></loader>
    <div
      v-if="!isMessage"
      class="flex items-center text-white text-sm font-bold px-4 py-3"
      :class="{ 'bg-blue': !message.isError, 'bg-red-light': message.isError }"
      role="alert"
    >
      <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path
          d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"
        ></path>
      </svg>
      <p>{{ message.message }}</p>
    </div>
    <div class="relative container mx-auto mb-20">
      <transition name="fade">
        <create-user-form
          @cancel-user-create="toggleModal"
          @create-user-success="refreshData"
          @create-user-error="handleError"
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
      loading: true,
      message: {}
    };
  },

  methods: {
    refreshData() {
      this.loading = true;

      this.$http
        .get(`${process.env.MIX_BASE_URL}/trainer/users`)
        .then(res => {
          this.users = res.data;
          this.message = {
            message: "Successfully created user.",
            isError: false
          };
          this.loading = false;
        })
        .catch(err => {
          this.message = {
            message: err,
            isError: true
          };
        });
    },

    toggleModal() {
      this.showModal = !this.showModal;
    },

    handleError(err) {
      this.message = {
        message: err.message,
        isError: true
      };
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
  },

  computed: {
    isMessage() {
      return (
        Object.keys(this.message).length === 0 &&
        this.message.constructor === Object
      );
    }
  }
};
</script>
