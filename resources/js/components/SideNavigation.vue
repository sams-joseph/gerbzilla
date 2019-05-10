<template>
  <aside class="w-48 bg-grey-lighter py-20">
    <ul class="list-reset">
      <li>
        <router-link
          exact-active-class="router-link-active-alt"
          to="/t/users"
          class="py-3 px-8 hover:bg-grey-light block w-full text-grey-darkest font-bold text-sm uppercase"
          exact
        >Users</router-link>
      </li>
      <li>
        <router-link
          exact-active-class="router-link-active-alt"
          to="/t/exercises"
          class="py-3 px-8 hover:bg-grey-light block w-full text-grey-darkest font-bold text-sm uppercase"
          exact
        >Exercises</router-link>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {};
</script>