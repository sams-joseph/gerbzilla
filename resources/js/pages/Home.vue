<template>
  <div>
    <page-header>
      <nav v-if="authorized" class="hidden md:block">
        <ul class="list-reset">
          <li>
            <router-link
              exact-active-class="popover-active-exact"
              active-class="blank"
              class="text-grey-dark font-normal text-sm mb-4 uppercase mr-4"
              to="/u/overview"
              exact
            >Overview</router-link>
            <router-link
              exact-active-class="popover-active-exact"
              active-class="blank"
              class="text-grey-dark font-normal text-sm mb-4 uppercase mr-4"
              to="/u/workouts"
              exact
            >Workouts</router-link>
            <router-link
              exact-active-class="popover-active-exact"
              active-class="blank"
              class="text-grey-dark font-normal text-sm mb-4 uppercase mr-4"
              to="/u/goals"
              exact
            >Goals</router-link>
            <router-link
              v-if="isTrainer"
              exact-active-class="popover-active-exact"
              active-class="blank"
              class="text-grey-dark font-normal text-sm mb-4 uppercase mr-4"
              to="/t/"
              exact
            >Trainer</router-link>
            <router-link
              v-if="isAdmin"
              exact-active-class="popover-active-exact"
              active-class="blank"
              class="text-grey-dark font-normal text-sm mb-4 uppercase mr-4"
              to="/a/admin"
              exact
            >Admin</router-link>
          </li>
        </ul>
      </nav>
    </page-header>
    <div class="h-screen max-h-700 bg-red-translucent w-full relative flex items-center">
      <div class="container mx-auto px-8">
        <div class="w-full max-w-md">
          <h1 class="text-5xl hero-title text-white font-black mb-8">Unleash Your Potential</h1>
          <div
            class="cursor-pointer inline-block text-sm font-semibold px-8 py-3 leading-normal bg-white text-red hover:bg-white uppercase"
          >Get Coaching</div>
        </div>
      </div>
      <svg
        class="fill-current text-white absolute pin-b pin-l w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1400 159.36"
      >
        <path
          class="cls-1"
          d="M1137.84,1068.33c-5-3.24-10.75-8.46-9.77-4.08l1.84,4.18A12,12,0,0,1,1137.84,1068.33Z"
          transform="translate(0 -1040.64)"
        ></path>
        <path
          class="cls-1"
          d="M1340.64,1050.48a31.6,31.6,0,0,0-10.28-1.66C1335.44,1050.84,1339.7,1054.2,1340.64,1050.48Z"
          transform="translate(0 -1040.64)"
        ></path>
        <path
          class="cls-1"
          d="M696,1112.37c-1.89,1-2.64,1.93-2.5,2.89C695.48,1114.33,696.54,1113.39,696,1112.37Z"
          transform="translate(0 -1040.64)"
        ></path>
        <path
          class="cls-1"
          d="M1318.74,1049.92c.75.37,1.47.52,2.22.82a28.85,28.85,0,0,1,9.4-1.92C1326.61,1047.31,1322.4,1046.55,1318.74,1049.92Z"
          transform="translate(0 -1040.64)"
        ></path>
        <path class="cls-1" d="M1424.19,1039.38" transform="translate(0 -1040.64)"></path>
        <path
          class="cls-1"
          d="M196,1159.93c.19.23.39.44.59.64A4.73,4.73,0,0,0,196,1159.93Z"
          transform="translate(0 -1040.64)"
        ></path>
        <path
          class="cls-1"
          d="M1385.43,1042.24c-4.26-.58-10.07,5.94-6.76,2.09l-13.61,4.07-.23-1.1c-13.74.72-27.47,10-43.87,3.44-4.5,1.56-9.13,3.38-17,2.84l-1.87-3.73c-5.78,1.9-18.12-2.21-20.28,2.06-7.36-9.81-28.91.42-39.49-.45l.08,5.09c-7.18.38-13.91,2.46-22.61,5.32l1,4.41c-7.32,4.38-20-1.33-32.07.27.66-1.79,3.78-1.63,6-.8-15.42-8.73-29.86,10.2-43.68,4.08a8.12,8.12,0,0,1-7.94.69,1.63,1.63,0,0,0,.79-.31,9.89,9.89,0,0,0-1.35.07c-1.51-.63-3.09-1.38-4.77-2a15.34,15.34,0,0,0,4.05,2,43.72,43.72,0,0,0-9.93,2.71l-2-4.65c-.3.1-.55.11-.86.22-3.84-1.42-2.74,2.55-.44,6a18.71,18.71,0,0,0-4.69,3.36c-3.72-7.46-9.6,3.53-14.45-4.34-2,3.94-16.22,4.7-19.27,11.66-4.23-.57-8.46-1.1-12,1.61l-2.35-5.93-8.36,9c-5.9-3.19-8.4-5.13-3.33-10.34-12.63,8.46-10.54,3.73-21.18,11.94l.18-4c-4,.53-10,6.42-12.74,3.39-9.75-6.64-44.85,3.16-68.72-1.63,5.59,11.19-11.28-4.19-11.36,4.9-1.61-2.62-5-3.87-1.45-6.61-11.6,3.81-18.21-2.68-25.68,5.67-1.62-2.63,2.15-4.26.79-5.78-.89.69-3.54,2.74-4.92,1.22s1.52-2.47,3.28-3.84c-12.06,1.6-12.49,10.17-12.63,18.19-6.48-3.18-9.5-2.36-13.44,3.26-2.38-2.4-6.19-4.78,1.24-6.42-4.27,0-26.2-1.38-26,5-1.47-1.49-6,.08-7,.92-9.53.51-10.42,0-19.69,1.49l2.69.8c-3,8-7.59,2.44-15,4.07l.14-.81c-17.75-3.92-7.19,3.35-24.79-1.38l1.38,4.69c-.63,10.42-15.64-4.64-25.13.21l3.81,2.39c-5.06,4-16.37-12.55-21.9-13.33-1.27-.78,1.73-1.61,3.31-2.42-14.74-4.73-1.25,6.43-11.67,8.87-2.26-3.19,1.7-8.82-5.46-8.78-3.8-2.4-19.59,12.89-29.89,7.33,2.38,2.4,4.75,4.79,0,7.21-7.43,1.63-21.24-7.93-27.26.91a2.84,2.84,0,0,1-1.55-1.91c-5.54,2.65-18.34,5.26-21.39,10-6.85-16-35,11.37-36.27-3.86l-17.59,2.48.31-1.6c-11.39,0-15,4.07-18.67,8.1-2.71-.8-.94-2.39-.8-3.21-16.79-1.52-18.37-.72-31.5,8.15l-1.9-4.79c-3.49,3.22-24.6-5.51-40.25,1.77a3.42,3.42,0,0,1,1.58-2.38c-17.68,7.5-44.9-9.6-49.89,9l-11.6,5.56c15.68-.06-1.59,8,5.09,10.4-6,1.63-16.32-3.94-8.89-5.57l1.26.79c1.88-9.62-19.64-1.51-19.82-7.92-30.56,3.33-60.87.94-89.57,3.22l4,7-10,.52c-2.78-1.46-4.05-5.37,3.11-5.74-4.14-3.78-11.64,4.58-11.7,6.18-14.24-1.64,4.66-9,.36-8.78l-5.76,1.09,1.39.73c-4.44,3.42-4.56,6.61-13.17,7.06-5.56-1-3.2-4.23-5.36-4.32,0-.51-.78-.69-3.3.1l-12.65.56,5.57,5.28c-5.32,3.36-11.87.81-5.45,6.78-9.47-9.25-47.33.8-52.86-1.83-7.43,4.92-15.15,5.57-24.76,6,2.49,1,4.51,7.3-3.81,7.28,1.72-13.28-14.78-4.83-22.62-12.71,3.73,5-23.5,3.45-13.7,11.29-7-.43-.88-4.95-6.4-7.6-15.89,6.7-36.41,0-56.49,3.67-.16,1.78,3.49,4.14-.61,7.15l-11.51-7.75c-3.92,1.23-2.74,10.45-10.61,5.06,1.17,1.37,2.92,3.45.29,4.26C65.09,1172.79,33,1184.48,0,1183v17H1400V1041.55C1395,1040.23,1389.08,1040.26,1385.43,1042.24ZM315.47,1151l2.1,1.07C313.24,1153.89,314.37,1152.53,315.47,1151Zm774.21-63.93c-.22-1.07-1.32-1.49.5-1.75A7,7,0,0,0,1089.68,1087.09Z"
          transform="translate(0 -1040.64)"
        ></path>
      </svg>
    </div>
    <section class="w-full py-12">
      <h2
        class="text-3xl text-red font-thin text-center max-w-sm mx-auto"
      >Everything you need to succeed.</h2>
    </section>
    <section class="w-full pb-20 pt-6">
      <div class="container flex mx-auto flex-wrap-reverse items-center">
        <div class="w-full md:w-1/2 py-10 pr-8 pl-8 md:pl-8 lg:pl-24">
          <ul class="list-reset">
            <li class="text-base mb-6 flex items-start leading-normal">
              <span class="w-16 h-16 block mr-4">
                <img src="/images/dumbbell.svg" alt="Dumbbell Icon">
              </span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum natus molestias eligendi asperiores porro laborum,
            </li>
            <li class="text-base mb-6 flex items-start leading-normal">
              <span class="w-16 h-16 block mr-4">
                <img src="/images/dumbbell.svg" alt="Dumbbell Icon">
              </span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum natus molestias eligendi asperiores porro laborum,
            </li>
            <li class="text-base mb-6 flex items-start leading-normal">
              <span class="w-16 h-16 block mr-4">
                <img src="/images/dumbbell.svg" alt="Dumbbell Icon">
              </span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum natus molestias eligendi asperiores porro laborum,
            </li>
            <li class="text-base mb-6 flex items-start leading-normal">
              <span class="w-16 h-16 block mr-4">
                <img src="/images/dumbbell.svg" alt="Dumbbell Icon">
              </span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum natus molestias eligendi asperiores porro laborum,
            </li>
          </ul>
        </div>
        <div class="w-full md:w-1/2 phone-image-container">
          <div class="w-full phone-image"></div>
        </div>
      </div>
    </section>
    <section class="bg-grey-gradient w-full py-20">
      <div class="container mx-auto px-8">
        <h2
          class="text-3xl text-white font-thin mb-12 max-w-xs mx-auto text-center"
        >Signup now for a free consultation.</h2>
        <div class="flex w-full max-w-sm mx-auto">
          <input
            class="px-4 flex-1 rounded-l-full focus:outline-none shadow-lg"
            type="text"
            placeholder="Enter your email address"
          >
          <button
            class="bg-red py-4 px-8 text-white rounded-r-full uppercase shadow-lg focus:outline-none"
          >Signup</button>
        </div>
      </div>
    </section>
    <section class="w-full bg-white relative pb-20">
      <div class="py-20 mx-auto px-8">
        <div class="z-10 relative flex justify-center flex-wrap">
          <div class="bg-white rounded-lg shadow-lg p-8 mx-2 w-full sm:w-auto mb-8">
            <div class="bg-grey-dark w-12 h-12 rounded-full mb-8"></div>
            <h3 class="text-xl text-grey-darkest font-light mb-2">Online Programming</h3>
            <h6 class="text-sm text-grey-darker font-thin mb-8">Individualized programming routine</h6>
            <ul class="list-reset mb-12">
              <li
                class="text-sm text-grey-darker font-thin mb-4"
              >Lorem ipsum dolor sit amet consectetur</li>
              <li
                class="text-sm text-grey-darker font-thin mb-4"
              >Lorem ipsum dolor sit amet consectetur</li>
              <li
                class="text-sm text-grey-darker font-thin mb-4"
              >Lorem ipsum dolor sit amet consectetur</li>
              <li
                class="text-sm text-grey-darker font-thin mb-4"
              >Lorem ipsum dolor sit amet consectetur</li>
            </ul>
            <div class="flex items-start justify-center">
              <span class="text-3xl text-blue font-medium">$50.00</span>
              <span class="align-text-top text-blue text-sm leading-normal">/Month</span>
            </div>
          </div>
          <div class="bg-white rounded shadow-lg p-8 mx-2 w-full sm:w-auto mb-8">
            <div class="bg-grey-dark w-12 h-12 rounded-full mb-8"></div>
            <h3 class="text-xl text-grey-darkest font-light mb-2">Individual Training</h3>
            <h6 class="text-sm text-grey-darker font-thin mb-8">One on one training sessions</h6>
            <ul class="list-reset mb-12">
              <li
                class="text-sm text-grey-darker font-thin mb-4"
              >Lorem ipsum dolor sit amet consectetur</li>
              <li
                class="text-sm text-grey-darker font-thin mb-4"
              >Lorem ipsum dolor sit amet consectetur</li>
              <li
                class="text-sm text-grey-darker font-thin mb-4"
              >Lorem ipsum dolor sit amet consectetur</li>
              <li
                class="text-sm text-grey-darker font-thin mb-4"
              >Lorem ipsum dolor sit amet consectetur</li>
            </ul>
            <div class="flex items-start justify-center">
              <span class="text-3xl text-blue font-medium">$100.00</span>
              <span class="align-text-top text-blue text-sm leading-normal">/Month</span>
            </div>
          </div>
        </div>
      </div>

      <svg
        class="fill-current text-grey-lighter absolute pin-b pin-l w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1400 159.36"
      >
        <path
          class="cls-1"
          d="M1137.84,1068.33c-5-3.24-10.75-8.46-9.77-4.08l1.84,4.18A12,12,0,0,1,1137.84,1068.33Z"
          transform="translate(0 -1040.64)"
        ></path>
        <path
          class="cls-1"
          d="M1340.64,1050.48a31.6,31.6,0,0,0-10.28-1.66C1335.44,1050.84,1339.7,1054.2,1340.64,1050.48Z"
          transform="translate(0 -1040.64)"
        ></path>
        <path
          class="cls-1"
          d="M696,1112.37c-1.89,1-2.64,1.93-2.5,2.89C695.48,1114.33,696.54,1113.39,696,1112.37Z"
          transform="translate(0 -1040.64)"
        ></path>
        <path
          class="cls-1"
          d="M1318.74,1049.92c.75.37,1.47.52,2.22.82a28.85,28.85,0,0,1,9.4-1.92C1326.61,1047.31,1322.4,1046.55,1318.74,1049.92Z"
          transform="translate(0 -1040.64)"
        ></path>
        <path class="cls-1" d="M1424.19,1039.38" transform="translate(0 -1040.64)"></path>
        <path
          class="cls-1"
          d="M196,1159.93c.19.23.39.44.59.64A4.73,4.73,0,0,0,196,1159.93Z"
          transform="translate(0 -1040.64)"
        ></path>
        <path
          class="cls-1"
          d="M1385.43,1042.24c-4.26-.58-10.07,5.94-6.76,2.09l-13.61,4.07-.23-1.1c-13.74.72-27.47,10-43.87,3.44-4.5,1.56-9.13,3.38-17,2.84l-1.87-3.73c-5.78,1.9-18.12-2.21-20.28,2.06-7.36-9.81-28.91.42-39.49-.45l.08,5.09c-7.18.38-13.91,2.46-22.61,5.32l1,4.41c-7.32,4.38-20-1.33-32.07.27.66-1.79,3.78-1.63,6-.8-15.42-8.73-29.86,10.2-43.68,4.08a8.12,8.12,0,0,1-7.94.69,1.63,1.63,0,0,0,.79-.31,9.89,9.89,0,0,0-1.35.07c-1.51-.63-3.09-1.38-4.77-2a15.34,15.34,0,0,0,4.05,2,43.72,43.72,0,0,0-9.93,2.71l-2-4.65c-.3.1-.55.11-.86.22-3.84-1.42-2.74,2.55-.44,6a18.71,18.71,0,0,0-4.69,3.36c-3.72-7.46-9.6,3.53-14.45-4.34-2,3.94-16.22,4.7-19.27,11.66-4.23-.57-8.46-1.1-12,1.61l-2.35-5.93-8.36,9c-5.9-3.19-8.4-5.13-3.33-10.34-12.63,8.46-10.54,3.73-21.18,11.94l.18-4c-4,.53-10,6.42-12.74,3.39-9.75-6.64-44.85,3.16-68.72-1.63,5.59,11.19-11.28-4.19-11.36,4.9-1.61-2.62-5-3.87-1.45-6.61-11.6,3.81-18.21-2.68-25.68,5.67-1.62-2.63,2.15-4.26.79-5.78-.89.69-3.54,2.74-4.92,1.22s1.52-2.47,3.28-3.84c-12.06,1.6-12.49,10.17-12.63,18.19-6.48-3.18-9.5-2.36-13.44,3.26-2.38-2.4-6.19-4.78,1.24-6.42-4.27,0-26.2-1.38-26,5-1.47-1.49-6,.08-7,.92-9.53.51-10.42,0-19.69,1.49l2.69.8c-3,8-7.59,2.44-15,4.07l.14-.81c-17.75-3.92-7.19,3.35-24.79-1.38l1.38,4.69c-.63,10.42-15.64-4.64-25.13.21l3.81,2.39c-5.06,4-16.37-12.55-21.9-13.33-1.27-.78,1.73-1.61,3.31-2.42-14.74-4.73-1.25,6.43-11.67,8.87-2.26-3.19,1.7-8.82-5.46-8.78-3.8-2.4-19.59,12.89-29.89,7.33,2.38,2.4,4.75,4.79,0,7.21-7.43,1.63-21.24-7.93-27.26.91a2.84,2.84,0,0,1-1.55-1.91c-5.54,2.65-18.34,5.26-21.39,10-6.85-16-35,11.37-36.27-3.86l-17.59,2.48.31-1.6c-11.39,0-15,4.07-18.67,8.1-2.71-.8-.94-2.39-.8-3.21-16.79-1.52-18.37-.72-31.5,8.15l-1.9-4.79c-3.49,3.22-24.6-5.51-40.25,1.77a3.42,3.42,0,0,1,1.58-2.38c-17.68,7.5-44.9-9.6-49.89,9l-11.6,5.56c15.68-.06-1.59,8,5.09,10.4-6,1.63-16.32-3.94-8.89-5.57l1.26.79c1.88-9.62-19.64-1.51-19.82-7.92-30.56,3.33-60.87.94-89.57,3.22l4,7-10,.52c-2.78-1.46-4.05-5.37,3.11-5.74-4.14-3.78-11.64,4.58-11.7,6.18-14.24-1.64,4.66-9,.36-8.78l-5.76,1.09,1.39.73c-4.44,3.42-4.56,6.61-13.17,7.06-5.56-1-3.2-4.23-5.36-4.32,0-.51-.78-.69-3.3.1l-12.65.56,5.57,5.28c-5.32,3.36-11.87.81-5.45,6.78-9.47-9.25-47.33.8-52.86-1.83-7.43,4.92-15.15,5.57-24.76,6,2.49,1,4.51,7.3-3.81,7.28,1.72-13.28-14.78-4.83-22.62-12.71,3.73,5-23.5,3.45-13.7,11.29-7-.43-.88-4.95-6.4-7.6-15.89,6.7-36.41,0-56.49,3.67-.16,1.78,3.49,4.14-.61,7.15l-11.51-7.75c-3.92,1.23-2.74,10.45-10.61,5.06,1.17,1.37,2.92,3.45.29,4.26C65.09,1172.79,33,1184.48,0,1183v17H1400V1041.55C1395,1040.23,1389.08,1040.26,1385.43,1042.24ZM315.47,1151l2.1,1.07C313.24,1153.89,314.37,1152.53,315.47,1151Zm774.21-63.93c-.22-1.07-1.32-1.49.5-1.75A7,7,0,0,0,1089.68,1087.09Z"
          transform="translate(0 -1040.64)"
        ></path>
      </svg>
    </section>
    <section class="w-full min-h-500 bg-grey-lighter relative"></section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["authorized", "isAdmin", "isTrainer"])
  }
};
</script>
