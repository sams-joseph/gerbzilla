<template>
  <div class="w-full h-16 md:h-24 flex justify-center items-end">
    <nav class="hidden md:block">
      <ul class="list-reset mb-px">
        <li class="inline-block mx-8 pb-4 border-b-4 border-transparent">
          <router-link class="text-grey-darkest font-base" to="/u/overview" exact>Overview</router-link>
        </li>
        <li class="inline-block mx-8 pb-4 border-b-4 border-transparent">
          <router-link class="text-grey-darkest" to="/u/workouts">Workouts</router-link>
        </li>
        <li class="inline-block mx-8 pb-4 border-b-4 border-transparent">
          <router-link class="text-grey-darkest" to="/u/goals" exact>Goals</router-link>
        </li>
        <li v-if="isTrainer" class="inline-block mx-8 pb-4 border-b-4 border-transparent">
          <router-link class="text-grey-darkest" to="/t/">Trainer</router-link>
        </li>
        <li v-if="isAdmin" class="inline-block mx-8 pb-4 border-b-4 border-transparent">
          <router-link class="text-grey-darkest" to="/a/admin" exact>Admin</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isAdmin: this.$store.getters.isAdmin,
      isTrainer: this.$store.getters.isTrainer
    };
  }
};
</script>
