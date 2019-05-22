<template>
  <div>
    <page-header></page-header>
    <navigation></navigation>
    <sub-navigation></sub-navigation>
    <loader v-if="loading"></loader>
    <transition name="fade">
      <div v-if="!loading && !workouts.length">
        <div class="w-full py-20">
          <div class="container mx-auto px-8 flex flex-col items-center">
            <img class="w-16 h-16 mb-4" src="/images/ban.svg" alt="Warning">
            <h1 class="text-center text-grey font-hairline text-2xl">No workouts this week</h1>
          </div>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div v-if="!loading && workouts.length">
        <div>
          <div
            class="w-full py-20"
            v-bind:class="{
              'bg-red-gradient': typeName === 'strength',
              'bg-blue-gradient': typeName === 'hypertrophy',
              'bg-green-gradient': typeName === 'fitness'
            }"
          >
            <div class="container mx-auto px-0">
              <h1 class="text-white font-bold text-2xl mb-2 px-8">{{ firstBlock.name }}</h1>
              <h4
                class="text-white font-normal text-base opacity-75 px-8 mb-4"
              >{{ $moment(firstBlock.start_date).format('MMMM Do YYYY') }}</h4>
              <span
                class="text-center inline-block w-auto mx-8 py-1 px-4 rounded-full text-xs text-white font-thin uppercase description-pill"
              >{{ typeName }}</span>
            </div>
          </div>
        </div>
        <div class="container mx-auto px-4 pb-20">
          <h1
            class="text-grey-darkest font-normal text-2xl mb-10 px-4 pt-20"
          >Week of {{ this.weekStart.format('MMM Do') }}</h1>
          <ul class="list-reset flex flex-wrap px-4 md:px-0">
            <li v-for="workout in workouts" :key="workout.id" class="w-full md:w-1/2 lg:w-1/3 mb-4">
              <div
                class="relative w-full bg-white shadow-lg md:shadow-none md:hover:bg-grey-lighter rounded-lg p-4 flex justify-between items-start"
              >
                <div class="flex items-center">
                  <div>
                    <h2 class="text-lg text-grey-darkest font-bold mb-1">{{ workout.name }}</h2>
                    <h3
                      class="text-base text-blue font-medium"
                    >{{ $moment(workout.date).format('dddd, MMM Do') }}</h3>
                  </div>
                </div>
                <div class="items-center flex cursor-pointer">
                  <div ref="button">
                    <svg
                      class="fill-current text-grey-darker"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2S13.1 10 12 10zM12 4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2S13.1 4 12 4zM12 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2S13.1 16 12 16z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: this.$store.getters.getUser,
      isActive: this.$store.getters.isActive,
      weekStart: "",
      workouts: [],
      loading: true
    };
  },

  mounted() {
    const today = this.$moment();
    const weekStart = this.$moment(today)
      .startOf("week")
      .add(1, "days");
    const weekEnd = this.$moment(today)
      .endOf("week")
      .add(1, "days");

    this.weekStart = weekStart;
    this.loading = true;
    this.$http
      .get(
        `${process.env.MIX_BASE_URL}/users/${this.user.id}/workouts/date-range`,
        {
          params: {
            start: weekStart.format("YYYY-MM-DD"),
            end: weekEnd.format("YYYY-MM-DD")
          }
        }
      )
      .then(res => {
        this.workouts = res.data;
        this.loading = false;
      });
  },

  computed: {
    typeName() {
      if (this.workouts.length) {
        return this.workouts[0].block.type.name;
      } else {
        return "";
      }
    },

    firstBlock() {
      if (this.workouts.length) {
        return this.workouts[0].block;
      } else {
        return {
          name: "",
          start_date: ""
        };
      }
    }
  },

  methods: {}
};
</script>
