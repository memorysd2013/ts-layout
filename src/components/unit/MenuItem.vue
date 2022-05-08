<script setup lang="ts">
import { ref, reactive, computed, onMounted } from 'vue'

defineProps<{ label: string, icon: string, active: boolean }>()

</script>

<template lang="pug">
.menu-item.flex.v-center.pointer(:class="{ active }")
  i.icon.mr-8(v-if="icon" :class="icon")
  .placeholder(v-else)
  span {{ label }}
  slot
</template>

<style lang="scss" scoped>
.menu-item {
  padding: 1rem;
  transition: all 0.3s;
  position: relative;

  &.active, &:hover {
    background-color: $mainHoverC;
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 3px;
      height: 100%;
      background-color: $mainC;
    }
  }

  &.active {
    color: $mainC;
  }

  .placeholder {
    width: 2rem;
  }
}
</style>