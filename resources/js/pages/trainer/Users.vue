<template>
  <div>
    <navigation></navigation>
    <div class="w-full flex items-center h-px bg-grey-light"></div>
    <div class="flex">
      <side-navigation></side-navigation>
      <tabs heading="Users">
        <tab name="Create" :selected="true">
          <create-user-form @create-user-success="refreshData"></create-user-form>
        </tab>
        <tab name="View">
          <users v-bind:users="users"></users>
        </tab>
      </tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: []
    };
  },

  methods: {
    refreshData() {
      this.$http
        .get("http://localhost:8000/api/trainer/users")
        .then(res => {
          this.users = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },

  mounted() {
    this.$http
      .get("http://localhost:8000/api/trainer/users")
      .then(res => {
        this.users = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
