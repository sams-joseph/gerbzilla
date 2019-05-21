<template>
  <div>
    <div
      class="w-full py-20"
      v-bind:class="{
        'bg-red-gradient': type.name === 'strength',
        'bg-blue-gradient': type.name === 'hypertrophy',
        'bg-green-gradient': type.name === 'fitness'
        }"
    >
      <div class="container mx-auto px-0">
        <h1 class="text-white font-bold text-2xl mb-2 px-8">{{ block.name }}</h1>
        <h4
          class="text-white font-normal text-base opacity-75 px-8 mb-4"
        >{{ $moment(block.start_date).format('MMMM Do YYYY') }}</h4>
        <span
          class="text-center inline-block w-auto mx-8 py-1 px-4 rounded-full text-xs text-white font-thin uppercase description-pill"
        >{{ type.name }}</span>
      </div>
    </div>
    <div class="w-full bg-grey-lightest border-b border-grey-lighter py-6">
      <div class="container mx-auto px-8">
        <router-link
          :to="{ name: 'user', params: { id: $route.params.user_id }}"
          active-class="none"
          class="text-grey-dark text-sm font-semibold uppercase mr-4 flex items-center hover:text-red"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="fill-current"
          >
            <path
              d="M12.707 17.293L8.414 13 18 13 18 11 8.414 11 12.707 6.707 11.293 5.293 4.586 12 11.293 18.707z"
            ></path>
          </svg>Back to User
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    block: Object,
    type: Object
  }
};
</script>
