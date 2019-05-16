<template>
  <div>
    <page-header></page-header>
    <navigation></navigation>
    <side-navigation></side-navigation>
    <create-block-form
      v-bind:show="showAddBlockForm"
      @cancel-block-create="toggleAddBlockForm"
      @create-block-success="refreshData"
    ></create-block-form>
    <div v-if="loading" class="w-full pt-20">
      <div class="flex flex-col items-center">
        <div class="mb-4">
          <img src="/images/puff.svg" alt="Loading">
        </div>
      </div>
    </div>
    <transition name="fade">
      <div v-if="!loading" class="container mx-auto px-0">
        <h1
          class="text-grey-darkest font-normal text-2xl mb-4 px-8 pt-20"
        >{{ `${user.first_name} ${user.last_name}` }}</h1>
        <h4
          class="text-white font-normal text-xs font-bold mb-12 uppercase inline-block py-1 px-4 ml-8 bg-red border border-red-dark rounded-full"
          :class="{ 'bg-green': isActive, 'border-green-dark': isActive }"
        >{{ user.is_active === 1 ? 'Active' : 'Inactive' }}</h4>
        <tabs class="flex-1">
          <tab name="Workouts" :selected="true">
            <h1 class="text-grey-darkest font-normal text-2xl mb-8 px-8">
              Training Blocks
              <span
                class="float-right uppercase text-grey-dark text-xs font-semibold py-2 px-4 rounded hover:bg-grey-lighter hover:text-red cursor-pointer"
                @click="toggleAddBlockForm"
              >Add Block</span>
            </h1>
            <div class="flex w-full flex-wrap px-6">
              <block v-for="block in blocks" v-bind:key="block.id" v-bind:block="block"></block>
            </div>
          </tab>
          <tab name="Profile">
            <div class="rounded-full mb-8 md:mr-4 w-full md:w-auto">
              <img class="w-32 h-32 mx-auto block" src="/images/profile-icon.svg" alt="Profile">
            </div>
            <h1
              class="text-grey-darkest font-normal text-2xl mb-4 text-center"
            >{{ `${user.first_name} ${user.last_name}` }}</h1>
            <div class="flex justify-center">
              <h4
                class="text-white font-normal text-xs font-bold mb-12 uppercase inline-block py-1 px-4 bg-red border border-red-dark rounded-full"
                :class="{ 'bg-green': isActive, 'border-green-dark': isActive }"
              >{{ user.is_active === 1 ? 'Active' : 'Inactive' }}</h4>
            </div>
          </tab>
        </tabs>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {},
      blocks: [],
      isActive: false,
      loading: true,
      showAddBlockForm: false
    };
  },

  mounted() {
    this.$http
      .all([
        this.$http.get(
          `${process.env.MIX_BASE_URL}/trainer/users/${this.$route.params.id}`
        ),
        this.$http.get(
          `${process.env.MIX_BASE_URL}/trainer/users/${
            this.$route.params.id
          }/blocks`
        )
      ])
      .then(
        this.$http.spread((user, blocks) => {
          this.user = user.data;
          this.isActive = user.data.is_active === 1 ? true : false;
          this.blocks = blocks.data.sort((a, b) =>
            a.start_date < b.start_date
              ? 1
              : b.start_date < a.start_date
              ? -1
              : 0
          );
          this.loading = false;
        })
      )
      .catch(err => {
        console.log(err);
      });
  },

  methods: {
    refreshData() {
      this.loading = true;

      this.$http
        .get(
          `${process.env.MIX_BASE_URL}/trainer/users/${
            this.$route.params.id
          }/blocks`
        )
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
