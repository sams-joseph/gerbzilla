<template>
  <div class="container mx-auto px-8 py-20">
    <div class="w-full max-w-md">
      <h1 class="text-grey-darkest font-normal text-2xl mb-10">Create Exercise</h1>
      <form @submit.prevent="onSubmit" @keydown="form.errors.clear($event.target.name)">
        <div class="mb-6">
          <label class="block text-grey-darker text-sm font-normal mb-4" for="name">Name</label>
          <input
            class="appearance-none border-b w-full py-2 text-grey-darker leading-tight focus:outline-none"
            id="name"
            type="text"
            name="name"
            v-model="form.name"
          >
          <span
            class="text-red text-xs pt-2"
            v-if="form.errors.has('name')"
            v-text="form.errors.get('name')"
          ></span>
        </div>
        <div class="mb-12">
          <label class="block text-grey-darker text-sm font-normal mb-4" for="category">Category</label>
          <div class="relative">
            <select
              class="block appearance-none border-b rounded-none bg-white text-grey-darker w-full py-2 leading-tight focus:outline-none"
              id="category"
              name="category_id"
              v-model="form.category_id"
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
            <span
              class="text-red text-xs pt-2"
              v-if="form.errors.has('category_id')"
              v-text="form.errors.get('category_id')"
            ></span>
          </div>
        </div>

        <button
          class="bg-blue hover:bg-blue-dark text-white font-normal text-sm py-2 px-6 rounded-full focus:outline-none uppercase"
          type="submit"
        >Create Exercise</button>
        <button
          @click="$emit('close-exercise-create')"
          class="text-grey-darker font-normal text-sm py-2 px-6 rounded-full focus:outline-none uppercase"
          type="button"
        >Cancel</button>
      </form>
    </div>
  </div>
</template>

<script>
import Form from "../../classes/Form";

export default {
  data() {
    return {
      categories: [],
      form: new Form({
        category_id: 1,
        name: ""
      })
    };
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
    onSubmit() {
      this.form
        .post(`${process.env.MIX_BASE_URL}/trainer/exercises`)
        .then(res => {
          console.log(res);

          this.$store.dispatch("add", {
            type: "success",
            message: "Added exercise successfully.",
            show: true
          });

          this.$emit("create-exercise-success");
          this.$emit("close-exercise-create");
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
