<template>
  <div>
    <page-header></page-header>
    <navigation></navigation>
    <sub-navigation></sub-navigation>
    <loader v-if="loading"></loader>
    <transition name="fade">
      <div v-if="!loading && !blocks.length">
        <div class="w-full py-20">
          <div class="container mx-auto px-8 flex flex-col items-center">
            <img class="w-16 h-16 mb-4" src="/images/ban.svg" alt="Warning">
            <h1 class="text-center text-grey font-hairline text-2xl">No blocks to display</h1>
          </div>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div v-if="!loading && blocks.length" class="container mx-auto px-0">
        <div class="flex-1">
          <h1 class="text-grey-darkest font-normal text-2xl mb-8 px-8 pt-20">Training Blocks</h1>
          <div class="flex w-full flex-wrap px-6">
            <block v-for="block in blocks" v-bind:key="block.id" v-bind:block="block"></block>
          </div>
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
      blocks: [],
      loading: true
    };
  },

  mounted() {
    this.loading = true;

    this.$http
      .get(`${process.env.MIX_BASE_URL}/blocks`)
      .then(res => {
        this.blocks = res.data.sort((a, b) =>
          a.start_date < b.start_date ? 1 : b.start_date < a.start_date ? -1 : 0
        );
        this.loading = false;
      })
      .catch(err => {
        console.log(err);
      });
  },

  computed: {
    ...mapGetters(["isActive", "user"])
  }
};
</script>
