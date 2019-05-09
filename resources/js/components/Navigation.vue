<template>
  <div class="w-full h-24 flex justify-center items-end">
    <nav>
      <ul class="list-reset">
        <li class="inline-block mx-8 pb-4 border-b-4 border-transparent">
          <router-link class="text-grey-darkest font-base" to="/u/overview" exact>Overview</router-link>
        </li>
        <li class="inline-block mx-8 pb-4 border-b-4 border-transparent">
          <router-link class="text-grey-darkest" to="/u/workouts" exact>Workouts</router-link>
        </li>
        <li class="inline-block mx-8 pb-4 border-b-4 border-transparent">
          <router-link class="text-grey-darkest" to="/u/goals" exact>Goals</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {};
</script>
