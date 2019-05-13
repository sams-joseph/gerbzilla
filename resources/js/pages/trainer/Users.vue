<template>
  <div>
    <navigation></navigation>
    <div class="w-full h-px bg-grey-light"></div>
    <div class="flex">
      <side-navigation></side-navigation>
      <tabs icon="/images/user-illustration.svg">
        <tab name="View" :selected="true">
          <user-list heading="Users" v-bind:data="users"></user-list>
        </tab>
        <tab name="Create">
          <create-user-form @create-user-success="refreshData"></create-user-form>
        </tab>
      </tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: {}
    };
  },

  methods: {
    refreshData() {
      this.$http
        .get(`${process.env.MIX_BASE_URL}/trainer/users`)
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
      .get(`${process.env.MIX_BASE_URL}/trainer/users`)
      .then(res => {
        this.users = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
