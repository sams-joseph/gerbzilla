<template>
  <div>
    <page-header></page-header>
    <navigation></navigation>
    <side-navigation></side-navigation>
    <section>
      <block-header v-bind:block="block" v-bind:type="type"></block-header>

      <div class="container mx-auto px-4 py-20 relative">
        <edit-set-form></edit-set-form>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      block: {},
      type: {}
    };
  },

  methods: {
    getDay(date) {
      const d = new Date(date);
      return d.getDay();
    }
  },

  mounted() {
    const { user_id, block_id, workout_id } = this.$route.params;

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
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
