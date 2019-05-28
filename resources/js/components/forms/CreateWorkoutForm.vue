<template>
  <div class="max-w-md w-full bg-white">
    <h1 class="text-grey-darkest font-normal text-2xl mb-10">Create Workout</h1>
    <form @submit.prevent="onSubmit" @keydown="form.errors.clear()">
      <div class="mb-6">
        <label class="block text-grey-darker text-sm font-normal mb-4" for="name">Name</label>
        <input
          class="appearance-none border-b w-full py-2 text-grey-darker leading-tight focus:outline-none"
          id="name"
          name="name"
          type="text"
          v-model="form.name"
        >
        <span
          class="text-red text-xs pt-2"
          v-if="form.errors.has('name')"
          v-text="form.errors.get('name')"
        ></span>
      </div>
      <div class="mb-6">
        <label class="block text-grey-darker text-sm font-normal mb-4" for="date">Date</label>
        <input
          class="appearance-none border-b w-full py-2 text-grey-darker leading-tight focus:outline-none"
          id="date"
          name="date"
          type="date"
          v-model="form.date"
        >
        <span
          class="text-red text-xs pt-2"
          v-if="form.errors.has('date')"
          v-text="form.errors.get('date')"
        ></span>
      </div>
      <button
        class="mr-4 bg-blue hover:bg-blue-dark text-white font-normal text-sm py-2 px-6 rounded-full focus:outline-none uppercase"
        type="submit"
      >Create Workout</button>
      <button
        @click="$emit('close-workout-create')"
        class="text-grey-darker font-normal text-sm py-2 px-6 rounded-full focus:outline-none uppercase"
        type="button"
      >Cancel</button>
    </form>
  </div>
</template>

<script>
import Form from "../../classes/Form";

export default {
  data() {
    return {
      form: new Form({
        name: "",
        date: ""
      })
    };
  },

  methods: {
    onSubmit() {
      const { user_id, block_id } = this.$route.params;

      this.form
        .post(
          `${
            process.env.MIX_BASE_URL
          }/trainer/users/${user_id}/blocks/${block_id}/workouts`
        )
        .then(res => {
          this.$store.dispatch("add", {
            type: "success",
            message: "Added workout",
            show: true
          });

          this.$emit("create-workout-success");
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
