<template>
  <div class="px-4">
    <h1 class="text-grey-darkest font-normal text-2xl mb-10">Add Exercise</h1>
    <form
      @submit.prevent="onSubmit"
      class="max-w-md"
      @keydown="form.errors.clear($event.target.name)"
    >
      <div class="mb-6">
        <label class="block text-grey-darker text-sm font-normal mb-4" for="sets">Sets</label>
        <input
          class="appearance-none border-b w-full py-2 text-grey-darker leading-tight focus:outline-none"
          id="sets"
          type="text"
          name="num_sets"
          v-model="form.num_sets"
        >
        <span
          class="text-red text-xs pt-2"
          v-if="form.errors.has('num_sets')"
          v-text="form.errors.get('num_sets')"
        ></span>
      </div>
      <div class="mb-6">
        <label class="block text-grey-darker text-sm font-normal mb-4" for="notes">Notes</label>
        <textarea
          class="appearance-none border-b w-full py-2 text-grey-darker leading-tight focus:outline-none"
          id="notes"
          name="notes"
          v-model="form.notes"
        ></textarea>
        <span
          class="text-red text-xs pt-2"
          v-if="form.errors.has('notes')"
          v-text="form.errors.get('notes')"
        ></span>
      </div>
      <div class="mb-12">
        <label class="block text-grey-darker text-sm font-normal mb-4" for="category">Exercise</label>
        <div class="relative">
          <select
            class="block appearance-none border-b rounded-none bg-white text-grey-darker w-full py-2 leading-tight focus:outline-none"
            id="exercise"
            name="exercise_id"
            v-model="form.exercise_id"
            multiple
          >
            <option
              v-for="exercise in exercises"
              v-bind:key="exercise.id"
              :value="exercise.id"
            >{{ exercise.name }}</option>
          </select>
        </div>
        <span
          class="text-red text-xs pt-2"
          v-if="form.errors.has('exercise_id')"
          v-text="form.errors.get('exercise_id')"
        ></span>
      </div>

      <button
        class="bg-blue hover:bg-blue-dark text-white font-normal text-sm py-2 px-6 rounded-full focus:outline-none uppercase"
        type="submit"
      >Create Exercise</button>
      <button
        @click="$emit('close-set-create')"
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
      exercises: [],
      form: new Form({
        exercise_id: [],
        num_sets: "",
        notes: ""
      })
    };
  },

  mounted() {
    this.$http
      .get(`${process.env.MIX_BASE_URL}/trainer/exercises`)
      .then(res => {
        this.loading = false;
        this.exercises = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  },

  methods: {
    onSubmit() {
      const { user_id, block_id, workout_id } = this.$route.params;

      this.form
        .post(
          `${
            process.env.MIX_BASE_URL
          }/trainer/users/${user_id}/blocks/${block_id}/workouts/${workout_id}/sets`
        )
        .then(res => {
          this.$store.dispatch("add", {
            type: "success",
            message: "Added exercise",
            show: true
          });

          this.$emit("create-set-success");
          this.$emit("close-set-create");
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
