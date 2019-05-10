<template>
  <div>
    <navigation></navigation>
    <div class="w-full flex items-center h-1 bg-grey-light"></div>
    <div class="flex">
      <aside class="w-48 bg-grey-lighter py-20">
        <ul class="list-reset">
          <li class="py-3 px-8 hover:bg-grey-light">
            <router-link class="text-grey-darkest font-bold text-sm uppercase" to="/" exact>Users</router-link>
          </li>
          <li class="py-3 px-8 hover:bg-grey-light">
            <router-link
              class="text-grey-darkest font-bold text-sm uppercase"
              to="/"
              exact
            >Exercises</router-link>
          </li>
        </ul>
      </aside>
      <tabs>
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
