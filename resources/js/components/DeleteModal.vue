<template>
  <div>
    <div @click.prevent="isVisible = true">
      <slot></slot>
    </div>
    <transition name="fade">
      <div
        v-show="isVisible"
        class="bg-grey-translucent w-full h-screen flex items-center justify-center fixed pin-t pin-l z-50 p-2"
      >
        <div class="modal bg-white rounded shadow-lg p-8 max-w-sm w-full">
          <div class="flex mb-4">
            <img class="w-12 h-12 mr-8" src="/images/warning.svg" alt="Warning">
            <div>
              <h4
                class="mb-2 text-grey-darkest text-lg font-medium"
              >Are you sure you want to delete?</h4>
              <h6 class="mb-8 text-grey-darkest text-sm font-normal">This action cannot be undone.</h6>
            </div>
          </div>
          <div class="flex justify-end">
            <button
              @click.prevent="$emit('accept-delete-modal')"
              class="bg-blue hover:bg-blue-dark text-white font-normal text-sm py-2 px-6 rounded-full focus:outline-none uppercase"
              type="button"
            >Delete</button>
            <button
              @click.prevent="isVisible = false"
              class="text-grey-darker font-normal text-sm py-2 pl-6 pr-2 rounded-full focus:outline-none uppercase"
              type="button"
            >Cancel</button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false
    };
  },

  methods: {}
};
</script>
