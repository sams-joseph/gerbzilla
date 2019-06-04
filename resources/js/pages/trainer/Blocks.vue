<template>
  <div>
    <navigation></navigation>
    <sub-navigation>
      <li class="inline-block">
        <router-link
          exact-active-class="router-link-active-alt"
          to="/t/users"
          class="text-grey-darker mr-4"
          exact
        >Users</router-link>
      </li>
      <li class="inline-block">
        <router-link
          exact-active-class="router-link-active-alt"
          to="/t/exercises"
          class="text-grey-darker mr-4"
          exact
        >Exercises</router-link>
      </li>
    </sub-navigation>
    <loader v-if="loading"></loader>
    <transition name="fade">
      <section v-if="!loading">
        <block-header
          v-bind:heading="block.name"
          v-bind:subheading="$moment(block.start_date).format('MMMM Do YYYY')"
          v-bind:type="type.name"
          v-bind:loading="loading"
          v-bind:action="{ text: 'Duplicate', name:'duplicate-block', params: { user_id: $route.params.user_id, block_id: block.id }}"
          v-bind:deleteBlock="{
            url: `/trainer/users/${$route.params.user_id}/blocks/${$route.params.block_id}`,
            redirect: { name: 'user', params: { id: $route.params.user_id }}
          }"
        ></block-header>
        <div
          @click="toggleModal"
          class="z-10 w-12 h-12 bg-red shadow-lg rounded-full fixed pin-r pin-b mr-8 mb-8 flex items-center justify-center cursor-pointer"
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
        <div v-show="showCreateWorkoutform" class="container mx-auto px-8 py-20">
          <create-workout-form
            @close-workout-create="toggleModal"
            @create-workout-success="refreshData"
          ></create-workout-form>
        </div>
        <div v-show="!showCreateWorkoutform" class="container mx-auto px-4 py-20">
          <h1 class="text-grey-darkest font-normal text-2xl mb-10 px-4">Workouts</h1>
          <ul class="list-reset flex flex-wrap px-4 md:px-0">
            <workout-item
              v-for="workout in workouts"
              v-bind:key="workout.id"
              v-bind:heading="workout.name"
              v-bind:subheading="$moment(workout.date).format('dddd, MMM Do')"
              v-bind:linkparams="{ name: 'workout', params: { user_id: userId, block_id: block.id, workout_id: workout.id }}"
            >
              <div class="items-center flex cursor-pointer">
                <context-menu>
                  <template v-slot:trigger>
                    <svg
                      class="fill-current text-grey-darkest"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2S13.1 10 12 10zM12 4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2S13.1 4 12 4zM12 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2S13.1 16 12 16z"
                      ></path>
                    </svg>
                  </template>
                  <li
                    class="inline-block p-2 text-blue hover:text-blue-dark hover:bg-grey-lighter rounded"
                  >
                    <router-link
                      :to="{ name: 'duplicate-workout', params: { user_id: userId, workout_id: workout.id }}"
                      active-class="none"
                      class="text-blue"
                    >Duplicate</router-link>
                  </li>
                </context-menu>
              </div>
            </workout-item>
          </ul>
        </div>
      </section>
    </transition>
  </div>
</template>

<script>
import WorkoutItem from "../../components/WorkoutItem";

export default {
  components: {
    "workout-item": WorkoutItem
  },

  data() {
    return {
      block: {},
      type: {},
      workouts: [],
      showCreateWorkoutform: false,
      showPopover: false,
      loading: true
    };
  },

  methods: {
    refreshData() {
      const { user_id, block_id } = this.$route.params;
      this.toggleModal();
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
      this.showCreateWorkoutform = !this.showCreateWorkoutform;
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
