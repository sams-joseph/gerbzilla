<template>
  <div
    v-if="isToggled"
    class="absolute pin-t pin-l bg-grey-lightest h-screen w-full flex items-start justify-center pt-32"
  >
    <div class="bg-white max-w-sm shadow-lg rounded-lg overflow-hidden">
      <div class="sm:flex sm:items-center p-8">
        <div class="text-center sm:text-left sm:flex-grow">
          <p class="text-xl text-center text-grey-darkest mb-8">Welcome Back!</p>
          <form @submit="login">
            <input
              class="appearance-none border-b w-full py-2 mb-8 text-grey-darker leading-tight focus:outline-none"
              id="email"
              type="email"
              placeholder="Email"
              v-model="username"
            >
            <input
              class="appearance-none border-b w-full py-2 mb-12 text-grey-darker leading-tight focus:outline-none"
              id="password"
              type="password"
              placeholder="Password"
              v-model="password"
            >
            <button
              type="submit"
              class="text-xs font-semibold rounded-full py-2 leading-normal bg-white border border-red text-red hover:bg-red hover:text-white w-full uppercase"
            >Login</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login(e) {
      e.preventDefault();
      axios
        .post("http://gerbzilla.test/api/login", {
          username: this.username,
          password: this.password
        })
        .then(res => {
          $cookies.set("laravel_token", res.data.access_token);

          const token = `Bearer ${res.data.access_token}`;
          if (token) {
            axios.defaults.headers.common["Authorization"] = token;
          } else {
            axios.defaults.headers.common["Authorization"] = null;
          }

          this.$emit("logged-in");
          console.log(res.data.access_token);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  props: {
    isToggled: Boolean
  }
};
</script>
