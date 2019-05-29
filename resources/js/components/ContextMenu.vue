<template>
  <div class="context relative">
    <div @click.prevent="isOpen = ! isOpen">
      <slot name="trigger"></slot>
    </div>

    <transition name="pop-out-quick">
      <ul
        v-show="isOpen"
        class="context-menu flex list-reset absolute bg-white mt-2 py-2 px-2 rounded shadow-lg text-white z-10 pin-r"
      >
        <slot></slot>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    };
  },

  watch: {
    isOpen(isOpen) {
      if (isOpen) {
        document.addEventListener("click", this.closeIfClickedOutside);
      }
    }
  },

  methods: {
    closeIfClickedOutside(event) {
      if (!event.target.closest(".context")) {
        this.isOpen = false;

        document.removeEventListener("click", this.closeIfClickedOutside);
      }
    }
  }
};
</script>

<style>
.pop-out-quick-enter-active,
.pop-out-quick-leave-active {
  transition: all 0.4s;
}

.pop-out-quick-enter,
.pop-out-quick-leave-active {
  opacity: 0;
  transform: translateY(-7px);
}
</style>

