<script setup lang="ts">
import { ref, reactive, computed, onMounted } from 'vue'

defineProps<{ data: Array<any>, loading: boolean }>()
</script>

<template lang="pug">
.performanceCardList.grid
  template(v-for="(d, i) in data" :key="i")
    .cardWrapper
      PerformanceCard(v-loading="loading" :title="d.title" :data="d.data")

</template>

<style lang="scss" scoped>
.performanceCardList {
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
}
</style>