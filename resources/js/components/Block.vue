<template>
  <router-link
    class="block w-full lg:w-1/3 md:w-1/2 p-2"
    active-class="none"
    :to="{ name: name, params: params}"
  >
    <div
      class="w-full bg-white rounded-lg shadow-lg cursor-pointer"
      v-bind:class="{
        'bg-red-gradient': block.type.name === 'strength',
        'bg-blue-gradient': block.type.name === 'hypertrophy',
        'bg-green-gradient': block.type.name === 'fitness'
        }"
    >
      <div class="flex items-center p-6 rounded-lg">
        <div class="mr-4">
          <div class="w-18 h-18 px-4 bg-white rounded-full flex items-center justify-center">
            <img :src="icon.url" :alt="icon.alt">
          </div>
        </div>
        <div class="flex flex-col">
          <h3 class="text-white text-lg font-bold mb-2">{{ block.name }}</h3>
          <h4
            class="text-white text-base font-light opacity-75"
          >{{ $moment(block.start_date).format("MMMM Do 'YY") }}</h4>
        </div>
      </div>
      <div class="flex py-4 px-8 justify-between items-center">
        <span
          class="uppercase text-xs text-white font-semibold opacity-75"
        >{{ block.workouts.length }} Workouts</span>
        <span
          class="text-center block w-auto py-1 px-2 rounded-full text-xs text-white font-thin description-pill uppercase"
        >{{ block.type.name }}</span>
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
        url: `/images/${this.block.type.name}.svg`,
        alt: this.block.type.name
      };
    }
  },

  props: {
    block: Object,
    name: String,
    params: Object
  }
};
</script>
