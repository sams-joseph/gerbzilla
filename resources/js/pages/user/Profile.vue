<template>
  <div>
    <page-header></page-header>
    <navigation></navigation>
    <div class="bg-grey-lighter py-10 border-b border-grey-light">
      <div class="container mx-auto px-8 text-grey-darkest">
        <div class="flex items-center justify-center md:justify-start flex-wrap">
          <svg
            class="profile-icon fill-current opacity-10 md:mr-8 mb-8 md:mb-0"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M2.344,15.271l2,3.46c0.276,0.478,0.888,0.642,1.366,0.365l1.396-0.806c0.58,0.457,1.221,0.832,1.895,1.112V21 c0,0.552,0.447,1,1,1h4c0.553,0,1-0.448,1-1v-1.598c0.674-0.28,1.314-0.655,1.895-1.112l1.396,0.806 c0.477,0.275,1.091,0.11,1.366-0.365l2-3.46c0.275-0.476,0.11-1.091-0.365-1.366l-1.372-0.793C19.973,12.743,20,12.371,20,12 s-0.027-0.743-0.081-1.112l1.372-0.793c0.476-0.275,0.641-0.89,0.365-1.366l-2-3.46c-0.276-0.478-0.888-0.642-1.366-0.365 l-1.396,0.806C16.314,5.253,15.674,4.877,15,4.598V3c0-0.552-0.447-1-1-1h-4C9.447,2,9,2.448,9,3v1.598 c-0.674,0.28-1.314,0.655-1.895,1.112L5.71,4.904C5.231,4.627,4.62,4.791,4.344,5.269l-2,3.46c-0.275,0.476-0.11,1.091,0.365,1.366 l1.372,0.793C4.027,11.257,4,11.629,4,12s0.027,0.743,0.081,1.112l-1.372,0.793C2.233,14.18,2.068,14.795,2.344,15.271z M12,8 c2.206,0,4,1.794,4,4s-1.794,4-4,4s-4-1.794-4-4S9.794,8,12,8z"
            ></path>
          </svg>
          <div class="w-full md:w-auto">
            <h1 class="text-center md:text-left text-xl mb-2" v-text="fullName"></h1>
            <h1
              class="text-center md:text-left text-base font-medium text-grey-darker uppercase"
            >Settings</h1>
          </div>
        </div>
      </div>
    </div>
    <main class="py-20">
      <section class="container mx-auto px-4">
        <tabs class="flex-1">
          <tab name="Account" :selected="true">
            <div class="flex items-center mb-20 px-8 flex-wrap">
              <h1
                class="text-grey-darkest font-normal text-2xl mr-8 mb-4 md:mb-0"
              >Update Account Information</h1>
              <span
                v-bind:class="{'text-white bg-green p-2 rounded-full': isActive, 'text-white bg-red p-2 rounded-full': !isActive}"
                class="block text-xs font-medium uppercase text-center md:text-left"
              >{{ this.isActive ? 'Account Active' : 'Account Inactive' }}</span>
            </div>
            <form
              @submit.prevent="onSubmit"
              class="max-w-md px-8 relative"
              @keydown="form.errors.clear($event.target.name)"
            >
              <div class="mb-6">
                <label
                  class="block text-grey-darker text-sm font-normal mb-4"
                  for="firstname"
                >First Name</label>
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
                <label
                  class="block text-grey-darker text-sm font-normal mb-4"
                  for="lastname"
                >Last Name</label>
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
                <label
                  class="block text-grey-darker text-sm font-normal mb-4"
                  for="password"
                >Password</label>
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
              >Update Profile</button>
            </form>
          </tab>
          <tab name="Plan"></tab>
        </tabs>
      </section>
    </main>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Form from "../../classes/Form";

export default {
  data() {
    return {
      loading: false,
      form: new Form({
        email: "",
        first_name: "",
        last_name: "",
        password: "",
        password_confirmation: ""
      })
    };
  },

  mounted() {
    this.setUserInformation();
  },

  methods: {
    onSubmit() {
      this.loading = true;
      this.form
        .post(`${process.env.MIX_BASE_URL}/user/update`)
        .then(res => {
          this.$store
            .dispatch("updateUser")
            .then(res => {
              this.setUserInformation();
              this.$store.dispatch("add", {
                type: "success",
                message: "Updated profile",
                show: true
              });

              this.loading = false;
            })
            .catch(err => {
              this.loading = false;
              console.log(err);
            });
        })
        .catch(err => {
          this.loading = false;
          console.log(err);
        });
    },

    setUserInformation() {
      const { email, first_name, last_name } = this.user;

      this.form.email = email;
      this.form.first_name = first_name;
      this.form.last_name = last_name;
    }
  },

  computed: {
    fullName() {
      return `${this.user.first_name} ${this.user.last_name}`;
    },

    ...mapGetters(["isActive", "user"])
  }
};
</script>

<style lang="sass" scoped>

.profile-icon
  height: 150px
  width: 150px

.opacity-10
  opacity: 0.1

</style>

