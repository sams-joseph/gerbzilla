<template>
  <div class="w-full lg:w-1/3 md:w-1/2 p-1 cursor-pointer" @click.prevent="onClick">
    <div
      class="card flex flex-col justify-end relative rounded overflow-hidden"
      :style="{ backgroundImage: backgroundImage }"
      @mouseenter="hover = true"
      @mouseleave="hover = false"
    >
      <div
        class="card-content flex flex-col"
        :style="{ maxHeight: hover && workout.block.type.name !== 'rest' ? '100%' : '75%', background: hover && workout.block.type.name !== 'rest' ? gradient.hover : gradient.default }"
      >
        <div class="flex-1"></div>
        <div class="flex items-center p-6">
          <div class="flex flex-col">
            <h3 class="text-white text-lg font-bold mb-2">{{ $moment(workout.date).format("dddd") }}</h3>
            <h4 class="text-white text-base font-normal opacity-75">{{ workout.name }}</h4>
          </div>
        </div>
        <div class="card-slug flex pb-6 px-6 justify-between items-center">
          <span
            class="text-center block w-auto py-1 px-2 rounded-full text-xs text-white font-medium description-pill uppercase"
          >{{ workout.block.type.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hover: false
    };
  },

  methods: {
    onClick() {
      if (this.workout.block.type.name !== "rest") {
        this.$router.push(this.linkParams);
      }
    }
  },

  computed: {
    icon() {
      return {
        url: `/images/${this.workout.block.type.name}.svg`,
        alt: this.workout.block.type.name
      };
    },

    backgroundImage() {
      return `url(/images/${this.workout.block.type.name}-card.jpg)`;
    },

    gradient() {
      const type = this.workout.block.type.name;
      switch (type) {
        case "strength":
          return {
            default: `linear-gradient(to top, rgba(229, 45, 39, 1), rgba(179, 18, 23, 0))`,
            hover:
              "linear-gradient(to top, rgba(229, 45, 39, 1), rgba(179, 18, 23, 0.5))"
          };
        case "hypertrophy":
          return {
            default:
              "linear-gradient(to top, rgba(68, 129, 235, 1), rgba(4, 190, 254, 0))",
            hover:
              "linear-gradient(to top, rgba(68, 129, 235, 1), rgba(4, 190, 254, 0.5))"
          };
        case "fitness":
          return {
            default:
              "linear-gradient(to top,rgba(43, 170, 96, 1), rgba(129, 204, 104, 0))",
            hover:
              "linear-gradient(to top,rgba(43, 170, 96, 1), rgba(129, 204, 104, 0.5))"
          };
        default:
          return {
            default: `linear-gradient(to top, rgba(134, 143, 150, 1), rgba(89, 97, 100, 0))`,
            hover:
              "linear-gradient(to top, rgba(134, 143, 150, 1), rgba(89, 97, 100, 0.5))"
          };
      }
    },

    linkParams() {
      return { name: "user-workout", params: { id: this.workout.id } };
    }
  },

  props: {
    workout: Object
  }
};
</script>

<style lang="sass" scoped>
.card
  height: 400px
  background-position: center
  background-size: cover

  &-content
    height: 100%
    transition: all 0.25s

  &-slug
    transition: margin 0.25s
</style>
