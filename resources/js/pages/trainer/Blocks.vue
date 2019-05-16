<template>
  <div>
    <page-header></page-header>
    <navigation></navigation>
    <side-navigation></side-navigation>
    <div v-if="loading" class="w-full pt-20">
      <div class="pl-6 flex flex-col items-center">
        <div class="mb-4">
          <img src="/images/puff.svg" alt="Loading">
        </div>
      </div>
    </div>
    <transition name="fade">
      <create-workout-form
        @cancel-workout-create="toggleModal"
        @create-workout-success="refreshData"
        v-bind:show="showModal"
      ></create-workout-form>
    </transition>
    <transition name="fade">
      <section>
        <div
          v-if="!loading"
          class="w-full py-20"
          v-bind:class="{
        'bg-red-gradient': type.name === 'strength',
        'bg-blue-gradient': type.name === 'hypertrophy',
        'bg-green-gradient': type.name === 'fitness'
        }"
        >
          <div class="container mx-auto px-0">
            <h1 class="text-white font-bold text-2xl mb-2 px-8">{{ block.name }}</h1>
            <h4 class="text-white font-normal text-base opacity-75 px-8 mb-4">{{ block.start_date }}</h4>
            <span
              class="text-center inline-block w-auto mx-8 py-1 px-4 rounded-full text-xs text-white font-thin uppercase description-pill"
            >{{ type.name }}</span>
          </div>
          <div
            @click="toggleModal"
            class="w-12 h-12 bg-red shadow-lg rounded-full fixed pin-r pin-b mr-8 mb-8 flex items-center justify-center cursor-pointer"
          >
            <svg
              class="fill-current text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M11 3L11 11 3 11 3 13 11 13 11 21 13 21 13 13 21 13 21 11 13 11 13 3z"></path>
            </svg>
          </div>
        </div>
        <div class="container mx-auto px-4 py-20">
          <h1 class="text-grey-darkest font-normal text-2xl mb-10 px-4">Workouts</h1>
          <ul class="list-reset">
            <li v-for="workout in workouts" :key="workout.id">
              <div
                class="w-full bg-white shadow-lg md:shadow-none md:hover:bg-grey-lighter rounded-lg p-4 flex justify-between"
              >
                <div class="flex items-center">
                  <div
                    class="w-12 h-12 rounded-full border border-red mr-4 flex items-center justify-center"
                  >
                    <span class="text-3xl text-red font-black">{{ getDay(workout.date) }}</span>
                  </div>
                  <div>
                    <h2 class="text-lg text-grey-darkest font-bold mb-1">{{ workout.name }}</h2>
                    <h3 class="text-base text-blue font-medium">{{ workout.date }}</h3>
                  </div>
                </div>
                <div class="flex items-center">
                  <div class="ml-4 bg-grey-lighter p-2 rounded-full">
                    <svg
                      class="fill-current text-grey-darker"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M4,22h12c1.104,0,2-0.896,2-2V8c0-1.104-0.896-2-2-2H4C2.896,6,2,6.896,2,8v12C2,21.104,2.896,22,4,22z M6,13h3v-3h2v3h3v2 h-3v3H9v-3H6V13z"
                      ></path>
                      <path d="M20,2H8v2h12v12h2V4C22,2.897,21.103,2,20,2z"></path>
                    </svg>
                  </div>
                  <div class="ml-4 bg-grey-lighter p-2 rounded-full">
                    <svg
                      class="fill-current text-grey-darker"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        transform="rotate(45.001 16.357 4.656)"
                        d="M14.235 3.039H18.478V6.273H14.235z"
                      ></path>
                      <path d="M4 14L4 17 7 17 15.299 8.713 12.299 5.713zM4 20H20V22H4z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      block: {},
      type: {},
      workouts: [],
      showModal: false,
      loading: true
    };
  },

  methods: {
    refreshData() {
      const { user_id, block_id } = this.$route.params;
      this.loading = true;

      this.$http
        .get(
          `${
            process.env.MIX_BASE_URL
          }/trainer/users/${user_id}/blocks/${block_id}`
        )
        .then(res => {
          this.workouts = res.data.workouts;
          this.loading = false;
        })
        .catch(err => {
          console.log(err);
        });
    },

    toggleModal() {
      this.showModal = !this.showModal;
    },

    getDay(date) {
      const d = new Date(date);
      return d.getDay();
    }
  },

  mounted() {
    const { user_id, block_id } = this.$route.params;
    this.loading = true;

    this.$http
      .get(
        `${
          process.env.MIX_BASE_URL
        }/trainer/users/${user_id}/blocks/${block_id}`
      )
      .then(res => {
        this.block = res.data.block;
        this.type = res.data.type;
        this.workouts = res.data.workouts;
        this.loading = false;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
