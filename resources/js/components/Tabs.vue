<template>
  <div class="min-h-500">
    <div class="w-full">
      <ul class="list-reset border-b">
        <li
          v-for="tab in tabs"
          v-bind:key="tab.name"
          :href="tab.href"
          @click="selectTab(tab)"
          :class="{ 'border-red': tab.isActive }"
          class="inline-block px-8 py-4 border-b-2 border-transparent text-xs text-grey-dark uppercase font-bold hover:text-red cursor-pointer"
        >{{ tab.name }}</li>
      </ul>
    </div>
    <main class="flex-1 py-12">
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