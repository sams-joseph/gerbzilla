<template>
  <li class="w-full mb-4">
    <router-link active-class="none" :to="linkparams" class="cursor-pointer">
      <div
        class="relative w-full bg-white shadow-lg md:shadow-none md:hover:bg-grey-lighter rounded-lg p-4 flex justify-between"
      >
        <div class="w-full flex justify-between items-start relative">
          <div class="flex-1">
            <h2
              v-for="exercise in set.exercises"
              class="text-lg text-grey-darkest font-bold mb-1"
              v-bind:key="exercise.id"
            >{{ exercise.name }}</h2>
            <h3 class="text-base text-blue font-medium">Sets: {{ set.set.num_sets }}</h3>
            <p class="text-base text-grey-dark font-base text-sm mt-4">{{ set.set.notes }}</p>
          </div>
        </div>
      </div>
    </router-link>
  </li>
</template>

<script>
export default {
  props: {
    set: Object,
    linkparams: Object
  }
};
</script>
