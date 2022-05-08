<script setup lang="ts">
import { } from 'vue'
defineProps<{ label: string }>()
</script>

<template lang="pug">
.featureName
  p {{ label }}
</template>

<style lang="scss" scoped>
.featureName {
  font-size: 2rem;
  margin-bottom: 1rem;
}
</style>