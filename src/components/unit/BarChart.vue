<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useBar } from '../../hooks/useBar'

const props = defineProps<{ data: Array<number> }>()
const barChart = ref<HTMLDivElement | any>()

let functionIns: any = null;

onMounted(() => {
  const { setOption, resize } = useBar(barChart.value, props.data)
  setOption()

  // 用一個變數將返回的 function 存起來, 讓 resize 在組件註銷後能被移除
  functionIns = debounce(resize, 500)
  window.addEventListener('resize', functionIns)
})
onUnmounted(() => {
  window.removeEventListener('resize', functionIns)
})

// 防抖
const debounce = function (func: () => void, delay: number = 250) {
  let timer: number = 0;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => func(), delay)
  }
}

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