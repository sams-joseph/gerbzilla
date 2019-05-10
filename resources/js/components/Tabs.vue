<template>
  <div class="flex flex-1">
    <aside class="w-48 py-20 border-r border-grey-lighter">
      <h2 class="text-grey-darkest text-lg font-normal px-8 mb-6">{{ heading }}</h2>
      <ul class="list-reset">
        <li
          v-for="tab in tabs"
          v-bind:key="tab.name"
          :href="tab.href"
          @click="selectTab(tab)"
          :class="{ 'bg-grey-lighter': tab.isActive }"
          class="py-3 px-8 hover:bg-grey-lighter text-grey-darkest font-bold text-sm uppercase cursor-pointer"
        >{{ tab.name }}</li>
      </ul>
    </aside>
    <main class="flex-1 py-20">
      <slot></slot>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: []
    };
  },
  created() {
    this.tabs = this.$children;
  },
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach(tab => {
        tab.isActive = tab.href == selectedTab.href;
      });
    }
  },
  props: {
    heading: String
  }
};
</script>