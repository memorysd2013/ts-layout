import * as echarts from 'echarts/core';
import { BarChart, BarSeriesOption, } from 'echarts/charts';
import {
  GridComponent,
  GridComponentOption,
  DatasetComponent,
  DatasetComponentOption,
  TransformComponent
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';

type ECOption = echarts.ComposeOption<
  | BarSeriesOption
  | GridComponentOption
  | DatasetComponentOption
>;

echarts.use([
  BarChart,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  CanvasRenderer
]);

const option: any = {
  xAxis: {
    show: false,
    type: 'category',
  },
  yAxis: {
    show: false,
    type: 'value'
  },
  grid: {
    left: 20,
    right: 20,
    top: '15%',
    bottom: '8%',
  },
  series: [{
    data: [],
    type: 'bar',
    itemStyle: {
      borderColor: '#666',
      borderWidth: 1.5,
      color: (params: any) => params.value > 28 ? '#fdd' : '#ccc',
    },
    barWidth: '20px',
  }]
};

export const useBar = (el: HTMLDivElement, data: Array<number>) => {
  const barChart = echarts.init(el);

  option.series[0].data = data
  const setOption = () => barChart.setOption(option)

  const resize = () => barChart.resize()

  return { setOption, resize }
}