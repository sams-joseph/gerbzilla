<template>
  <div
    v-if="show"
    v-scroll-lock="show"
    class="fixed pin-t pin-l pin-r pin-b z-50 flex justify-center items-center px-2 bg-grey-translucent"
  >
    <div class="mx-8 w-full bg-white relative max-w-md p-8 rounded-lg shadow-lg">
      <h1 class="text-grey-darkest font-normal text-2xl mb-10">Create Exercise</h1>
      <transition name="fade">
        <div
          v-if="loading"
          class="absolute pin-t pin-l pin-b w-full bg-white-translucent flex justify-center pt-12"
        >
          <div class="pl-6 flex flex-col items-center">
            <div class="mb-4">
              <img src="/images/puff.svg" alt="Loading">
            </div>
            <h6 class="text-grey-darkest font-bold text-lg">Loading</h6>
          </div>
        </div>
      </transition>
      <transition name="fade">
        <div
          v-if="success"
          class="absolute pin-t pin-l pin-b w-full bg-white-translucent flex justify-center pt-12 z-50"
        >
          <div class="flex flex-col items-center">
            <div class="mb-4 w-24 h-24">
              <img src="/images/success-illustration.svg" alt="Success">
            </div>
            <h6 class="text-grey-darkest font-bold text-lg">Exercise Added</h6>
          </div>
        </div>
      </transition>
      <form @submit="createExercise">
        <div class="mb-6">
          <label class="block text-grey-darker text-sm font-normal mb-4" for="name">Name</label>
          <input
            class="appearance-none border-b w-full py-2 text-grey-darker leading-tight focus:outline-none"
            id="name"
            type="text"
            v-model="name"
          >
        </div>
        <div class="mb-12">
          <label class="block text-grey-darker text-sm font-normal mb-4" for="category">Category</label>
          <div class="relative">
            <select
              class="block appearance-none border-b rounded-none bg-white text-grey-darker w-full py-2 leading-tight focus:outline-none"
              id="category"
              v-model="category"
            >
              <option
                v-for="category in categories"
                v-bind:key="category.id"
                :value="category.id"
              >{{ category.name }}</option>
            </select>
            <div
              class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker"
            >
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        <button
          class="bg-blue hover:bg-blue-dark text-white font-normal text-sm py-2 px-6 rounded-full focus:outline-none uppercase"
          type="submit"
        >Create Exercise</button>
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
      categories: [],
      category: 1,
      name: "",
      loading: true,
      success: false
    };
  },

  props: {
    show: Boolean
  },

  mounted() {
    this.$http
      .get(`${process.env.MIX_BASE_URL}/trainer/categories`)
      .then(res => {
        this.loading = false;
        this.categories = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  },

  methods: {
    closeWindow() {
      this.$emit("cancel-user-create");
    },

    createExercise(e) {
      e.preventDefault();
      this.loading = true;
      const user = JSON.parse(localStorage.getItem("user"));

      this.$http
        .post(`${process.env.MIX_BASE_URL}/trainer/exercises`, {
          name: this.name,
          category_id: this.category
        })
        .then(res => {
          this.name = "";
          this.category = 1;

          console.log(res);

          this.loading = false;
          this.success = true;

          this.$store.dispatch("add", {
            type: "success",
            message: "Added exercise successfully.",
            show: true
          });

          this.$emit("create-exercise-success");
          this.$emit("cancel-user-create");
        })
        .catch(err => {
          this.$store.dispatch("add", {
            type: "error",
            message: err.message,
            show: true
          });
        });
    }
  }
};
</script>
