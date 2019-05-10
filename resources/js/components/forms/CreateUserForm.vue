<template>
  <div class="mx-8 relative max-w-sm">
    <h1 class="text-grey-darkest font-normal text-2xl mb-10">Create User</h1>
    <div
      v-if="loading"
      class="absolute pin-t pin-l pin-b w-full bg-white-translucent flex justify-center pt-12"
    >
      <div class="pl-6 flex flex-col items-center">
        <div class="mb-4">
          <img src="/images/puff.svg" alt="Loading">
        </div>
        <h6 class="text-grey-darkest font-bold text-lg">Loading</h6>
      </div>
    </div>
    <form @submit="createUser">
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
      <div class="mb-6">
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
        class="bg-blue hover:bg-blue-dark text-white font-normal text-sm py-2 px-6 rounded-full focus:outline-none uppercase"
        type="submit"
      >Create User</button>
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
  methods: {
    createUser(e) {
      e.preventDefault();
      this.loading = true;

      this.$http
        .post("http://localhost:8000/api/trainer/users", {
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
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
