<template>
  <div class="container_box">
    <h1>icon图标选择器</h1>
    <SelectIcons v-model:iconValue="iconValue" :width="'60%'" />
    <el-button :icon="iconValue" type="danger" style="margin-top: 20px"
      >看看我的变化</el-button
    >
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import SelectIcons from "@/components/selectIcons/index.vue";

const iconValue = ref<string>("");
</script>

<style lang="scss" scoped></style>
