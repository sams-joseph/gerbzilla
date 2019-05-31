<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import Flickity from "flickity";
import "flickity/dist/flickity.min.css";

export default {
  mounted() {
    new Flickity(this.$el, {
      wrapAround: false,
      autoplay: false,
      cellAlign: "left",
      contain: true,
      draggable: false,
      pageDots: false
    });
  }
};
</script>

<style lang="sass">
.flickity-button
  background: rgba(0, 0, 0, 0.4)

  &:hover
    background: rgba(0, 0, 0, 0.6)

.flickity-prev-next-button
  width: 30px
  height: 60px

.flickity-button-icon
  fill: white

.flickity-prev-next-button.previous
  left: 5px
  border-top-left-radius: 0
  border-top-right-radius: 100%
  border-bottom-left-radius: 0
  border-bottom-right-radius: 100%

.flickity-prev-next-button.next
  right: 5px
  border-top-left-radius: 100%
  border-top-right-radius: 0
  border-bottom-left-radius: 100%
  border-bottom-right-radius: 0
</style>
