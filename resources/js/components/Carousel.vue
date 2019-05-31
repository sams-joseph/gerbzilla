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
