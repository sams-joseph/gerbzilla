<template>
  <div>
    <page-header></page-header>
    <navigation></navigation>
    <side-navigation></side-navigation>
    <div class="container mx-auto px-8">
      <tabs>
        <tab name="Profile" :selected="true">
          <construction></construction>
        </tab>
        <tab name="Workouts">
          <construction></construction>
        </tab>
      </tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {}
    };
  },

  mounted() {
    this.$http
      .get(`${process.env.MIX_BASE_URL}/trainer/users/${this.$route.params.id}`)
      .then(res => {
        this.user = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
