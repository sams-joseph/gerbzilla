<template>
  <div
    v-if="!loading"
    class="w-full py-20"
    v-bind:class="{
        'bg-red-gradient': type.name === 'strength',
        'bg-blue-gradient': type.name === 'hypertrophy',
        'bg-green-gradient': type.name === 'fitness'
        }"
  >
    <div class="container mx-auto px-0">
      <h1 class="text-white font-bold text-2xl mb-2 px-8">{{ block.name }}</h1>
      <h4
        class="text-white font-normal text-base opacity-75 px-8 mb-4"
      >{{ $moment(block.start_date).format('MMMM Do YYYY') }}</h4>
      <span
        class="text-center inline-block w-auto mx-8 py-1 px-4 rounded-full text-xs text-white font-thin uppercase description-pill"
      >{{ type.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    block: Object,
    type: Object,
    loading: Boolean
  }
};
</script>
