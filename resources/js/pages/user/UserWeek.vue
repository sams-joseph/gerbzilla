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
            <li v-for="workout in workouts" :key="workout.id" class="workout-item mb-4">
              <router-link
                class="block"
                active-class="none"
                :to="{ name: 'user-workout', params: { id: workout.id }}"
              >
                <div
                  class="w-full bg-white shadow-lg md:shadow-none md:hover:bg-grey-lighter rounded-lg p-4 flex justify-between items-start"
                >
                  <div class="pr-2">
                    <h1
                      class="text-xl font-bold text-grey-darkest mb-2"
                    >{{ $moment(workout.date).format('dddd') }}</h1>
                    <h2 class="text-lg text-grey-dark font-normal">{{ workout.name }}</h2>
                  </div>
                  <div>
                    <h3
                      class="text-base text-blue text-2xl font-medium text-right"
                    >{{ $moment(workout.date).format('DD') }}</h3>
                    <h4
                      class="font-medium text-blue uppercase text-right text-sm"
                    >{{ $moment(workout.date).format('MMM') }}</h4>
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

<style lang="sass" scoped>
.workout-item
  width: 100%
  @media (min-width: 768px)
    width: 50%
  @media (min-width: 1024px)
    width: 33%
</style>