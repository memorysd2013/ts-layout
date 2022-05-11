<script setup lang="ts">
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'

const DATA = [
  { label: 'First', icon: 'fa-solid fa-heart', name: 'first' },
  { label: 'Second', icon: 'fa-solid fa-heart-pulse', name: 'second' },
]

const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {}
</script>

<template lang="pug">
.header.flex.between.v-center
  .leftWrapper
    el-tabs(v-model="activeName" class="headerTabs" @tab-click="handleClick")
      template(v-for="d in DATA")
        el-tab-pane.headerTabItem(:name="d.name")
          template(#label)
            i.icon.mr-8(:class="d.icon")
            span {{ d.label }}

  .rightWrapper.flex.v-center
    el-button(type="primary") Write
    el-avatar(size="small" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png")
    i.icon.fa-regular.fa-bell
  

</template>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: $headerH;
  position: fixed;
  top: 0;
  left: 0;
  z-index: $headerZ;
  border-bottom: $borderS;
  background-color: #fff;
  padding: 0 1rem;

  .leftWrapper {
    .headerTabs {
      line-height: $headerH;
    }
  }

  .rightWrapper {
    * {
      & + * {
        margin-left: 1.5rem;
      }
    }
  }
}
</style>