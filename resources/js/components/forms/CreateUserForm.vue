<template>
  <div v-if="show" class="z-50 absolute bg-white px-8 pb-20 pin-l pin-t pin-r">
    <div
      @click="closeWindow"
      class="w-8 h-8 p-2 flex absolute pin-r pin-t border border-grey-dark justify-center items-center rounded-full mr-8 cursor-pointer"
    >
      <svg
        class="fill-current text-grey-dark"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          d="M19.293 3.293L12 10.586 4.707 3.293 3.293 4.707 10.586 12 3.293 19.293 4.707 20.707 12 13.414 19.293 20.707 20.707 19.293 13.414 12 20.707 4.707z"
        ></path>
      </svg>
    </div>
    <h1 class="text-grey-darkest font-normal text-2xl mb-10">Create User</h1>
    <div
      v-if="loading"
      class="absolute pin-t pin-l pin-b w-full bg-white-translucent flex justify-center items-center"
    >
      <img src="/images/puff.svg" alt="Loading">
    </div>
    <form @submit="createUser" class="max-w-md">
      <div class="mb-6">
        <label class="block text-grey-darker text-sm font-normal mb-4" for="firstname">First Name</label>
        <input
          class="appearance-none border-b w-full py-2 text-grey-darker leading-tight focus:outline-none"
          id="firstname"
          type="text"
          v-model="firstName"
        >
      </div>
      <div class="mb-6">
        <label class="block text-grey-darker text-sm font-normal mb-4" for="lastname">Last Name</label>
        <input
          class="appearance-none border-b w-full py-2 text-grey-darker leading-tight focus:outline-none"
          id="lastname"
          type="text"
          v-model="lastName"
        >
      </div>
      <div class="mb-6">
        <label class="block text-grey-darker text-sm font-normal mb-4" for="email">Email</label>
        <input
          class="appearance-none border-b w-full py-2 text-grey-darker leading-tight focus:outline-none"
          id="email"
          type="email"
          v-model="email"
        >
      </div>
      <div class="mb-6">
        <label class="block text-grey-darker text-sm font-normal mb-4" for="password">Password</label>
        <input
          class="appearance-none border-b w-full py-2 text-grey-darker leading-tight focus:outline-none"
          id="password"
          type="password"
          v-model="password"
        >
      </div>
      <div class="mb-12">
        <label
          class="block text-grey-darker text-sm font-normal mb-4"
          for="confirmpassword"
        >Confirm Password</label>
        <input
          class="appearance-none border-b w-full py-2 text-grey-darker leading-tight focus:outline-none"
          id="confirmpassword"
          type="password"
          v-model="confirmPassword"
        >
      </div>
      <button
        class="mr-4 bg-blue hover:bg-blue-dark text-white font-normal text-sm py-2 px-6 rounded-full focus:outline-none uppercase"
        type="submit"
      >Create User</button>
      <button
        @click="closeWindow"
        class="text-grey-darker font-normal text-sm py-2 px-6 rounded-full focus:outline-none uppercase"
        type="button"
      >Cancel</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      loading: false
    };
  },

  props: {
    show: Boolean
  },

  methods: {
    closeWindow() {
      this.$emit("cancel-user-create");
    },

    createUser(e) {
      e.preventDefault();
      this.loading = true;

      this.$http
        .post(`${process.env.MIX_BASE_URL}/trainer/users`, {
          first_name: this.firstName,
          last_name: this.lastName,
          email: this.email,
          password: this.password
        })
        .then(res => {
          this.firstName = "";
          this.lastName = "";
          this.email = "";
          this.password = "";
          this.confirmPassword = "";

          this.loading = false;

          this.$emit("create-user-success");
          this.$emit("cancel-user-create");
        })
        .catch(err => {
          this.$emit("create-user-error", err);
          this.$emit("cancel-user-create");
        });
    }
  }
};
</script>
