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
            <workout-item
              v-for="workout in workouts"
              v-bind:key="workout.id"
              v-bind:heading="workout.name"
              v-bind:subheading="$moment(workout.date).format('dddd')"
              v-bind:linkparams="{ name: 'user-workout', params: { id: workout.id }}"
            >
              <div class="items-center flex cursor-pointer">
                <div>
                  <h3
                    class="text-base text-blue text-2xl font-medium text-right"
                  >{{ $moment(workout.date).format('DD') }}</h3>
                  <h4
                    class="font-medium text-blue uppercase text-right text-sm"
                  >{{ $moment(workout.date).format('MMM') }}</h4>
                </div>
              </div>
            </workout-item>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import WorkoutItem from "../../components/WorkoutItem";

export default {
  components: {
    "workout-item": WorkoutItem
  },

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