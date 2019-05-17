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
            <h4
              class="text-white font-normal text-base opacity-75 px-8 mb-4"
            >{{ $moment(block.start_date).format('MMMM Do YYYY') }}</h4>
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
          <h1 class="text-grey-darkest font-normal text-2xl mb-2 px-4">{{ workout.name }}</h1>
          <h4
            class="text-grey-dark font-normal text-base px-4 mb-10"
          >{{ $moment(block.start_date).format('MMMM Do YYYY') }}</h4>
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
      workout: {},
      showModal: false,
      loading: true
    };
  },

  methods: {
    refreshData() {
      const { user_id, block_id, workout_id } = this.$route.params;
      this.loading = true;

      this.$http
        .get(
          `${
            process.env.MIX_BASE_URL
          }/trainer/users/${user_id}/blocks/${block_id}/workouts/${workout_id}`
        )
        .then(res => {
          this.workout = res.data.workout;
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
    const { user_id, block_id, workout_id } = this.$route.params;
    this.loading = true;

    this.$http
      .get(
        `${
          process.env.MIX_BASE_URL
        }/trainer/users/${user_id}/blocks/${block_id}/workouts/${workout_id}`
      )
      .then(res => {
        this.block = res.data.block;
        this.type = res.data.type;
        this.workout = res.data.workout;
        this.loading = false;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
