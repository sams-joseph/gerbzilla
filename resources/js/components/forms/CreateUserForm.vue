<template>
  <div class="px-8 py-20">
    <h1 class="text-grey-darkest font-normal text-2xl mb-10">Create User</h1>
    <form
      @submit.prevent="onSubmit"
      class="max-w-md"
      @keydown="form.errors.clear($event.target.name)"
    >
      <div class="mb-6">
        <label class="block text-grey-darker text-sm font-normal mb-4" for="firstname">First Name</label>
        <input
          class="appearance-none border-b w-full py-2 mb-2 text-grey-darker leading-tight focus:outline-none"
          id="firstname"
          type="text"
          name="first_name"
          v-model="form.first_name"
        >
        <span
          class="text-red text-xs pt-2"
          v-if="form.errors.has('first_name')"
          v-text="form.errors.get('last_name')"
        ></span>
      </div>
      <div class="mb-6">
        <label class="block text-grey-darker text-sm font-normal mb-4" for="lastname">Last Name</label>
        <input
          class="appearance-none border-b w-full py-2 mb-2 text-grey-darker leading-tight focus:outline-none"
          id="lastname"
          type="text"
          name="last_name"
          v-model="form.last_name"
        >
        <span
          class="text-red text-xs pt-2"
          v-if="form.errors.has('last_name')"
          v-text="form.errors.get('last_name')"
        ></span>
      </div>
      <div class="mb-6">
        <label class="block text-grey-darker text-sm font-normal mb-4" for="email">Email</label>
        <input
          class="appearance-none border-b w-full py-2 mb-2 text-grey-darker leading-tight focus:outline-none"
          id="email"
          type="email"
          name="email"
          v-model="form.email"
        >
        <span
          class="text-red text-xs pt-2"
          v-if="form.errors.has('email')"
          v-text="form.errors.get('email')"
        ></span>
      </div>
      <div class="mb-6">
        <label class="block text-grey-darker text-sm font-normal mb-4" for="password">Password</label>
        <input
          class="appearance-none border-b w-full py-2 mb-2 text-grey-darker leading-tight focus:outline-none"
          id="password"
          type="password"
          v-model="form.password"
        >
        <span
          class="text-red text-xs pt-2"
          v-if="form.errors.has('password')"
          v-text="form.errors.get('password')"
        ></span>
      </div>
      <div class="mb-12">
        <label
          class="block text-grey-darker text-sm font-normal mb-4"
          for="confirmpassword"
        >Confirm Password</label>
        <input
          class="appearance-none border-b w-full py-2 mb-2 text-grey-darker leading-tight focus:outline-none"
          id="confirmpassword"
          type="password"
          name="password_confirmation"
          v-model="form.password_confirmation"
        >
        <span
          class="text-red text-xs pt-2"
          v-if="form.errors.has('password')"
          v-text="form.errors.get('password')"
        ></span>
      </div>
      <button
        class="mr-4 bg-blue hover:bg-blue-dark text-white font-normal text-sm py-2 px-6 rounded-full focus:outline-none uppercase"
        type="submit"
      >Create User</button>
      <button
        @click="$emit('close-user-create')"
        class="text-grey-darker font-normal text-sm py-2 px-6 rounded-full focus:outline-none uppercase"
        type="button"
      >Cancel</button>
    </form>
  </div>
</template>

<script>
import Form from "../../classes/Form";

export default {
  data() {
    return {
      form: new Form({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: ""
      })
    };
  },

  methods: {
    onSubmit() {
      this.form
        .post(`${process.env.MIX_BASE_URL}/trainer/users`)
        .then(res => {
          this.$store.dispatch("add", {
            type: "success",
            message: "Added user successfully.",
            show: true
          });

          this.$emit("create-user-success");
          this.$emit("close-user-create");
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
