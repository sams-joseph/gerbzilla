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
      <section>
        <block-header v-bind:block="block" v-bind:type="type" v-bind:loading="loading"></block-header>

        <div
          v-if="!showModal"
          @click="toggleModal"
          class="z-10 w-12 h-12 bg-red shadow-lg rounded-full fixed pin-r pin-b mr-8 mb-8 flex items-center justify-center cursor-pointer"
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

        <div class="container mx-auto px-4 py-20 relative">
          <transition name="fade">
            <create-set-form
              @cancel-set-create="toggleModal"
              @create-set-success="refreshData"
              v-bind:show="showModal"
            ></create-set-form>
          </transition>
          <h1 class="text-grey-darkest font-normal text-2xl mb-2 px-4">{{ workout.name }}</h1>
          <h4
            class="text-grey-dark font-normal text-base px-4 mb-10"
          >{{ $moment(block.start_date).format('MMMM Do YYYY') }}</h4>
          <ul class="list-reset flex flex-wrap">
            <li v-for="set in sets" :key="set.id" class="w-full md:w-1/2 lg:w-1/3 mb-4">
              <div
                class="relative w-full bg-white shadow-lg md:shadow-none md:hover:bg-grey-lighter rounded-lg p-4 flex justify-between"
              >
                <div class="flex items-center">
                  <div>
                    <h2 class="text-lg text-grey-darkest font-bold mb-1">{{ set.exercise.name }}</h2>
                    <h3 class="text-base text-blue font-medium">Sets: {{ set.num_sets }}</h3>
                    <p class="text-base text-grey-dark font-base text-sm mt-4">{{ set.notes }}</p>
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
      workout: {},
      sets: [],
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
          }/trainer/users/${user_id}/blocks/${block_id}/workouts/${workout_id}/sets`
        )
        .then(res => {
          this.sets = res.data.sets;
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
        }/trainer/users/${user_id}/blocks/${block_id}/workouts/${workout_id}/sets`
      )
      .then(res => {
        this.block = res.data.block;
        this.type = res.data.type;
        this.workout = res.data.workout;
        this.sets = res.data.sets;
        this.loading = false;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
