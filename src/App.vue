<script setup lang="ts">
import { ref, onMounted, markRaw } from "vue"
// Vetur 會報錯 因為組件用 setup 包裝沒有 export
import Stats from './components/feature/Stats.vue'

const component = ref<any>('')

onMounted(async () => {
  // init
  component.value = markRaw(Stats)
})

</script>

<template lang="pug">
Header
SideMenu
component(:is="component")
//- Stats
Footer

</template>

<style lang="scss">
#app {
  margin-top: $headerH;
  margin-left: $sideMenuW;
  min-height: calc(100vh - $headerH);
  width: calc(100vw - $sideMenuW);
}
</style>