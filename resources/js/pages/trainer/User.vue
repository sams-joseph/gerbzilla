<template>
  <div>
    <page-header></page-header>
    <navigation></navigation>
    <side-navigation></side-navigation>
    <div v-if="loading" class="w-full">
      <div class="flex flex-col items-center">
        <div class="mb-4">
          <img src="/images/puff.svg" alt="Loading">
        </div>
      </div>
    </div>
    <transition name="fade">
      <div v-if="!loading" class="container mx-auto px-8">
        <h1
          class="text-grey-darkest font-normal text-2xl mb-4"
        >{{ `${user.first_name} ${user.last_name}` }}</h1>
        <h4
          class="text-white font-normal text-xs font-bold mb-12 uppercase inline-block py-1 px-4 bg-red border border-red-dark rounded-full"
          :class="{ 'bg-green': isActive, 'border-green-dark': isActive }"
        >{{ user.is_active === 1 ? 'Active' : 'Inactive' }}</h4>
        <tabs class="flex-1">
          <tab name="Workouts" :selected="true">
            <h1 class="text-grey-darkest font-normal text-2xl mb-4">Training Blocks</h1>
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
      isActive: false,
      loading: true
    };
  },

  mounted() {
    this.$http
      .get(`${process.env.MIX_BASE_URL}/trainer/users/${this.$route.params.id}`)
      .then(res => {
        this.user = res.data;
        this.isActive = res.data.is_active === 1 ? true : false;
        this.loading = false;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
