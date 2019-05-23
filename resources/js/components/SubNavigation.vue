<template>
  <nav class="w-full py-4 bg-grey-lighter border-b border-t border-grey-light">
    <div class="container mx-auto px-8">
      <ul class="list-reset">
        <li class="inline-block">
          <router-link
            exact-active-class="router-link-active-alt"
            to="/u/workouts/week"
            class="text-grey-darker mr-4"
            exact
          >Week</router-link>
        </li>
        <li class="inline-block">
          <router-link
            exact-active-class="router-link-active-alt"
            to="/u/workouts/blocks"
            class="text-grey-darker mr-4"
            exact
          >Training Blocks</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>