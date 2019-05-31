<template>
  <div>
    <navigation></navigation>
    <div class="bg-grey-lighter py-10 border-b border-grey-light">
      <div class="container mx-auto px-8 text-grey-darkest">
        <div class="flex items-center justify-center md:justify-start flex-wrap">
          <div class="mb-8 md:mb-0 md:mr-8">
            <div class="rounded-full bg-grey p-2">
              <div class="rounded-full p-1 bg-grey-lighter">
                <svg
                  class="profile-icon text-grey-light fill-current"
                  x="0px"
                  y="0px"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M0.39,15.93l2.4,4.16c0.33,0.57,1.07,0.77,1.64,0.44l1.68-0.97c0.7,0.55,1.47,1,2.28,1.34v1.92c0,0.66,0.54,1.2,1.2,1.2
	h4.81c0.66,0,1.2-0.54,1.2-1.2V20.9c0.81-0.34,1.58-0.79,2.28-1.34l1.68,0.97c0.57,0.33,1.31,0.13,1.64-0.44l2.4-4.16
	c0.33-0.57,0.13-1.31-0.44-1.64l-1.65-0.95c0.06-0.44,0.09-0.89,0.09-1.34c0-0.45-0.03-0.89-0.1-1.34l1.65-0.95
	c0.57-0.33,0.77-1.07,0.44-1.64l-2.4-4.16c-0.33-0.57-1.07-0.77-1.64-0.44l-1.68,0.97c-0.7-0.55-1.47-1-2.28-1.34V1.18
	c0-0.66-0.54-1.2-1.2-1.2H9.59c-0.66,0-1.2,0.54-1.2,1.2V3.1C7.58,3.44,6.81,3.89,6.11,4.44L4.44,3.47
	C3.86,3.13,3.13,3.33,2.79,3.91l-2.4,4.16C0.06,8.64,0.26,9.38,0.83,9.71l1.65,0.95c-0.06,0.44-0.1,0.89-0.1,1.34
	c0,0.45,0.03,0.89,0.1,1.34l-1.65,0.95C0.26,14.62,0.06,15.36,0.39,15.93z M12,7.19c2.65,0,4.81,2.16,4.81,4.81
	s-2.16,4.81-4.81,4.81S7.19,14.65,7.19,12S9.35,7.19,12,7.19z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
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
                v-bind:class="{'bg-blue': isActive, 'bg-grey': !isActive}"
                class="block text-xs font-medium uppercase text-white py-2 px-4 rounded-full"
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

