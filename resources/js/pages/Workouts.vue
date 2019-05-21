<template>
  <div>
    <page-header></page-header>
    <navigation></navigation>
    <side-navigation></side-navigation>
    <loader v-if="loading"></loader>
    <transition name="fade">
      <div v-if="!loading" class="container mx-auto px-0">
        <div class="flex-1">
          <h1 class="text-grey-darkest font-normal text-2xl mb-8 px-8 pt-20">Training Blocks</h1>
          <div class="flex w-full flex-wrap px-6">
            <block v-for="block in blocks" v-bind:key="block.id" v-bind:block="block"></block>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: this.$store.getters.getUser,
      blocks: [],
      isActive: this.$store.getters.isActive,
      loading: true,
      showAddBlockForm: false
    };
  },

  mounted() {
    this.loading = true;
    this.$http
      .get(`${process.env.MIX_BASE_URL}/users/${this.user.id}/blocks`)
      .then(res => {
        this.blocks = res.data.sort((a, b) =>
          a.start_date < b.start_date ? 1 : b.start_date < a.start_date ? -1 : 0
        );
        this.loading = false;
      })
      .catch(err => {
        console.log(err);
      });
  },

  methods: {
    refreshData() {
      this.loading = true;

      this.$http
        .get(`${process.env.MIX_BASE_URL}/users/${this.user.id}/blocks`)
        .then(res => {
          this.blocks = res.data.sort((a, b) =>
            a.start_date < b.start_date
              ? 1
              : b.start_date < a.start_date
              ? -1
              : 0
          );
          this.loading = false;
        })
        .catch(err => {
          console.log(err);
        });
    },

    toggleAddBlockForm() {
      this.showAddBlockForm = !this.showAddBlockForm;
    }
  }
};
</script>
