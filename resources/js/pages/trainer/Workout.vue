<template>
  <div>
    <page-header></page-header>
    <navigation></navigation>
    <side-navigation></side-navigation>
    <loader v-if="loading"></loader>
    <transition name="fade">
      <section v-if="!loading">
        <block-header v-bind:block="block" v-bind:type="type"></block-header>

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
          <transition name="fade">
            <create-set-form
              @cancel-set-create="toggleModal"
              @create-set-success="refreshData"
              v-bind:show="showModal"
            ></create-set-form>
          </transition>
          <h1 class="text-grey-darkest font-normal text-2xl mb-2 px-4">{{ workout.name }}</h1>
          <h4
            class="text-grey-dark font-normal text-base px-4 mb-10"
          >{{ $moment(block.start_date).format('MMMM Do YYYY') }}</h4>
          <ul class="list-reset flex flex-wrap px-4 md:px-0">
            <li v-for="set in sets" :key="set.id" class="w-full md:w-1/2 lg:w-1/3 mb-4">
              <div
                class="relative w-full bg-white shadow-lg md:shadow-none md:hover:bg-grey-lighter rounded-lg p-4 flex justify-between"
              >
                <div class="w-full flex justify-between items-start relative">
                  <div class="flex-1">
                    <h2 class="text-lg text-grey-darkest font-bold mb-1">{{ set.exercise.name }}</h2>
                    <h3 class="text-base text-blue font-medium">Sets: {{ set.num_sets }}</h3>
                    <p class="text-base text-grey-dark font-base text-sm mt-4">{{ set.notes }}</p>
                  </div>
                  <div class="items-center flex cursor-pointer">
                    <div class="p-0" @click="togglePopover(`element${set.id}`)">
                      <svg
                        class="fill-current text-grey-darker"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2S13.1 10 12 10zM12 4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2S13.1 4 12 4zM12 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2S13.1 16 12 16z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div
                    class="items-center absolute hidden bg-white shadow-lg rounded-lg p-2 pin-r pin-out-top"
                    :ref="'element' + set.id"
                  >
                    <router-link
                      active-class="none"
                      :to="{ name: 'edit-set', params: { user_id: $route.params.user_id, block_id: $route.params.block_id, workout_id: $route.params.workout_id, set_id: set.id }}"
                      class="cursor-pointer"
                    >
                      <svg
                        class="fill-current text-grey-darker"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          transform="rotate(45.001 16.357 4.656)"
                          d="M14.235 3.039H18.478V6.273H14.235z"
                        ></path>
                        <path d="M4 14L4 17 7 17 15.299 8.713 12.299 5.713zM4 20H20V22H4z"></path>
                      </svg>
                    </router-link>
                  </div>
                </div>
              </div>
            </li>
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
