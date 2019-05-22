<template>
  <transition name="drop">
    <div
      v-if="$store.getters.getMsg.show"
      class="w-full max-w-xs bg-white rounded-lg shadow-lg p-4 z-50 fixed pin-t pin-center mt-4 flex items-center"
    >
      <img class="mr-4" src="/images/check-circle.svg" alt="Success">
      <span class="text-grey-darkest">{{ $store.getters.getMsg.message }}</span>
    </div>
  </transition>
</template>

<script>
export default {};
</script>
