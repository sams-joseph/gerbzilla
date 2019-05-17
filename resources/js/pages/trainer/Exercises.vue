<template>
  <div>
    <page-header></page-header>
    <navigation></navigation>
    <side-navigation></side-navigation>
    <loader v-if="loading"></loader>
    <transition name="fade">
      <exercise-list
        v-if="!loading"
        heading="Exercises"
        v-bind:exercises="exercises"
        v-bind:categories="categories"
      ></exercise-list>
    </transition>
    <transition name="fade">
      <create-exercise-form
        @cancel-user-create="toggleModal"
        @create-exercise-success="refreshData"
        v-bind:show="showModal"
      ></create-exercise-form>
    </transition>
    <div
      @click="toggleModal"
      class="cursor-pointer fixed pin-b pin-r w-12 h-12 bg-red hover:bg-red-dark shadow-lg rounded-full mr-8 mb-8 flex items-center justify-center"
    >
      <svg
        class="fill-current text-white"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M11 3L11 11 3 11 3 13 11 13 11 21 13 21 13 13 21 13 21 11 13 11 13 3z"></path>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      exercises: [],
      categories: [],
      showModal: false,
      loading: true
    };
  },

  methods: {
    refreshData() {
      this.loading = true;

      this.$http
        .get(`${process.env.MIX_BASE_URL}/trainer/exercises`)
        .then(res => {
          this.exercises = res.data;
          this.loading = false;
        })
        .catch(err => {
          console.log(err);
        });
    },

    toggleModal() {
      this.showModal = !this.showModal;
    }
  },

  mounted() {
    this.loading = true;

    this.$http
      .all([
        this.$http.get(`${process.env.MIX_BASE_URL}/trainer/exercises`),
        this.$http.get(`${process.env.MIX_BASE_URL}/trainer/categories`)
      ])
      .then(
        this.$http.spread((exercises, categories) => {
          this.exercises = exercises.data;
          this.categories = categories.data;
          this.loading = false;
        })
      )
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
