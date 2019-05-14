<template>
  <div>
    <page-header></page-header>
    <navigation></navigation>
    <section class="w-full bg-grey-lighter border-b border-grey-light py-8 mb-20">
      <div class="container mx-auto px-8 flex justify-between flex-wrap">
        <div
          class="flex flex-column md:flex-row justify-center md:items-center flex-wrap md:flex-no-wrap w-full md:w-auto"
        >
          <div class="rounded-full mb-8 md:mb-0 md:mr-4 w-full md:w-auto">
            <img class="w-32 h-32 mx-auto block" src="/images/profile-icon.svg" alt="Profile">
          </div>
          <div class="flex flex-col">
            <h1
              class="text-grey-darkest text-xl mb-2 text-center md:text-left"
            >{{ `${this.firstName} ${this.lastName}` }}</h1>
            <h3
              v-bind:class="{'text-green': status, 'text-red': !status}"
              class="text-base font-light uppercase mb-4 text-center md:text-left"
            >{{ this.status ? 'Active' : 'Inactive' }}</h3>
            <div class="mx-auto mb-12 md:mb-0 md:mx-0">
              <button
                class="cursor-pointer text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-grey-lighter border border-red text-red hover:bg-red hover:text-white uppercase focus:outline-none"
              >Edit Profile</button>
            </div>
          </div>
        </div>
        <div class="flex justify-center md:justify-start w-full md:w-auto">
          <div class="h-48 w-32 bg-grey-light rounded p-4 text-center ml-2">
            <div class="w-full h-16 mb-6">
              <img src="/images/workouts-illust.svg" alt="Workouts">
            </div>
            <h2 class="text-grey-darkest text-xl font-bold mb-2">100</h2>
            <h3 class="text-grey-darkest text-base font-thin">Workouts Completed</h3>
          </div>

          <div class="h-48 w-32 bg-grey-light rounded p-4 text-center ml-2">
            <div class="w-full h-16 mb-6">
              <img src="/images/goals-illust.svg" alt="Workouts">
            </div>
            <h2 class="text-grey-darkest text-xl font-bold mb-2">3</h2>
            <h3 class="text-grey-darkest text-base font-thin">Goals In Progress</h3>
          </div>
        </div>
      </div>
    </section>
    <div class="container mx-auto">
      <main>
        <h2 class="text-grey-darkest font-normal text-2xl mb-12 px-8">Week at a Glance</h2>
        <section class="px-6">
          <div class="flex flex-wrap justify-between w-full mb-20">
            <div
              class="w-full p-6 bg-red-gradient rounded-lg shadow-lg mx-2 mb-2 md:mb-0 md:flex-1"
            >
              <div class="flex items-center">
                <div class="mr-4">
                  <div class="w-18 h-18 bg-white rounded-full mb-2"></div>
                </div>
                <div class="flex flex-col">
                  <h3 class="text-white text-lg font-bold mb-2">Monday</h3>
                  <h4 class="text-white text-base font-light opacity-75">Chest and Shoulders</h4>
                </div>
              </div>
              <div class="flex">
                <span
                  class="text-center block w-18 py-1 px-2 rounded-full text-xs text-white font-thin description-pill uppercase"
                >Weights</span>
              </div>
            </div>

            <div
              class="w-full p-6 bg-blue-gradient rounded-lg shadow-lg mx-2 mb-2 md:mb-0 md:flex-1"
            >
              <div class="flex items-center">
                <div class="mr-4">
                  <div class="w-18 h-18 bg-white rounded-full mb-2"></div>
                </div>
                <div class="flex flex-col">
                  <h3 class="text-white text-lg font-bold mb-2">Monday</h3>
                  <h4 class="text-white text-base font-light opacity-75">Chest and Shoulders</h4>
                </div>
              </div>
              <div class="flex">
                <span
                  class="text-center block w-18 py-1 px-2 rounded-full text-xs text-white font-thin description-pill uppercase"
                >Weights</span>
              </div>
            </div>

            <div
              class="w-full p-6 bg-green-gradient rounded-lg shadow-lg mx-2 mb-2 md:mb-0 md:flex-1"
            >
              <div class="flex items-center">
                <div class="mr-4">
                  <div class="w-18 h-18 bg-white rounded-full mb-2"></div>
                </div>
                <div class="flex flex-col">
                  <h3 class="text-white text-lg font-bold mb-2">Monday</h3>
                  <h4 class="text-white text-base font-light opacity-75">Chest and Shoulders</h4>
                </div>
              </div>
              <div class="flex">
                <span
                  class="text-center block w-18 py-1 px-2 rounded-full text-xs text-white font-thin description-pill uppercase"
                >Weights</span>
              </div>
            </div>
          </div>
        </section>

        <h2 class="text-grey-darkest font-normal text-2xl mb-12 px-8">Friday May 5</h2>
        <section class="px-4">
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
        </section>
      </main>
      <footer class="h-64"></footer>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      status: false
    };
  },
  created() {
    this.$http
      .get(`${process.env.MIX_BASE_URL}/user`)
      .then(res => {
        this.firstName = res.data.user.first_name;
        this.lastName = res.data.user.last_name;
        this.status = res.data.user.is_active === 1 ? true : false;
      })
      .catch(err => {
        console.log("Error fetching data");
      });
  }
};
</script>
