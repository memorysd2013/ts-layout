<script setup lang="ts">
import { ref, onMounted, markRaw } from "vue";
// Vetur 會報錯 因為組件用 setup 包裝沒有 export
import Stats from "./components/feature/Stats.vue";

const component = ref<any>("");

onMounted(() => {
  // init
  component.value = markRaw(Stats);
});
</script>

<template lang="pug">
Header
SideMenu
component(:is="component")
Footer

</template>

<style lang="scss">
#app {
  margin-top: $headerH;
  min-height: calc(100vh - $headerH);
  margin-left: $sideMenuW;
  width: calc(100vw - $sideMenuW);

  @include tablet {
    margin-left: $sideMenuCollapseW;
    width: calc(100vw - $sideMenuCollapseW);
  }
}
</style>