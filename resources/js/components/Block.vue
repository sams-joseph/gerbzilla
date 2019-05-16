<template>
  <div class="w-full lg:w-1/3 md:w-1/2 p-2">
    <div class="w-full bg-white rounded-lg shadow-lg cursor-pointer">
      <div
        class="flex items-center p-6 rounded-lg"
        v-bind:class="{
        'bg-red-gradient': block.type.name === 'strength',
        'bg-blue-gradient': block.type.name === 'hypertrophy',
        'bg-green-gradient': block.type.name === 'fitness'
        }"
      >
        <div class="mr-4">
          <div class="w-18 h-18 bg-white rounded-full"></div>
        </div>
        <div class="flex flex-col">
          <h3 class="text-white text-lg font-bold mb-2">{{ block.name }}</h3>
          <h4 class="text-white text-base font-light opacity-75">{{ block.start_date }}</h4>
        </div>
      </div>
      <div class="flex p-6">
        <span
          class="text-center block w-full md:w-auto lg:w-full py-1 px-2 rounded-full text-xs text-grey-darkest font-thin border border-grey bg-grey-light uppercase"
        >{{ block.type.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  props: {
    block: Object
  }
};
</script>
