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

        <div class="container mx-auto px-4 py-20 relative">
          <edit-set-form></edit-set-form>
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
      loading: true
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
