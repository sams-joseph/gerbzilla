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
          v-bind:heading="workout.name"
          v-bind:subheading="$moment(workout.date).format('MMMM Do YYYY')"
          v-bind:type="type.name"
          v-bind:action="{ text: 'Duplicate', name:'duplicate-workout', params: { user_id: $route.params.user_id, workout_id: workout.id }}"
          v-bind:deleteBlock="{
            url: `/trainer/users/${$route.params.user_id}/workouts/${$route.params.workout_id}`,
            redirect: { name: 'block', params: { id: $route.params.block_id }}
          }"
        ></block-header>

        <div
          v-if="!showModal"
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

        <div class="container mx-auto px-4 py-20 relative">
          <create-set-form
            @close-set-create="toggleModal"
            @create-set-success="refreshData"
            v-show="showModal"
          ></create-set-form>
          <div v-show="!showModal">
            <h1 class="text-grey-darkest font-normal text-2xl mb-10 px-4">Exercises</h1>
            <ul class="list-reset flex flex-wrap px-4 md:px-0">
              <li v-for="set in sets" :key="set.id" class="w-full mb-4">
                <router-link
                  active-class="none"
                  :to="{ name: 'edit-set', params: { user_id: $route.params.user_id, block_id: $route.params.block_id, workout_id: $route.params.workout_id, set_id: set.set.id }}"
                  class="cursor-pointer"
                >
                  <div
                    class="relative w-full bg-white shadow-lg md:shadow-none md:hover:bg-grey-lighter rounded-lg p-4 flex justify-between"
                  >
                    <div class="w-full flex justify-between items-start relative">
                      <div class="flex-1">
                        <h2
                          v-for="exercise in set.exercises"
                          class="text-lg text-grey-darkest font-bold mb-1"
                          v-bind:key="exercise.id"
                        >{{ exercise.name }}</h2>
                        <h3 class="text-base text-blue font-medium">Sets: {{ set.set.num_sets }}</h3>
                        <p
                          class="text-base text-grey-dark font-base text-sm mt-4"
                        >{{ set.set.notes }}</p>
                      </div>
                    </div>
                  </div>
                </router-link>
              </li>
            </ul>
          </div>
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
      sets: [],
      set_id: 0,
      showModal: false,
      loading: true
    };
  },

  methods: {
    refreshData() {
      const { user_id, block_id, workout_id } = this.$route.params;
      this.loading = true;

      this.$http
        .get(
          `${
            process.env.MIX_BASE_URL
          }/trainer/users/${user_id}/blocks/${block_id}/workouts/${workout_id}/sets`
        )
        .then(res => {
          this.sets = res.data.sets;
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
    },

    togglePopover(ref) {
      if (this.$refs[ref][0].classList.contains("flex")) {
        this.$refs[ref][0].classList.add("hidden");
        this.$refs[ref][0].classList.remove("flex");
      } else {
        this.$refs[ref][0].classList.add("flex");
        this.$refs[ref][0].classList.remove("hidden");
      }
    }
  },

  mounted() {
    const { user_id, block_id, workout_id } = this.$route.params;
    this.loading = true;

    this.$http
      .get(
        `${
          process.env.MIX_BASE_URL
        }/trainer/users/${user_id}/blocks/${block_id}/workouts/${workout_id}/sets`
      )
      .then(res => {
        this.block = res.data.block;
        this.type = res.data.type;
        this.workout = res.data.workout;
        this.sets = res.data.sets;
        this.loading = false;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
