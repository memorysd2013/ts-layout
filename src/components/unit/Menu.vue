<script setup lang="ts">
import { reactive, ref } from 'vue'

const DATA = reactive([
  { label: 'Home', icon: 'fa-solid fa-house', active: false },
  { label: 'Stats', icon: 'fa-solid fa-chart-simple', active: true },
  { label: 'Plan', icon: 'fa-solid fa-pen-to-square', active: false },
  { label: 'Site', icon: 'fa-solid fa-globe', active: false, subMenu: [
    { label: 'Pages', icon: '', active: false },
    { label: 'Posts', icon: '', active: false },
    { label: 'Media', icon: '', active: false },
  ] },
  { label: 'Design', icon: 'fa-solid fa-pen-nib', active: false, subMenu: [
    { label: 'Design A', icon: '', active: false },
    { label: 'Design B', icon: '', active: false },
  ] },
  { label: 'Tools', icon: 'fa-solid fa-wrench', active: false, subMenu: [
    { label: 'Tools A', icon: '', active: false },
    { label: 'Tools B', icon: '', active: false },
  ] },
  { label: 'Manage', icon: 'fa-solid fa-gear', active: false, subMenu: [
    { label: 'Manage A', icon: '', active: false },
    { label: 'Manage B', icon: '', active: false },
  ] },
])

const collapseModel = ref('')

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const menuOnClick = (item: { active: boolean, subMenu: Array<any> }) => {
  DATA.forEach(d => d.active = false)
  item.active = true
  if (item.subMenu) {
    item.subMenu.forEach(d => d.active = false)
  }
}
const subMenuOnClick = (parent: { subMenu: Array<any> }, item: { active: boolean }) => {
  parent.subMenu.forEach(d => d.active = false)
  item.active = true
}
</script>

<template lang="pug">
.menu.flex.column
  template(v-for="t in DATA")
    template(v-if="t.subMenu")
      MenuItem(:label="t.label" :icon="t.icon" :active="t.active" @click="menuOnClick(t)")
        i.icon.fa-solid.fa-angle-right(:class="[t.active && 'rotate']")
      el-collapse-transition
        .collapseContent(v-show="t.active")
          template(v-for="s in t.subMenu")
            MenuItem(:label="s.label" :icon="s.icon" :active="s.active" @click="subMenuOnClick(t, s)")

    template(v-else)
      MenuItem(:label="t.label" :icon="t.icon" :active="t.active" @click="menuOnClick(t)")

</template>

<style lang="scss" scoped>
.menu {
  .collapseContent {
    border-top: 1px solid #fff;
  }
  .icon {
    position: absolute;
    right: 1rem;
    transition: transform .3s;
    &.rotate {
      transform: rotate(90deg);
    }
  }
}
</style>