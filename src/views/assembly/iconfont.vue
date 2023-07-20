<template>
  <div class="iconfont">
    <h1>icon图标选择器</h1>
    <SelectIcons v-model:iconValue="iconValue" :width="'60%'" />
    <el-button :icon="iconValue" type="danger" style="margin-top: 20px"
      >看看我的变化</el-button
    >
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import SelectIcons from "@/components/selectIcons/selectIcons.vue";

const iconValue = ref<string>("");
</script>

<style lang="scss" scoped>
.iconfont {
  width: 100%;
  height: 100%;
  background-color: var(--el-bg-color);
  border-radius: 10px;
  padding: 8px 16px;
  box-sizing: border-box;
}
</style>
