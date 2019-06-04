<template>
  <div>
    <navigation></navigation>
    <sub-navigation>
      <li class="inline-block">
        <router-link
          exact-active-class="router-link-active-alt"
          to="/u/workouts/week"
          class="text-grey-darker mr-4"
          exact
        >Week</router-link>
      </li>
      <li class="inline-block">
        <router-link
          exact-active-class="router-link-active-alt"
          to="/u/workouts/blocks"
          class="text-grey-darker mr-4"
          exact
        >Training Blocks</router-link>
      </li>
    </sub-navigation>
    <loader v-if="loading"></loader>
    <transition name="fade">
      <div v-if="!loading && !workouts.length">
        <div class="w-full py-20">
          <div class="container mx-auto px-8 flex flex-col items-center">
            <img class="w-32 h-32 opacity-75" src="/images/empty_weight_icon.svg" alt="Empty">
          </div>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div v-if="!loading && workouts.length">
        <block-header
          v-bind:heading="firstBlock.name"
          v-bind:subheading="$moment(weekStart.start_date).format('MMMM Do YYYY')"
          v-bind:type="typeName"
          v-bind:loading="loading"
        ></block-header>
        <div class="container mx-auto px-4 pb-20">
          <h1 class="text-grey-darkest font-normal text-2xl mb-12 px-4 pt-20">This Week</h1>
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
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
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
        `${process.env.MIX_BASE_URL}/workouts/date/${weekStart.format(
          "YYYY-MM-DD"
        )}/${weekEnd.format("YYYY-MM-DD")}`
      )
      .then(res => {
        this.workouts = res.data.sort((a, b) =>
          a.date > b.date ? 1 : b.date > a.date ? -1 : 0
        );
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
    },
    ...mapGetters(["isActive", "user"])
  },

  methods: {
    isPastDate(date) {
      const today = this.$moment();
      const workoutDate = this.$moment(date);

      return today.isAfter(workoutDate);
    }
  }
};
</script>
