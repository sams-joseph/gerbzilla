<template>
  <div
    class="avatar"
    :class="{ 'supersize': supersize }"
    v-bind:style="{ background: backgroundColor, height: `${size}px`, width: `${size}px`, fontSize: `${size / 2.5}px` }"
    v-text="initials"
  ></div>
</template>

<script>
import randomColor from "random-color";

export default {
  props: {
    first: { type: String, default: "" },
    last: { type: String, default: "" },
    supersize: { type: Boolean, default: false },
    size: { type: [Number, String], default: 34 }
  },

  computed: {
    initials() {
      return `${this.first[0]}${this.last[0]}`.toUpperCase();
    },

    backgroundColor() {
      const color = randomColor();
      return color.rgbString();
    }
  }
};
</script>

<style lang="sass" scoped>
.avatar
  width: 34px
  height: 34px
  border-radius: 100%
  display: flex
  justify-content: center
  align-items: center
  color: white

.supersize
  font-size: 5rem
</style>

