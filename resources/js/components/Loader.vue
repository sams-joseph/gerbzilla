<template>
  <div class="w-full absolute pt-20 bg-white h-screen z-50" :class="{'opacity-50': translucent}">
    <div class="flex flex-col items-center">
      <div>
        <img src="/images/puff.svg" alt="Loading">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    translucent: { default: false }
  }
};
</script>
