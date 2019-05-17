<template>
  <div class="z-50 absolute bg-white p-8 py-20 pin-l pin-t pin-r">
    <div
      @click="closeWindow"
      class="w-8 h-8 p-2 flex absolute pin-r pin-t border border-grey-dark justify-center items-center rounded-full mr-4 mt-4 cursor-pointer"
    >
      <svg
        class="fill-current text-grey-dark"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          d="M19.293 3.293L12 10.586 4.707 3.293 3.293 4.707 10.586 12 3.293 19.293 4.707 20.707 12 13.414 19.293 20.707 20.707 19.293 13.414 12 20.707 4.707z"
        ></path>
      </svg>
    </div>
    <h1 class="text-grey-darkest font-normal text-2xl mb-10">Edit Exercise</h1>
    <form @submit="createExercise" class="max-w-md">
      <div class="mb-6">
        <label class="block text-grey-darker text-sm font-normal mb-4" for="sets">Sets</label>
        <input
          class="appearance-none border-b w-full py-2 text-grey-darker leading-tight focus:outline-none"
          id="sets"
          type="text"
          v-model="sets"
        >
      </div>
      <div class="mb-6">
        <label class="block text-grey-darker text-sm font-normal mb-4" for="notes">Notes</label>
        <textarea
          class="appearance-none border-b w-full py-2 text-grey-darker leading-tight focus:outline-none"
          id="notes"
          v-model="notes"
        ></textarea>
      </div>
      <div class="mb-12">
        <label class="block text-grey-darker text-sm font-normal mb-4" for="category">Exercise</label>
        <div class="relative">
          <select
            class="block appearance-none border-b rounded-none bg-white text-grey-darker w-full py-2 leading-tight focus:outline-none"
            id="exercise"
            v-model="exercise"
          >
            <option
              v-for="exercise in exercises"
              v-bind:key="exercise.id"
              :value="exercise.id"
            >{{ exercise.name }}</option>
          </select>
          <div
            class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker"
          >
            <svg
              class="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
            </svg>
          </div>
        </div>
      </div>

      <button
        class="bg-blue hover:bg-blue-dark text-white font-normal text-sm py-2 px-6 rounded-full focus:outline-none uppercase"
        type="submit"
      >Save Changes</button>
      <button
        @click="closeWindow"
        class="text-grey-darker font-normal text-sm py-2 px-6 rounded-full focus:outline-none uppercase"
        type="button"
      >Cancel</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      exercises: [],
      exercise: "",
      sets: "",
      notes: ""
    };
  },

  mounted() {
    const { user_id, block_id, workout_id, set_id } = this.$route.params;

    this.$http
      .all([
        this.$http.get(
          `${
            process.env.MIX_BASE_URL
          }/trainer/users/${user_id}/blocks/${block_id}/workouts/${workout_id}/sets/${set_id}`
        ),
        this.$http.get(`${process.env.MIX_BASE_URL}/trainer/exercises`)
      ])
      .then(
        this.$http.spread((set, exercises) => {
          this.exercises = exercises.data;
          this.exercise = set.data.set.exercise_id;
          this.sets = set.data.set.num_sets;
          this.notes = set.data.set.notes;
        })
      )
      .catch(err => {
        console.log(err);
      });
  },

  props: {
    show: Boolean,
    editData: Object
  },

  methods: {
    closeWindow() {
      this.$router.go(-1);
    },

    createExercise(e) {
      e.preventDefault();
      this.loading = true;
      const user = JSON.parse(localStorage.getItem("user"));
      const { user_id, block_id, workout_id, set_id } = this.$route.params;

      this.$http
        .put(
          `${
            process.env.MIX_BASE_URL
          }/trainer/users/${user_id}/blocks/${block_id}/workouts/${workout_id}/sets/${set_id}`,
          {
            num_sets: this.sets,
            notes: this.notes,
            exercise_id: this.exercise
          }
        )
        .then(res => {
          this.$router.go(-1);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
