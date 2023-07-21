<template>
  <div ref="chartRef" :style="{ height, width }"></div>
</template>

<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref, watch } from "vue";
import * as echarts from "echarts";

const chartRef = ref<HTMLElement>();

// type EChartsOption = echarts.EChartsOption;

let myChart: echarts.ECharts;

const props = defineProps({
  height: {
    type: String,
    default: "100%",
  },
  width: {
    type: String,
    default: "100%",
  },
  options: {
    type: Object,
    required: true,
  },
});

const renderChart = () => {
  myChart = echarts.init(chartRef.value);
  props.options && myChart.setOption(props.options);
};

const echartsResize = () => {
  myChart && myChart.resize();
};

window.addEventListener("resize", echartsResize);

onMounted(() => {
  renderChart();
});

//监听图表数据时候变化，重新渲染图表
watch(
  () => props.options,
  () => {
    myChart.setOption(props.options, true);
  },
  { deep: true }
);

// 页面销毁前，销毁事件和实例
onBeforeUnmount(() => {
  window.removeEventListener("resize", echartsResize);
  myChart.dispose();
});
</script>

<style lang="scss" scoped></style>
