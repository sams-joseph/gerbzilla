<template>
  <div>
    <page-header></page-header>
    <navigation></navigation>
    <sub-navigation></sub-navigation>
    <loader v-if="loading"></loader>
    <div v-if="!loading">
      <div
        class="w-full py-20"
        v-bind:class="{
          'bg-red-gradient': workout.block.type.name === 'strength',
          'bg-blue-gradient': workout.block.type.name === 'hypertrophy',
          'bg-green-gradient': workout.block.type.name === 'fitness'
        }"
      >
        <div class="container mx-auto px-0">
          <h1 class="text-white font-bold text-2xl mb-2 px-8">{{ workout.name }}</h1>
          <h4
            class="text-white font-normal text-base opacity-75 px-8 mb-4"
          >{{ $moment(workout.date).format('dddd MMM Do') }}</h4>
          <span
            class="text-center inline-block w-auto mx-8 py-1 px-4 rounded-full text-xs text-white font-thin uppercase description-pill"
          >{{ workout.block.type.name }}</span>
        </div>
      </div>

      <div class="container mx-auto px-4 py-20 relative">
        <ul class="list-reset flex flex-wrap px-4 md:px-0">
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      workout: {},
      sets: []
    };
  },

  mounted() {
    this.$http
      .get(`${process.env.MIX_BASE_URL}/workouts/${this.$route.params.id}`)
      .then(res => {
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
