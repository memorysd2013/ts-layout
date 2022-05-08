<script setup lang="ts">
import { ref, reactive, computed, onMounted } from 'vue'

</script>

<template lang="pug">
.sideMenu
  .switch.container.flex.v-center.pointer
    i.icon.fa-solid.fa-arrow-left.mr-8
    span Switch Site

  .info.container.flex.v-center
    el-avatar(src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png")
    .infoText.ml-8 some information about user.

  .upgrade.container.flex.v-center.between
    span Free domain with plan
    el-button(type="primary" plain) upgrade

  Menu
</template>

<style lang="scss" scoped>
.sideMenu {
  position: fixed;
  top: $headerH;
  left: 0;
  width: $sideMenuW;
  height: 100%;
  border-right: $borderS;
  > * {
    & + * {
      border-top: $borderS;
    }
  }

  .container {
    padding: 1rem;
  }

  .info {
    .el-avatar {
      flex: 0 0 auto;
    }
  }
}
</style>