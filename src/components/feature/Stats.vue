<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue'

const paramsTab = ref([
  { label: 'Traffic', name: 'traffic' },
  { label: 'Insights', name: 'insights' },
])
const paramsBtn = ref([
  { label: 'Days', value: 'd' },
  { label: 'Weeks', value: 'w' },
  { label: 'Months', value: 'M' },
  { label: 'Years', value: 'y' },
])
const chartTab = ref([
  { label: 'Views', icon: 'fa-regular fa-heart', name: 'views' },
  { label: 'Vistors', icon: 'fa-regular fa-user', name: 'vistors' },
  { label: 'Likes', icon: 'fa-regular fa-star', name: 'likes' },
  { label: 'Comments', icon: 'fa-regular fa-comment', name: 'comments' },
])
const cardData = reactive<Array<any>>([
  { title: 'Posts', data: [] },
  { title: 'Pages', data: [] },
  { title: 'Referers', data: [] },
  { title: 'Profits', data: [] },
  { title: 'Stocks', data: [] },
  { title: 'Customers', data: [] },
])

const chartData = ref<Array<number>>([])
const chartUpdateKey = ref(0)
const paramsTabModel = ref('insights')
const chartTabModel = ref('views')
const paramsDateModel = ref('d')
const cardListLoading = ref(false)

onMounted(() => {
  setChartData()
  setCardData()
})

const btnClick = (btn: { value: string }) => {
  paramsDateModel.value = btn.value
}
const setChartData = () => {
  // simulate get data via apis
  chartData.value = Array(25).fill('').map(() => 20 + Math.floor(Math.random() * 10))
  chartUpdateKey.value++
}
const setCardData = () => {
  // simulate get data via apis
  let randomLoadSec = Math.floor(Math.random() * 3000)
  cardListLoading.value = true

  new Promise((resolve: any) => setTimeout(() => resolve(), randomLoadSec))
    .then(() => {
      cardData.forEach(d => {
        d.data = Array(6).fill('').map((d, index) => {
          return {
            title: `item ${index + 1}`,
            value: Math.floor(Math.random() * 10000)
          }
        })
      })
      cardListLoading.value = false
    })
}
</script>

<template lang="pug">
.stats
  FeatureName(label="Stats And Insights")
  
  .paramsWrapper.flex.v-center.between
    el-tabs(v-model="paramsTabModel" :stretch="true" class="paramsTabs" @tab-click="setChartData")
      template(v-for="d in paramsTab")
        el-tab-pane(:name="d.name" :label="d.label")
    el-button-group
      template(v-for="b in paramsBtn")
        el-button(type="primary" :plain="paramsDateModel !== b.value" @click="btnClick(b)") {{ b.label }}

  .chartWrapper
    BarChart(:data="chartData" :key="chartUpdateKey")
    el-tabs(v-model="chartTabModel" class="chartTabs" :stretch="true" @tab-click="setChartData")
      template(v-for="d in chartTab")
        el-tab-pane(:name="d.name")
          template(#label)
            .flex.column.v-center
              i.icon.chartIcon(:class="d.icon")
              span {{ d.label }}

  DateRangeSwitch(label="Stats for" :type="paramsDateModel" :loading="cardListLoading" @emitDate="setCardData")

  PerformanceCardList(:loading="cardListLoading" :data="cardData")

</template>

<style lang="scss">
$chartsTabH: 70px;

.chartTabs {
  @include el-tab-item-custom(line-height, 1.5rem);
  @include el-tab-item-custom(height, $chartsTabH);
}
</style>

<style lang="scss" scoped>
$paramsH: 50px;

.stats {
  @include pageContainer;

  > * {
    & + * {
      margin-top: 1rem;
    }
  }

  .paramsWrapper {
    border: $borderS;
    padding: 0 0.5rem;
    .paramsTabs {
      line-height: $paramsH;
    }
  }

  .chartWrapper {
    border: $borderS;
    .chartTabs {
      border-top: $borderS;
    }
    .chartIcon {
      margin: 0.75rem 0 0.25rem;
    }
  }
}
</style>