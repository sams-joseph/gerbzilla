<template>
  <div class="w-full xl:w-1/4 lg:w-1/3 md:w-1/2 p-2">
    <div
      class="card flex flex-col justify-end relative rounded overflow-hidden cursor-pointer"
      :class="{ 'shadow-lg': shadow }"
      @click.prevent="onClick"
      :style="{ background: gradient.default }"
    >
      <div class="flex-1"></div>
      <div class="flex items-center p-6">
        <div class="mr-4">
          <div class="w-18 h-18 px-4 bg-white rounded-full flex items-center justify-center">
            <img :src="icon.url" :alt="icon.alt">
          </div>
        </div>
        <div class="flex flex-col">
          <h3 class="text-white text-lg font-bold mb-2" v-text="date"></h3>
          <h4 class="text-white text-base font-normal opacity-75" v-text="name"></h4>
        </div>
      </div>
      <div class="card-slug flex pb-6 px-6 justify-between items-center">
        <span
          class="text-center block w-auto py-1 px-2 rounded-full text-xs text-white font-medium description-pill uppercase"
          v-text="type"
        ></span>
      </div>
    </div>
  </div>
</template>

<script>
import { gradients } from "../utils";

export default {
  data() {
    return {
      hover: false
    };
  },

  methods: {
    onClick() {
      if (this.type !== "rest") {
        this.$router.push(this.linkparams);
      }
    }
  },

  computed: {
    backgroundImage() {
      return `url(/images/${this.type}-card.jpg)`;
    },

    gradient() {
      return gradients[this.type];
    },

    icon() {
      return {
        url: `/images/${this.type}.svg`,
        alt: this.type
      };
    }
  },

  props: {
    linkparams: Object,
    name: String,
    id: { type: [String, Number] },
    type: String,
    date: String,
    subtext: { type: String, default: "" },
    shadow: { type: Boolean, default: false }
  }
};
</script>

<style lang="sass" scoped>
.card
  background-position: center
  background-size: cover

  &-content
    height: 100%
    transition: all 0.25s

  &-slug
    transition: margin 0.25s
</style>
