<template>
  <header class="w-full px-6 py-2 flex justify-between items-center bg-white transition-all z-50">
    <transition name="fade">
      <login-form
        v-scroll-lock="showLogin"
        v-bind:is-toggled="showLogin"
        @logged-in="successfulLogin"
      ></login-form>
    </transition>
    <transition name="fade">
      <div
        v-if="showLogin"
        @click="login"
        class="absolute pin-r pin-t mr-6 mt-6 h-8 w-8 cursor-pointer"
      >
        <svg
          class="fill-current text-grey-darkest"
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
    </transition>
    <transition name="fade">
      <div
        v-if="showDrawer"
        @click="openDrawer"
        class="w-full h-screen bg-grey-translucent absolute pin-t pin-l pin-b z-50"
      ></div>
    </transition>
    <transition name="slide">
      <div
        v-if="showDrawer"
        class="absolute bg-white w-64 h-screen shadow-lg pin-t pin-r pin-b z-50"
      >
        <div
          @click="openDrawer"
          class="absolute pin-r pin-t mr-4 mt-4 h-8 w-8 cursor-pointer"
          v-scroll-lock="showDrawer"
        >
          <svg
            class="fill-current text-white"
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
        <div class="bg-blue-gradient">
          <h6 class="text-center text-xl font-hairline text-white mb-1 pt-24">Jamie</h6>
          <h6 class="text-center text-xl font-hairline text-white pb-10">Lannister</h6>
        </div>
        <ul class="list-reset">
          <li
            @click="logout"
            class="block px-8 py-2 hover:bg-grey-lighter text-grey-darkest cursor-pointer text-center"
          >Logout</li>
        </ul>
      </div>
    </transition>
    <transition name="fade">
      <div
        v-scroll-lock="showMenu"
        v-if="showMenu"
        class="absolute w-full pin-t pin-l h-screen bg-grey-gradient flex flex-col justify-center items-center z-50"
      >
        <router-link
          exact-active-class="popover-active-exact"
          active-class="blank"
          class="text-white font-bold text-3xl mb-4"
          to="/u/overview"
          exact
        >Overview</router-link>
        <router-link
          exact-active-class="popover-active-exact"
          active-class="blank"
          class="text-white font-bold text-3xl mb-4"
          to="/u/workouts"
          exact
        >Workouts</router-link>
        <router-link
          exact-active-class="popover-active-exact"
          active-class="blank"
          class="text-white font-bold text-3xl mb-4"
          to="/u/goals"
          exact
        >Goals</router-link>
        <router-link
          v-if="isTrainer"
          exact-active-class="popover-active-exact"
          active-class="blank"
          class="text-white font-bold text-3xl mb-4"
          to="/t/"
          exact
        >Trainer</router-link>
        <router-link
          v-if="isAdmin"
          exact-active-class="popover-active-exact"
          active-class="blank"
          class="text-white font-bold text-3xl mb-4"
          to="/a/admin"
          exact
        >Admin</router-link>

        <div @click="openMenu" class="absolute pin-r pin-t mr-4 mt-4 h-8 w-8 cursor-pointer">
          <svg
            class="fill-current text-white"
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
      </div>
    </transition>
    <router-link exact-active-class="none" active-class="none" to="/">
      <div class="flex items-center">
        <div class="mr-2">
          <img src="/images/Logo.png" alt="Gerbzilla Powerlifting">
        </div>
        <div class="flex-col flex">
          <span class="text-lg text-red font-bold uppercase">Gerbzilla</span>
          <span class="text-sm text-grey font-thin uppercase">Powerlifting</span>
        </div>
      </div>
    </router-link>
    <div class="flex items-center">
      <slot></slot>
      <nav v-if="!authorized">
        <ul class="list-reset mr-6">
          <li
            @click="login"
            class="cursor-pointer text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-red text-red hover:bg-red hover:text-white uppercase"
          >Login</li>
        </ul>
      </nav>
      <div @click="openMenu" v-if="authorized">
        <svg
          class="cursor-pointer fill-current text-grey-darkest mr-4 md:hidden"
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="34"
          viewBox="0 0 24 24"
        >
          <path d="M4 6H20V8H4zM8 11H20V13H8zM13 16H20V18H13z"></path>
        </svg>
      </div>
      <div v-if="authorized" @click="openDrawer" class="w-8 h-8 rounded-full cursor-pointer">
        <img src="/images/profile-icon.svg" alt="Profile">
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      showLogin: false,
      showDrawer: false,
      showMenu: false,
      fixed: false,
      authorized: this.$store.getters.isLoggedIn,
      isAdmin: this.$store.getters.isAdmin,
      isTrainer: this.$store.getters.isTrainer
    };
  },
  methods: {
    login() {
      this.showLogin = !this.showLogin;
    },
    openDrawer() {
      this.showDrawer = !this.showDrawer;
    },
    openMenu() {
      this.showMenu = !this.showMenu;
    },
    successfulLogin() {
      this.showLogin = !this.showLogin;
      this.$router.push("/u/overview");
    },

    logout() {
      this.$store
        .dispatch("logout")
        .then(() => {
          this.$router.push("/");
          this.openDrawer();
        })
        .catch(err => console.log(err));
    }
  }
};
</script>