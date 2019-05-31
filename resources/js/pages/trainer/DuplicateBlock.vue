<template>
  <div>
    <navigation></navigation>
    <side-navigation></side-navigation>
    <loader v-if="loading"></loader>
    <transition name="fade">
      <section v-if="!loading">
        <block-header
          v-bind:heading="block.name"
          v-bind:subheading="$moment(block.start_date).format('MMMM Do YYYY')"
          v-bind:type="type.name"
        ></block-header>
        <div class="container mx-auto px-8 py-20 relative">
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
          <h1 class="text-grey-darkest font-normal text-2xl mb-10">Duplicate Workout</h1>
          <form @submit.prevent="submit" class="max-w-md">
            <div class="mb-6">
              <label class="block text-grey-darker text-sm font-normal mb-4" for="sets">Name</label>
              <input
                class="appearance-none border-b w-full py-2 text-grey-darker leading-tight focus:outline-none"
                id="name"
                type="name"
                v-model="name"
              >
            </div>
            <div class="mb-6">
              <label class="block text-grey-darker text-sm font-normal mb-4" for="sets">Start Date</label>
              <input
                class="appearance-none border-b w-full py-2 text-grey-darker leading-tight focus:outline-none"
                id="start_date"
                type="date"
                v-model="start_date"
              >
            </div>

            <button
              class="bg-blue hover:bg-blue-dark text-white font-normal text-sm py-2 px-6 rounded-full focus:outline-none uppercase mt-12"
              type="submit"
            >Duplicate</button>

            <button
              @click="closeWindow"
              class="text-grey-darker font-normal text-sm py-2 px-6 rounded-full focus:outline-none uppercase"
              type="button"
            >Cancel</button>
          </form>
        </div>
      </section>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      block: {},
      type: {},
      workout: {},
      start_date: "",
      name: "",
      showModal: false,
      loading: true
    };
  },

  methods: {
    submit() {
      const { user_id, block_id } = this.$route.params;

      this.$http
        .post(
          `${
            process.env.MIX_BASE_URL
          }/trainer/users/${user_id}/blocks/duplicate/${block_id}`,
          {
            start_date: this.start_date,
            name: this.name
          }
        )
        .then(res => {
          this.start_date = "";
          this.name = "";
          this.$store.dispatch("add", {
            type: "success",
            message: "Duplicated block.",
            show: true
          });

          this.$router.push({ name: "user", params: { id: user_id } });
        })
        .catch(err => {
          this.$store.dispatch("add", {
            type: "error",
            message: err.message,
            show: true
          });
        });
    },

    closeWindow() {
      this.$router.go(-1);
    }
  },

  mounted() {
    const { user_id, block_id } = this.$route.params;
    this.loading = true;

    this.$http
      .get(
        `${
          process.env.MIX_BASE_URL
        }/trainer/users/${user_id}/blocks/${block_id}`
      )
      .then(res => {
        this.workout = res.data.workout;
        this.block = res.data.block;
        this.type = res.data.type;

        this.start_date = res.data.block.start_date;
        this.name = res.data.block.name;

        this.loading = false;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
