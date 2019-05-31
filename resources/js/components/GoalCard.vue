<template>
  <div class="goal-card h-48 w-32 bg-grey-light rounded p-4 ml-2 text-center">
    <div v-if="!loading">
      <div class="w-full h-18 mb-4 flex justify-center">
        <div class="h-18 w-18 rounded-full bg-white p-3 shadow-lg">
          <img :src="icon" alt="Goals">
        </div>
      </div>
      <h2 class="text-grey-darkest text-xl font-bold mb-2" v-text="count"></h2>
      <h3 class="text-grey-darkest text-base font-medium" v-text="text"></h3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: String,
    count: { type: [String, Number] },
    text: String,
    loading: { type: Boolean, default: false }
  }
};
</script>

<style lang="sass">
.goal-card:first-child
  margin-left: 0
</style>

