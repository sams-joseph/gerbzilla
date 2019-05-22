<template>
  <transition name="drop">
    <div
      v-if="$store.getters.getMsg.show"
      class="w-full max-w-xs bg-white rounded-lg shadow-lg px-8 py-4 z-50 fixed pin-t pin-center mt-4"
    >{{ $store.getters.getMsg.message }}</div>
  </transition>
</template>

<script>
export default {
  mounted() {
    this.$store
      .dispatch("add", {
        type: "success",
        message: "This is the message.",
        show: true
      })
      .then(() => {
        setTimeout(() => {
          this.$store.dispatch("remove");
        }, 3000);
      })
      .catch(err => console.log(err));
  }
};
</script>
