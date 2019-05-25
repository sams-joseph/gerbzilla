<template>
  <div>
    <page-header></page-header>
    <navigation></navigation>
    <side-navigation></side-navigation>
    <loader v-if="loading"></loader>
    <transition name="fade">
      <create-workout-form
        @cancel-workout-create="toggleModal"
        @create-workout-success="refreshData"
        v-bind:show="showModal"
      ></create-workout-form>
    </transition>
    <transition name="fade">
      <section v-if="!loading">
        <block-header
          v-bind:heading="block.name"
          v-bind:subheading="$moment(block.start_date).format('MMMM Do YYYY')"
          v-bind:type="type.name"
          v-bind:loading="loading"
          v-bind:action="{ text: 'Duplicate', name:'duplicate-block', params: { user_id: $route.params.user_id, block_id: block.id }}"
        ></block-header>
        <div
          @click="toggleModal"
          class="z-50 w-12 h-12 bg-red shadow-lg rounded-full fixed pin-r pin-b mr-8 mb-8 flex items-center justify-center cursor-pointer"
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
        <div class="container mx-auto px-4 py-20">
          <h1 class="text-grey-darkest font-normal text-2xl mb-10 px-4">Workouts</h1>
          <ul class="list-reset flex flex-wrap px-4 md:px-0">
            <workout-item
              v-for="workout in workouts"
              v-bind:workout="workout"
              v-bind:key="workout.id"
              v-bind:userId="userId"
              v-bind:blockId="block.id"
            ></workout-item>
          </ul>
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
      workouts: [],
      showModal: false,
      showPopover: false,
      loading: true
    };
  },

  methods: {
    refreshData() {
      const { user_id, block_id } = this.$route.params;
      this.loading = true;

      this.$http
        .get(
          `${
            process.env.MIX_BASE_URL
          }/trainer/users/${user_id}/blocks/${block_id}`
        )
        .then(res => {
          this.workouts = res.data.workouts;
          this.loading = false;
        })
        .catch(err => {
          console.log(err);
        });
    },

    toggleModal() {
      this.showModal = !this.showModal;
    },

    getDay(date) {
      const d = new Date(date);
      return d.getDay();
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
        this.block = res.data.block;
        this.type = res.data.type;
        this.workouts = res.data.workouts.sort((a, b) =>
          a.date > b.date ? 1 : b.date > a.date ? -1 : 0
        );
        this.loading = false;
      })
      .catch(err => {
        console.log(err);
      });
  },

  computed: {
    userId() {
      return parseInt(this.$route.params.user_id);
    }
  }
};
</script>
