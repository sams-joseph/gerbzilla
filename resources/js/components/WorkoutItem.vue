<template>
  <li class="w-full md:w-1/2 lg:w-1/3 mb-4">
    <router-link
      :to="{ name: 'workout', params: { user_id: userId, block_id: blockId, workout_id: workout.id }}"
      active-class="none"
    >
      <div
        class="relative w-full bg-white shadow-lg md:shadow-none md:hover:bg-grey-lighter rounded-lg p-4 flex justify-between items-center"
      >
        <div class="flex items-center">
          <div>
            <h2 class="text-lg text-grey-darkest font-bold mb-1">{{ workout.name }}</h2>
            <h3
              class="text-base text-blue font-normal"
            >{{ $moment(workout.date).format('dddd, MMM Do') }}</h3>
          </div>
        </div>
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
            <li class="inline-block mr-4">
              <router-link
                :to="{ name: 'duplicate-workout', params: { user_id: userId, workout_id: workout.id }}"
                active-class="none"
              >
                <svg
                  class="fill-current text-grey-darker"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M4,22h12c1.104,0,2-0.896,2-2V8c0-1.104-0.896-2-2-2H4C2.896,6,2,6.896,2,8v12C2,21.104,2.896,22,4,22z M6,13h3v-3h2v3h3v2 h-3v3H9v-3H6V13z"
                  ></path>
                  <path d="M20,2H8v2h12v12h2V4C22,2.897,21.103,2,20,2z"></path>
                </svg>
              </router-link>
            </li>
            <li class="inline-block">
              <router-link
                :to="{ name: 'duplicate-workout', params: { user_id: userId, workout_id: workout.id }}"
                active-class="none"
              >
                <svg
                  class="fill-current text-grey-darker"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M5 8v12c0 1.104.896 2 2 2h10c1.104 0 2-.896 2-2V8c0 0-.447 0-1 0H6C5.447 8 5 8 5 8zM14 11h2v8h-2V11zM8 11h2v8H8V11zM16 6L21 6 21 4 16.618 4 15 2 9 2 7.382 4 3 4 3 6 8 6z"
                  ></path>
                </svg>
              </router-link>
            </li>
          </context-menu>
        </div>
      </div>
    </router-link>
  </li>
</template>

<script>
export default {
  data() {
    return {
      showPopover: false
    };
  },

  props: {
    workout: Object,
    userId: Number,
    blockId: Number
  },

  methods: {
    togglePopover() {
      this.showPopover = !this.showPopover;
    },

    closePopover() {
      this.showPopover = false;
    }
  }
};
</script>
