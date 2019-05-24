<template>
  <router-link
    class="block w-full lg:w-1/3 md:w-1/2 p-2"
    active-class="none"
    :class="{ 'disabled': workout.block.type.name === 'rest' }"
    :to="{ name: 'user-workout', params: { id: workout.id }}"
  >
    <div
      class="w-full bg-white rounded-lg shadow-lg cursor-pointer"
      v-bind:class="{
        'bg-red-gradient': workout.block.type.name === 'strength',
        'bg-blue-gradient': workout.block.type.name === 'hypertrophy',
        'bg-green-gradient': workout.block.type.name === 'fitness',
        'bg-grey-gradient': workout.block.type.name === 'rest',
        }"
    >
      <div class="flex items-center p-6 rounded-lg">
        <div class="flex flex-col">
          <h3 class="text-white text-lg font-bold mb-2">{{ $moment(workout.date).format("dddd") }}</h3>
          <h4 class="text-white text-base font-normal opacity-75">{{ workout.name }}</h4>
        </div>
      </div>
      <div class="flex pb-6 px-6 justify-between items-center">
        <span
          class="text-center block w-auto py-1 px-2 rounded-full text-xs text-white font-medium description-pill uppercase"
        >{{ workout.block.type.name }}</span>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  data() {
    return {};
  },

  computed: {
    icon() {
      return {
        url: `/images/${this.workout.block.type.name}.svg`,
        alt: this.workout.block.type.name
      };
    }
  },

  props: {
    workout: Object
  }
};
</script>
