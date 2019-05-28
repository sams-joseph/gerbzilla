<template>
  <div class="w-full max-w-md px-8">
    <h1 class="text-grey-darkest font-normal text-2xl mb-10">Create Block</h1>
    <form @submit.prevent="onSubmit" @keydown="form.errors.clear()">
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
      <div class="mb-6">
        <label class="block text-grey-darker text-sm font-normal mb-4" for="start_date">Start Date</label>
        <input
          class="appearance-none border-b w-full py-2 text-grey-darker leading-tight focus:outline-none"
          id="date"
          type="date"
          name="start_date"
          v-model="form.start_date"
        >
        <span
          class="text-red text-xs pt-2"
          v-if="form.errors.has('start_date')"
          v-text="form.errors.get('start_date')"
        ></span>
      </div>
      <div class="mb-12">
        <label class="block text-grey-darker text-sm font-normal mb-4" for="type_id">Category</label>
        <div class="relative">
          <select
            class="block appearance-none border-b rounded-none bg-white text-grey-darker w-full py-2 leading-tight focus:outline-none capitalize"
            id="category"
            name="type_id"
            v-model="form.type_id"
          >
            <option v-for="type in types" v-bind:key="type.id" :value="type.id">{{ type.name }}</option>
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
        <span
          class="text-red text-xs pt-2"
          v-if="form.errors.has('type_id')"
          v-text="form.errors.get('type_id')"
        ></span>
      </div>

      <button
        class="bg-blue hover:bg-blue-dark text-white font-normal text-sm py-2 px-6 rounded-full focus:outline-none uppercase"
        type="submit"
      >Create Block</button>
      <button
        @click="$emit('cancel-block-create')"
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
      types: [],
      form: new Form({
        name: "",
        start_date: "",
        type_id: 1
      })
    };
  },

  mounted() {
    this.$http
      .get(`${process.env.MIX_BASE_URL}/trainer/types`)
      .then(res => {
        this.types = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  },

  methods: {
    onSubmit() {
      const userId = this.$route.params.id;
      this.form
        .post(`${process.env.MIX_BASE_URL}/trainer/users/${userId}/blocks`)
        .then(res => {
          this.$store.dispatch("add", {
            type: "success",
            message: "Added block",
            show: true
          });
          this.$emit("create-block-success");
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
