<template>
  <div class="flex flex-1 min-h-500">
    <aside class="w-48 py-20 border-r border-grey-lighter">
      <div class="px-8 mb-8">
        <img class="w-full" :src="icon" alt="Actions">
      </div>
      <ul class="list-reset">
        <li
          v-for="tab in tabs"
          v-bind:key="tab.name"
          :href="tab.href"
          @click="selectTab(tab)"
          :class="{ 'bg-grey-lightest border-grey-lighter': tab.isActive }"
          class="py-3 px-8 hover:bg-grey-lightest border-b border-t border-transparent text-grey-darkest font-semibold text-xs uppercase cursor-pointer"
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
    icon: String
  }
};
</script>