<template>
  <div class="container mx-auto mb-20 flex px-8">
    <aside class="w-48 hidden md:block">
      <h1 class="text-grey-darkest font-normal text-2xl mb-10">Categories</h1>
      <ul class="list-reset">
        <li class="text-grey-darkest pb-6" v-for="category in categories" v-bind:key="category.id">
          <input
            class="mr-2"
            type="checkbox"
            :id="category.name"
            :name="category.name"
            :value="category.id"
            v-model="checkedCategories"
          >
          <label :for="category.name">{{ category.name }}</label>
          <span
            class="bg-grey-lighter rounded-full float-right px-2 py-1"
          >{{ getNumExercises(category.id) }}</span>
        </li>
      </ul>
    </aside>
    <div class="flex-1">
      <div class="px-4">
        <h1 class="text-grey-darkest font-normal text-2xl mb-10 px-4">{{ heading }}</h1>
        <ul class="list-reset px-4 md:px-0">
          <li
            class="w-full py-4 md:hover:bg-grey-lighter rounded-lg px-4 flex items-center shadow-lg md:shadow-none mb-4 md:mb-0"
            v-for="exercise in filteredExercises"
            v-bind:key="exercise.id"
          >
            <span class="rounded-full mr-6 h-12 w-12 bg-red-gradient p-2">
              <img :src="getCategoryIcon(exercise)" alt="Icon">
            </span>
            <span class="text-grey-darkest mr-6">{{ `${exercise.name}` }}</span>
            <span class="flex-1"></span>
            <span class="h-10 w-10 rounded-full bg-grey-light flex items-center justify-center">
              <svg
                class="fill-current text-grey-darkest"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z"
                ></path>
                <path
                  d="M11.412,8.586C11.791,8.966,12,9.468,12,10h2c0-1.065-0.416-2.069-1.174-2.828c-1.514-1.512-4.139-1.512-5.652,0 l1.412,1.416C9.346,7.83,10.656,7.832,11.412,8.586z"
                ></path>
              </svg>
            </span>
          </li>
        </ul>
      </div>
    </div>

    <transition name="fade">
      <div
        class="fixed bg-white shadow-lg p-8 pin-b pin-l pin-r ml-8 mr-8 mb-32 rounded-lg md:hidden"
        v-if="showFilterMenu"
        v-closable="{
          exclude: ['button'],
          handler: 'toggleFilterMenu'
        }"
      >
        <h1 class="text-grey-darkest font-normal text-2xl mb-10">Categories</h1>
        <ul class="list-reset">
          <li
            class="text-grey-darkest pb-6"
            v-for="category in categories"
            v-bind:key="category.id"
          >
            <input
              class="mr-2"
              type="checkbox"
              :id="category.name"
              :name="category.name"
              :value="category.id"
              v-model="checkedCategories"
            >
            {{ category.name }}
            <span
              class="bg-grey-lighter rounded-full float-right px-2 py-1"
            >{{ getNumExercises(category.id) }}</span>
          </li>
        </ul>
      </div>
    </transition>
    <div
      ref="button"
      @click="toggleFilterMenu"
      class="cursor-pointer fixed pin-b pin-l w-12 h-12 bg-white shadow-lg rounded-full ml-8 mb-8 flex items-center justify-center md:hidden"
    >
      <svg
        class="fill-current text-grey-darkest"
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
      >
        <path d="M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z"></path>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkedCategories: [],
      showFilterMenu: false
    };
  },

  methods: {
    toggleFilterMenu() {
      this.showFilterMenu = !this.showFilterMenu;
    },

    getCategoryIcon(exercise) {
      if (exercise.category_id === 1) {
        return "/images/dumbbell-white.svg";
      }
    },

    getNumExercises(id) {
      const exerc = this.exercises.filter(exercise => {
        return exercise.category_id === id;
      });

      return exerc.length;
    }
  },

  computed: {
    filteredExercises() {
      if (this.checkedCategories.length) {
        return this.exercises.filter(exercise => {
          for (const category of this.checkedCategories) {
            if (exercise.category_id === category) {
              return true;
            }
          }
          return false;
        });
      } else {
        return this.exercises;
      }
    }
  },

  props: {
    exercises: Array,
    heading: String,
    categories: Array
  }
};
</script>