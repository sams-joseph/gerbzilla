<template>
  <div class="w-full h-48 flex justify-center items-end">
    <nav>
      <ul class="list-reset mb-px">
        <li class="inline-block mx-8 pb-4 border-b-4 border-transparent">
          <router-link class="text-grey-darkest font-base" to="/u/overview" exact>Overview</router-link>
        </li>
        <li class="inline-block mx-8 pb-4 border-b-4 border-transparent">
          <router-link class="text-grey-darkest" to="/u/workouts" exact>Workouts</router-link>
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
      isAdmin: false,
      isTrainer: false
    };
  },
  mounted() {
    const role = JSON.parse(localStorage.getItem("role"));

    this.isAdmin = role.name === "admin";
    this.isTrainer = role.name === "admin" || role.name === "trainer";
  }
};
</script>
