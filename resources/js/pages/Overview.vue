<template>
  <div>
    <page-header></page-header>
    <navigation></navigation>
    <loader v-if="loading"></loader>
    <section
      v-if="!loading"
      class="w-full bg-grey-lighter border-b border-t border-grey-light py-8 mb-20"
    >
      <div class="container mx-auto px-8 flex justify-between flex-wrap">
        <div
          class="flex flex-column md:flex-row justify-center md:items-center flex-wrap md:flex-no-wrap w-full md:w-auto"
        >
          <div class="rounded-full mb-8 md:mb-0 md:mr-8 w-full md:w-auto">
            <img class="w-32 h-32 mx-auto block" src="/images/profile-icon.svg" alt="Profile">
          </div>
          <div class="flex flex-col">
            <h1
              class="text-grey-darkest text-xl mb-2 text-center md:text-left"
            >{{ `${this.user.first_name} ${this.user.last_name}` }}</h1>
            <h3
              v-bind:class="{'text-green': isActive, 'text-red': !isActive}"
              class="text-base font-light uppercase mb-4 text-center md:text-left"
            >{{ this.isActive ? 'Active' : 'Inactive' }}</h3>
            <div class="mx-auto mb-12 md:mb-0 md:mx-0">
              <button
                class="cursor-pointer text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-grey-lighter border border-red text-red hover:bg-red hover:text-white uppercase focus:outline-none"
              >Edit Profile</button>
            </div>
          </div>
        </div>
        <div class="flex justify-center md:justify-start w-full md:w-auto">
          <div class="h-48 w-32 bg-grey-light rounded p-4 text-center">
            <div class="w-full h-18 mb-4 flex justify-center">
              <div class="h-18 w-18 rounded-full bg-white p-3 shadow-lg">
                <img src="/images/weight.svg" alt="Workouts">
              </div>
            </div>
            <h2 class="text-grey-darkest text-xl font-bold mb-2">{{ numWorkouts }}</h2>
            <h3 class="text-grey-darkest text-base font-thin">Total Workouts</h3>
          </div>

          <div class="h-48 w-32 bg-grey-light rounded p-4 text-center ml-2">
            <div class="w-full h-18 mb-4 flex justify-center">
              <div class="h-18 w-18 rounded-full bg-white p-4 shadow-lg">
                <img src="/images/award.svg" alt="Workouts">
              </div>
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
          <div class="flex flex-wrap w-full mb-20">
            <workout-card
              v-for="workout in weekAhead"
              v-bind:key="workout.id"
              v-bind:workout="workout"
            ></workout-card>
          </div>
        </section>

        <h2
          class="text-grey-darkest font-normal text-2xl mb-2 px-8"
        >{{ $moment(new Date()).format('dddd MMM Do') }}</h2>
        <h2 class="text-grey-dark font-normal text-base mb-12 px-8">{{ todaysWorkout.name }}</h2>
        <section class="px-4">
          <ul v-if="!!sets.length" class="list-reset flex flex-wrap px-4 md:px-0">
            <li v-for="(set, index) in sets" :key="set.id" class="w-full md:w-1/2 lg:w-1/3 mb-4">
              <div
                class="relative w-full bg-white shadow-lg md:shadow-none md:hover:bg-grey-lighter rounded-lg p-4 flex justify-between"
              >
                <div class="w-full flex justify-between items-start relative">
                  <div class="flex-1">
                    <h2 class="text-lg text-grey-darkest font-bold mb-1">{{ set.exercise.name }}</h2>
                    <h3 class="text-base text-blue font-medium">Sets: {{ set.num_sets }}</h3>
                    <p class="text-base text-grey-dark font-base text-sm mt-4">{{ set.notes }}</p>
                  </div>
                  <div>
                    <span
                      class="bg-grey-dark rounded-full w-6 h-6 flex items-center justify-center text-white text-xs"
                    >{{ index + 1 }}</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div v-if="!sets.length" class="w-full p-10 text-center">
            <div class="w-full">
              <div class="container mx-auto px-8 flex flex-col items-center">
                <img class="w-32 h-32 opacity-75" src="/images/empty_weight_icon.svg" alt="Empty">
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer class="h-64"></footer>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      todaysWorkout: {},
      weeksWorkouts: [],
      allWorkouts: [],
      sets: [],
      loading: true
    };
  },

  mounted() {
    const todaysDate = this.$moment().format("YYYY-MM-DD");
    const startDate = this.$moment()
      .add(1, "d")
      .format("YYYY-MM-DD");
    const endDate = this.$moment()
      .add(3, "d")
      .format("YYYY-MM-DD");

    this.loading = true;

    this.$http
      .all([
        this.$http.get(
          `${process.env.MIX_BASE_URL}/workouts/date/${todaysDate}`
        ),
        this.$http.get(
          `${process.env.MIX_BASE_URL}/workouts/date/${startDate}/${endDate}`
        ),
        this.$http.get(`${process.env.MIX_BASE_URL}/workouts`)
      ])
      .then(
        this.$http.spread((today, week, all) => {
          this.todaysWorkout = today.data.workout;
          this.sets = today.data.sets;
          this.weeksWorkouts = week.data;
          this.allWorkouts = all.data;

          this.loading = false;
        })
      )
      .catch(err => {
        console.log(err);
      });
  },

  computed: {
    numWorkouts() {
      return this.allWorkouts.length;
    },

    weekAhead() {
      const first = this.$moment()
        .add(1, "d")
        .format("YYYY-MM-DD");
      const second = this.$moment()
        .add(2, "d")
        .format("YYYY-MM-DD");
      const third = this.$moment()
        .add(3, "d")
        .format("YYYY-MM-DD");

      const days = [first, second, third];

      const nextWorkouts = [];

      this.weeksWorkouts.forEach(workout => {
        days.splice(days.indexOf(workout.date), 1);
        nextWorkouts.push(workout);
      });

      days.forEach(day => {
        nextWorkouts.push({
          name: "No Workout",
          block: { type: { name: "rest" } },
          date: day
        });
      });

      return nextWorkouts.sort((a, b) =>
        a.date > b.date ? 1 : b.date > a.date ? -1 : 0
      );
    },

    ...mapGetters(["isActive", "user"])
  }
};
</script>
