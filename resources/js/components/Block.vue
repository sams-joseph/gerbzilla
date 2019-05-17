<template>
  <router-link
    class="block w-full lg:w-1/3 md:w-1/2 p-2"
    active-class="none"
    :to="{ name: 'block', params: { user_id: this.$route.params.id, block_id: block.id }}"
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
          <div class="w-18 h-18 bg-white rounded-full"></div>
        </div>
        <div class="flex flex-col">
          <h3 class="text-white text-lg font-bold mb-2">{{ block.name }}</h3>
          <h4 class="text-white text-base font-light opacity-75">{{ block.start_date }}</h4>
        </div>
      </div>
      <div class="flex py-4 px-8">
        <span
          class="text-center block w-full md:w-auto lg:w-full py-1 px-2 rounded-full text-xs text-white font-thin description-pill uppercase"
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

  props: {
    block: Object
  }
};
</script>
