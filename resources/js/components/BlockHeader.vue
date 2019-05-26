<template>
  <div>
    <div
      class="w-full py-20"
      v-bind:class="{
        'bg-red-gradient': type === 'strength',
        'bg-blue-gradient': type === 'hypertrophy',
        'bg-green-gradient': type === 'fitness'
        }"
    >
      <div class="container mx-auto px-0">
        <h1 class="text-white font-bold text-2xl mb-2 px-8">{{ heading }}</h1>
        <h4 class="text-white font-normal text-base opacity-75 px-8 mb-4">{{ subheading }}</h4>
        <span
          class="text-center inline-block w-auto mx-8 py-1 px-4 rounded-full text-xs text-white font-medium uppercase description-pill"
        >{{ type }}</span>
      </div>
    </div>
    <div class="w-full bg-grey-lightest border-b border-grey-lighter">
      <div class="container mx-auto px-8 flex">
        <div class="inline-block flex items-center py-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="fill-current text-grey-dark"
          >
            <path
              d="M12.707 17.293L8.414 13 18 13 18 11 8.414 11 12.707 6.707 11.293 5.293 4.586 12 11.293 18.707z"
            ></path>
          </svg>
          <router-link
            :to="{ name: 'user', params: { id: $route.params.user_id }}"
            active-class="none"
            class="text-grey-dark hover:text-red text-xs font-semibold uppercase mr-4"
          >Back to User</router-link>
        </div>
        <div
          v-if="action"
          class="inline-block flex items-center border-r border-l border-grey-light py-6"
        >
          <router-link
            :to="{ name: action.name, params: action.params}"
            active-class="none"
            class="text-grey-dark hover:text-red text-xs font-semibold uppercase mx-4"
          >{{ action.text }}</router-link>
        </div>
        <div
          v-if="deleteBlock"
          @click="onDelete"
          class="inline-block flex items-center border-r border-grey-light py-6"
        >
          <button class="text-grey-dark hover:text-red text-xs font-semibold uppercase mx-4">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onDelete() {
      this.$http
        .delete(`${process.env.MIX_BASE_URL}${this.deleteBlock.url}`)
        .then(res => {
          this.$store.dispatch("add", {
            type: "success",
            message: res.data.message,
            show: true
          });

          this.$router.push(this.deleteBlock.redirect);
        })
        .catch(err => {
          this.$store.dispatch("add", {
            type: "error",
            message: err,
            show: true
          });
        });
    }
  },

  props: {
    heading: String,
    subheading: String,
    type: String,
    action: Object,
    deleteBlock: Object
  }
};
</script>
