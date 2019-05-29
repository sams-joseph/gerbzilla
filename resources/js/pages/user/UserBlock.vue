<template>
  <div>
    <page-header></page-header>
    <navigation></navigation>
    <sub-navigation></sub-navigation>
    <loader v-if="loading"></loader>
    <transition name="fade">
      <section v-if="!loading">
        <block-header
          v-bind:heading="block.name"
          v-bind:subheading="$moment(block.start_date).format('MMMM Do YYYY')"
          v-bind:type="type.name"
          v-bind:loading="loading"
        ></block-header>
        <div class="container mx-auto px-4 py-20">
          <h1 class="text-grey-darkest font-normal text-2xl mb-10 px-4">Workouts</h1>
          <ul class="list-reset flex flex-wrap px-4 md:px-0">
            <li v-for="workout in workouts" :key="workout.id" class="w-full md:w-1/2 lg:w-1/3 mb-4">
              <router-link
                active-class="none"
                :to="{ name: 'user-workout', params: { id: workout.id }}"
              >
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
                  <div>
                    <div>
                      <svg
                        class="fill-current"
                        :class="{'text-green': isPastDate(workout.date), 'text-grey-dark': !isPastDate(workout.date)}"
                        width="20"
                        height="20"
                        viewBox="0 0 34 34"
                      >
                        <path
                          d="M16.9999 31.1667C9.17588 31.1667 2.83325 24.824 2.83325 17C2.83325 9.17598 9.17588 2.83334 16.9999 2.83334C24.824 2.83334 31.1666 9.17598 31.1666 17C31.1666 24.824 24.824 31.1667 16.9999 31.1667ZM11.3333 14.1667L8.49992 17L15.5833 24.0833L25.4999 14.1667L22.6666 11.3333L15.5833 18.4167L11.3333 14.1667Z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </router-link>
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
      loading: true
    };
  },

  methods: {
    getDay(date) {
      const d = new Date(date);
      return d.getDay();
    },
    isPastDate(date) {
      const today = this.$moment();
      const workoutDate = this.$moment(date);

      return today.isAfter(workoutDate);
    }
  },

  mounted() {
    const { id } = this.$route.params;
    this.loading = true;

    this.$http
      .get(`${process.env.MIX_BASE_URL}/blocks/${id}`)
      .then(res => {
        this.block = res.data;
        this.type = res.data.type;
        this.workouts = res.data.workouts.sort((a, b) =>
          a.date > b.date ? 1 : b.date > a.date ? -1 : 0
        );
        this.loading = false;
      })
      .catch(err => {
        console.log(err);
      });
  },

  computed: {
    userId() {
      return this.$route.params.user_id;
    }
  }
};
</script>
