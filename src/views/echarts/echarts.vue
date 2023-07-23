<template>
  <div class="container_box">
    <el-radio-group v-model="radioValue" size="default" @change="handlechange">
      <el-radio-button :label="1">饼状图</el-radio-button>
      <el-radio-button :label="2">折线图</el-radio-button>
    </el-radio-group>
    <Echarts :options="options" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import * as echarts from "echarts";
import Echarts from "@/components/echarts/index.vue";
type EChartsOption = echarts.EChartsOption;

const radioValue = ref(1);

let options = ref<EChartsOption>({
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b}: {c} ({d}%)",
  },
  legend: {
    data: [
      "Direct",
      "Marketing",
      "Search Engine",
      "Email",
      "Union Ads",
      "Video Ads",
      "Baidu",
      "Google",
      "Bing",
      "Others",
    ],
  },
  series: [
    {
      name: "Access From",
      type: "pie",
      selectedMode: "single",
      radius: [0, "30%"],
      label: {
        position: "inner",
        fontSize: 14,
      },
      labelLine: {
        show: false,
      },
      data: [
        { value: 1548, name: "Search Engine" },
        { value: 775, name: "Direct" },
        { value: 679, name: "Marketing", selected: true },
      ],
    },
    {
      name: "Access From",
      type: "pie",
      radius: ["45%", "60%"],
      labelLine: {
        length: 30,
      },
      label: {
        formatter: "{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ",
        backgroundColor: "#F6F8FC",
        borderColor: "#8C8D8E",
        borderWidth: 1,
        borderRadius: 4,
        rich: {
          a: {
            color: "#6E7079",
            lineHeight: 22,
            align: "center",
          },
          hr: {
            borderColor: "#8C8D8E",
            width: "100%",
            borderWidth: 1,
            height: 0,
          },
          b: {
            color: "#4C5058",
            fontSize: 14,
            fontWeight: "bold",
            lineHeight: 33,
          },
          per: {
            color: "#fff",
            backgroundColor: "#4C5058",
            padding: [3, 4],
            borderRadius: 4,
          },
        },
      },
      data: [
        { value: 1048, name: "Baidu" },
        { value: 335, name: "Direct" },
        { value: 310, name: "Email" },
        { value: 251, name: "Google" },
        { value: 234, name: "Union Ads" },
        { value: 147, name: "Bing" },
        { value: 135, name: "Video Ads" },
        { value: 102, name: "Others" },
      ],
    },
  ],
});

const handlechange = (item: string | number | boolean) => {
  if (item === 1) {
    options.value = {
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c} ({d}%)",
      },
      legend: {
        data: [
          "Direct",
          "Marketing",
          "Search Engine",
          "Email",
          "Union Ads",
          "Video Ads",
          "Baidu",
          "Google",
          "Bing",
          "Others",
        ],
      },
      series: [
        {
          name: "Access From",
          type: "pie",
          selectedMode: "single",
          radius: [0, "30%"],
          label: {
            position: "inner",
            fontSize: 14,
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 1548, name: "Search Engine" },
            { value: 775, name: "Direct" },
            { value: 679, name: "Marketing", selected: true },
          ],
        },
        {
          name: "Access From",
          type: "pie",
          radius: ["45%", "60%"],
          labelLine: {
            length: 30,
          },
          label: {
            formatter: "{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ",
            backgroundColor: "#F6F8FC",
            borderColor: "#8C8D8E",
            borderWidth: 1,
            borderRadius: 4,
            rich: {
              a: {
                color: "#6E7079",
                lineHeight: 22,
                align: "center",
              },
              hr: {
                borderColor: "#8C8D8E",
                width: "100%",
                borderWidth: 1,
                height: 0,
              },
              b: {
                color: "#4C5058",
                fontSize: 14,
                fontWeight: "bold",
                lineHeight: 33,
              },
              per: {
                color: "#fff",
                backgroundColor: "#4C5058",
                padding: [3, 4],
                borderRadius: 4,
              },
            },
          },
          data: [
            { value: 1048, name: "Baidu" },
            { value: 335, name: "Direct" },
            { value: 310, name: "Email" },
            { value: 251, name: "Google" },
            { value: 234, name: "Union Ads" },
            { value: 147, name: "Bing" },
            { value: 135, name: "Video Ads" },
            { value: 102, name: "Others" },
          ],
        },
      ],
    };
  } else {
    options.value = {
      title: {
        text: "Stacked Area Chart",
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          label: {
            backgroundColor: "#6a7985",
          },
        },
      },
      legend: {
        data: ["Email", "Union Ads", "Video Ads", "Direct", "Search Engine"],
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: [
        {
          type: "category",
          boundaryGap: false,
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
      ],
      yAxis: [
        {
          type: "value",
        },
      ],
      series: [
        {
          name: "Email",
          type: "line",
          stack: "Total",
          areaStyle: {},
          emphasis: {
            focus: "series",
          },
          data: [120, 132, 101, 134, 90, 230, 210],
        },
        {
          name: "Union Ads",
          type: "line",
          stack: "Total",
          areaStyle: {},
          emphasis: {
            focus: "series",
          },
          data: [220, 182, 191, 234, 290, 330, 310],
        },
        {
          name: "Video Ads",
          type: "line",
          stack: "Total",
          areaStyle: {},
          emphasis: {
            focus: "series",
          },
          data: [150, 232, 201, 154, 190, 330, 410],
        },
        {
          name: "Direct",
          type: "line",
          stack: "Total",
          areaStyle: {},
          emphasis: {
            focus: "series",
          },
          data: [320, 332, 301, 334, 390, 330, 320],
        },
        {
          name: "Search Engine",
          type: "line",
          stack: "Total",
          label: {
            show: true,
            position: "top",
          },
          areaStyle: {},
          emphasis: {
            focus: "series",
          },
          data: [820, 932, 901, 934, 1290, 1330, 1320],
        },
      ],
    };
  }
};
</script>
