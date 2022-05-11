<script setup lang="ts">
import { ref, reactive, computed, onMounted } from 'vue'

type Item = {
  label: string,
  icon: string,
  active: boolean
}

defineProps<{ item: Item, collapse?: boolean }>()

</script>

<template lang="pug">
.menu-item.flex.v-center.pointer(:class="[item.active && 'active', collapse && 'collapse']")
  i.icon.mr-8(v-if="item.icon" :class="item.icon")
  .placeholder(v-else)
  span.menuLabel {{ item.label }}
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

  &.collapse {
    .menuLabel {
      display: none;
    }
  }
}
</style>