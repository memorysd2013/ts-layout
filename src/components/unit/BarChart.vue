<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useBar } from "../../hooks/useBar";
import { debounce } from "../../methods";

const props = defineProps<{ data: Array<number> }>();
const barChart = ref<HTMLDivElement | any>();

let resizeFn = null;

onMounted(() => {
  const { setOption, resize } = useBar(barChart.value, props.data);
  setOption();

  // 用一個變數將返回的 function 存起來, 讓 resize 在組件註銷後能被移除
  resizeFn = debounce(resize, 500);
  window.addEventListener("resize", resizeFn);
});
onUnmounted(() => {
  window.removeEventListener("resize", resizeFn);
});
</script>

<template lang="pug">
.barChart(ref="barChart")
</template>

<style lang="scss" scoped>
.barChart {
  width: 100%;
  height: 300px;
}
</style>