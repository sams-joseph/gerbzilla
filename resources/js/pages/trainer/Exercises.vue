<template>
  <div>
    <navigation></navigation>
    <div class="w-full flex items-center h-px bg-grey-light"></div>
    <div class="flex">
      <side-navigation></side-navigation>
      <tabs icon="/images/workouts-illust.svg">
        <tab name="View" :selected="true">
          <exercise-list heading="Exercises" v-bind:data="exercises"></exercise-list>
        </tab>
        <tab name="Create">
          <create-exercise-form @create-exercise-success="refreshData"></create-exercise-form>
        </tab>
      </tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      exercises: []
    };
  },

  methods: {
    refreshData() {
      this.$http
        .get(`${process.env.MIX_BASE_URL}/trainer/exercises`)
        .then(res => {
          this.exercises = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },

  mounted() {
    this.$http
      .get(`${process.env.MIX_BASE_URL}/trainer/exercises`)
      .then(res => {
        this.exercises = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
