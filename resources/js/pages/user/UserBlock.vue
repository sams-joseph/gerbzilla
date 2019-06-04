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
      <section v-if="!loading">
        <block-header
          v-bind:heading="block.name"
          v-bind:subheading="$moment(block.start_date).format('MMMM Do YYYY')"
          v-bind:type="type.name"
          v-bind:loading="loading"
        ></block-header>
        <div v-for="(week, index) in weeks" :key="index">
          <section v-if="week.length" class="container mx-auto px-4 p-20">
            <h1 class="text-grey-darkest font-normal text-2xl mb-10 px-4">Week {{index + 1}}</h1>
            <ul v-if="week.length" class="list-reset flex flex-wrap px-4 md:px-0">
              <workout-item
                v-for="workout in week"
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
          </section>
        </div>
      </section>
    </transition>
  </div>
</template>

<script>
import WorkoutItem from "../../components/WorkoutItem";

export default {
  components: {
    "workout-item": WorkoutItem
  },

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
    },

    weeks() {
      return [this.firstWeek, this.secondWeek, this.thirdWeek, this.fourthWeek];
    },

    firstWeek() {
      const startDate = this.$moment(this.block.start_date).startOf("week");
      const endDate = this.$moment(this.block.start_date).endOf("week");

      return this.workouts.filter(workout => {
        const workoutDate = this.$moment(workout.date);
        return workoutDate.isBetween(startDate, endDate);
      });
    },

    secondWeek() {
      const startDate = this.$moment(this.block.start_date)
        .add(1, "w")
        .startOf("week");
      const endDate = this.$moment(this.block.start_date)
        .add(1, "w")
        .endOf("week");

      return this.workouts.filter(workout => {
        const workoutDate = this.$moment(workout.date);
        return workoutDate.isBetween(startDate, endDate);
      });
    },

    thirdWeek() {
      const startDate = this.$moment(this.block.start_date)
        .add(2, "w")
        .startOf("week");
      const endDate = this.$moment(this.block.start_date)
        .add(2, "w")
        .endOf("week");

      return this.workouts.filter(workout => {
        const workoutDate = this.$moment(workout.date);
        return workoutDate.isBetween(startDate, endDate);
      });
    },

    fourthWeek() {
      const startDate = this.$moment(this.block.start_date)
        .add(3, "w")
        .startOf("week");
      const endDate = this.$moment(this.block.start_date)
        .add(3, "w")
        .endOf("week");

      return this.workouts.filter(workout => {
        const workoutDate = this.$moment(workout.date);
        return workoutDate.isBetween(startDate, endDate);
      });
    }
  }
};
</script>
