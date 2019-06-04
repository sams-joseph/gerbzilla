<template>
  <li class="w-full md:w-1/2 lg:w-1/3 mb-4">
    <router-link :to="linkparams" active-class="none">
      <div
        class="relative w-full bg-white shadow-lg md:shadow-none md:hover:bg-grey-lighter rounded-lg p-4 flex justify-between items-center"
      >
        <div class="flex items-center">
          <div>
            <h2 class="text-lg text-grey-darkest font-bold mb-1" v-text="heading"></h2>
            <h3 class="text-base text-blue font-normal" v-text="subheading"></h3>
          </div>
        </div>
        <slot></slot>
      </div>
    </router-link>
  </li>
</template>

<script>
export default {
  props: {
    heading: String,
    subheading: String,
    linkparams: Object
  }
};
</script>
