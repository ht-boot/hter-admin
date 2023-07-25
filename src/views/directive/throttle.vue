<template>
  <div class="container_box box">
    <p>点击我</p>
    <div>
      <el-button type="primary" v-throttle="[handleApi, 2000]">节流</el-button>
    </div>
    <span
      style="margin: 10px; display: inline-block"
      v-for="number in count"
      :key="number"
      >{{ number }}</span
    >
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

let count = ref<number>(1);
const handleApi = () => {
  count.value += 1;
};
</script>

<style lang="scss" scoped></style>
