<script setup lang="ts">
import { ref, reactive, computed, watch, onMounted, onUnmounted } from "vue";
import { debounce } from "../../methods/index.ts";

const menuCollapse = ref(false);

let debounceFn: any = null;

onMounted(() => {
  autoCollapse();

  // 用一個變數將返回的 function 存起來, 讓 resize 在組件註銷後能被移除
  debounceFn = debounce(autoCollapse, 500);
  window.addEventListener("resize", debounceFn);
});
onUnmounted(() => {
  window.removeEventListener("resize", debounceFn);
});

const autoCollapse = () => (menuCollapse.value = window.innerWidth <= 768);

const toggleMenu = () => {
  // 考慮到寬度問題 mobile 模式才能收合側邊欄
  if (window.innerWidth <= 768) {
    menuCollapse.value = !menuCollapse.value;
  }
};
</script>

<template lang="pug">
.sideMenu(:class="[menuCollapse && 'isCollapse']")
  .switch.container.flex.v-center.pointer(@click="toggleMenu")
    i.icon.fa-solid.fa-arrow-left.mr-8.collapseIcon
    span(v-if="!menuCollapse") Switch Site 

  .info
    el-collapse-transition
      .container.flex.v-center(v-show="!menuCollapse")
        el-avatar(src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png")
        .infoText.ml-8 some information about user.

  .upgrade
    el-collapse-transition
      .container.flex.v-center.between(v-show="!menuCollapse")
        span Free domain with plan
        el-button(type="primary" plain) upgrade

  Menu(v-model:isCollapse="menuCollapse")
</template>

<style lang="scss" scoped>
.sideMenu {
  position: fixed;
  z-index: $sideMenuZ;
  top: $headerH;
  left: 0;
  width: $sideMenuW;
  height: 100%;
  border-right: $borderS;
  overflow: scroll;
  background-color: #fff;
  transition: width 0.3s;

  .container {
    padding: 1rem;
    border-bottom: $borderS;
  }

  .info {
    .el-avatar {
      flex: 0 0 auto;
    }
  }

  .collapseIcon {
    transition: transform 0.3s;
  }

  &.isCollapse {
    width: $sideMenuCollapseW;
    .collapseIcon {
      transform: rotate(180deg);
    }
  }
}
</style>