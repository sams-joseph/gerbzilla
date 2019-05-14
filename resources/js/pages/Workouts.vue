<template>
  <div>
    <page-header></page-header>
    <navigation></navigation>
    <sub-navigation></sub-navigation>
    <div class="container mx-auto flex">
      <aside class="w-64 hidden md:block">
        <h2 class="text-grey-darkest font-normal text-2xl mb-12 px-8">Week 1</h2>
        <ul class="list-reset px-6">
          <li class="py-3 px-2 hover:bg-grey-lighter rounded">
            <router-link class="text-grey-darkest font-normal" to="/" exact>Monday</router-link>
          </li>
          <li class="py-3 px-2 hover:bg-grey-lighter rounded">
            <router-link class="text-grey-darkest font-normal" to="/" exact>Tuesday</router-link>
          </li>
          <li class="py-3 px-2 hover:bg-grey-lighter rounded">
            <router-link class="text-grey-darkest font-normal" to="/" exact>Wednesday</router-link>
          </li>
          <li class="py-3 px-2 hover:bg-grey-lighter rounded">
            <router-link class="text-grey-darkest font-normal" to="/" exact>Thursday</router-link>
          </li>
          <li class="py-3 px-2 hover:bg-grey-lighter rounded">
            <router-link class="text-grey-darkest font-normal" to="/" exact>Friday</router-link>
          </li>
          <li class="py-3 px-2 hover:bg-grey-lighter rounded">
            <router-link class="text-grey-darkest font-normal" to="/" exact>Saturday</router-link>
          </li>
          <li class="py-3 px-2 hover:bg-grey-lighter rounded">
            <router-link class="text-grey-darkest font-normal" to="/" exact>Sunday</router-link>
          </li>
        </ul>
      </aside>
      <main class="flex-1">
        <h2 class="text-grey-darkest font-normal text-2xl mb-12 px-8">Monday</h2>

        <div class="px-4">
          <div class="w-full hover:bg-grey-lighter rounded-lg p-4 flex justify-between">
            <div class="flex items-start">
              <div class="p-6 rounded-full bg-white border border-red mr-4">
                <span class="text-3xl text-red font-black">01</span>
              </div>
              <div class="mt-4">
                <h2 class="text-lg text-grey-darkest font-bold mb-1">Back Squat</h2>
                <h3 class="text-base text-blue font-medium">Sets: 4</h3>
                <h4 class="text-base text-grey-darker font-normal mt-8">Details</h4>
                <p class="text-base text-grey-darker font-normal">1: 10/25 2: 10/25 3: 15/20</p>
              </div>
            </div>
            <div>
              <svg
                class="fill-current text-grey-dark"
                width="34"
                height="34"
                viewBox="0 0 34 34"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.9999 31.1667C9.17588 31.1667 2.83325 24.824 2.83325 17C2.83325 9.17598 9.17588 2.83334 16.9999 2.83334C24.824 2.83334 31.1666 9.17598 31.1666 17C31.1666 24.824 24.824 31.1667 16.9999 31.1667ZM11.3333 14.1667L8.49992 17L15.5833 24.0833L25.4999 14.1667L22.6666 11.3333L15.5833 18.4167L11.3333 14.1667Z"
                ></path>
              </svg>
            </div>
          </div>

          <div class="w-full hover:bg-grey-lighter rounded-lg p-4 flex justify-between">
            <div class="flex items-start">
              <div class="p-6 rounded-full bg-white border border-red mr-4">
                <span class="text-3xl text-red font-black">01</span>
              </div>
              <div class="mt-4">
                <h2 class="text-lg text-grey-darkest font-bold mb-1">Back Squat</h2>
                <h3 class="text-base text-blue font-medium">Sets: 4</h3>
                <h4 class="text-base text-grey-darker font-normal mt-8">Details</h4>
                <p class="text-base text-grey-darker font-normal">1: 10/25 2: 10/25 3: 15/20</p>
              </div>
            </div>
            <div>
              <svg
                class="fill-current text-green"
                width="34"
                height="34"
                viewBox="0 0 34 34"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.9999 31.1667C9.17588 31.1667 2.83325 24.824 2.83325 17C2.83325 9.17598 9.17588 2.83334 16.9999 2.83334C24.824 2.83334 31.1666 9.17598 31.1666 17C31.1666 24.824 24.824 31.1667 16.9999 31.1667ZM11.3333 14.1667L8.49992 17L15.5833 24.0833L25.4999 14.1667L22.6666 11.3333L15.5833 18.4167L11.3333 14.1667Z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </main>
    </div>
    <transition name="fade">
      <div
        class="absolute bg-white shadow-lg p-8 pin-b pin-l ml-8 mr-8 mb-32 rounded-lg md:hidden"
        v-if="showSubMenu"
      >test</div>
    </transition>
    <div
      @click="toggleSubMenu"
      class="cursor-pointer absolute pin-b pin-l w-16 h-16 bg-white shadow-lg rounded-full ml-8 mb-8 flex items-center justify-center md:hidden"
    >
      <svg
        class="fill-current text-grey-darkest"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M4 11H16V13H4zM4 6H20V8H4zM4 18L11 18 11.235 18 11.235 16 11 16 4 16z"></path>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showSubMenu: false
    };
  },
  methods: {
    toggleSubMenu() {
      this.showSubMenu = !this.showSubMenu;
    }
  }
};
</script>
