<template>
  <div v-show="isActive">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false
    };
  },
  created() {
    this.tabs = this.$children;
  },
  mounted() {
    this.isActive = this.selected;
  },
  computed: {
    href() {
      return "#" + this.name.toLowerCase().replace(/ /g, "-");
    }
  },
  props: {
    name: { required: true },
    selected: { default: false }
  }
};
</script>