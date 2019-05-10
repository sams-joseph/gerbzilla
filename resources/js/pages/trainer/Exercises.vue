<template>
  <div>
    <navigation></navigation>
    <div class="w-full flex items-center h-px bg-grey-light"></div>
    <div class="flex">
      <side-navigation></side-navigation>
      <tabs heading="Exercises">
        <tab name="Create" :selected="true">Create</tab>
        <tab name="View">View</tab>
      </tabs>
    </div>
  </div>
</template>

<script>
export default {};
</script>
