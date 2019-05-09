<template>
  <header class="w-full py-6 px-6 flex justify-between items-center">
    <transition name="fade">
      <login v-if="showLogin"></login>
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
    <div class="flex items-center">
      <div class="mr-2">
        <img src="/images/logo.png" alt="Gerbzilla Powerlifting">
      </div>
      <div class="flex flex-col">
        <span class="text-lg text-red font-bold uppercase">Gerbzilla</span>
        <span class="text-sm text-grey font-thin uppercase">Powerlifting</span>
      </div>
    </div>
    <div class="flex items-center">
      <nav>
        <ul class="list-reset mr-6">
          <li
            @click="login"
            class="cursor-pointer text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-red text-red hover:bg-red hover:text-white uppercase"
          >Login</li>
        </ul>
      </nav>
      <div class="w-8 h-8 rounded-full">
        <img src="/images/profile-icon.svg" alt="Profile">
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      showLogin: false
    };
  },
  methods: {
    login() {
      this.showLogin = !this.showLogin;
    }
  }
};
</script>