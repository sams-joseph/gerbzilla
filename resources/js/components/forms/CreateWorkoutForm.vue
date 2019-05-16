<template>
  <div
    v-if="show"
    v-scroll-lock="show"
    class="fixed pin-t pin-l pin-r pin-b z-50 flex justify-center items-center px-2 bg-grey-translucent"
  >
    <div class="relative max-w-md w-full bg-white p-8 shadow-lg rounded-lg">
      <h1 class="text-grey-darkest font-normal text-2xl mb-10">Create Workout</h1>
      <div
        v-if="loading"
        class="absolute pin-t pin-l pin-b w-full bg-white-translucent flex justify-center items-center"
      >
        <img src="/images/puff.svg" alt="Loading">
      </div>
      <form @submit="createWorkout">
        <div class="mb-6">
          <label class="block text-grey-darker text-sm font-normal mb-4" for="name">Name</label>
          <input
            class="appearance-none border-b w-full py-2 text-grey-darker leading-tight focus:outline-none"
            id="name"
            type="text"
            v-model="name"
          >
        </div>
        <div class="mb-6">
          <label class="block text-grey-darker text-sm font-normal mb-4" for="date">Date</label>
          <input
            class="appearance-none border-b w-full py-2 text-grey-darker leading-tight focus:outline-none"
            id="date"
            type="date"
            v-model="date"
          >
        </div>
        <button
          class="mr-4 bg-blue hover:bg-blue-dark text-white font-normal text-sm py-2 px-6 rounded-full focus:outline-none uppercase"
          type="submit"
        >Create Workout</button>
        <button
          @click="closeWindow"
          class="text-grey-darker font-normal text-sm py-2 px-6 rounded-full focus:outline-none uppercase"
          type="button"
        >Cancel</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      date: "",
      loading: false
    };
  },

  props: {
    show: Boolean
  },

  methods: {
    closeWindow() {
      this.$emit("cancel-workout-create");
    },

    createWorkout(e) {
      e.preventDefault();
      this.loading = true;
      const { user_id, block_id } = this.$route.params;

      this.$http
        .post(
          `${
            process.env.MIX_BASE_URL
          }/trainer/users/${user_id}/blocks/${block_id}/workouts`,
          {
            name: this.name,
            date: this.date
          }
        )
        .then(res => {
          this.name = "";
          this.date = "";

          this.loading = false;

          this.$emit("create-workout-success");
          this.$emit("cancel-workout-create");
        })
        .catch(err => {
          this.$emit("create-workout-error", err);
          this.$emit("cancel-workout-create");
        });
    }
  }
};
</script>
