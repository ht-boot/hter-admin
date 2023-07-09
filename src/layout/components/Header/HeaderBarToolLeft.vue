<template>
  <div>
    <el-icon class="icon-check" @click="handleCheckIcon">
      <component :is="isCollapse ? 'expand' : 'fold'"></component>
    </el-icon>
  </div>
</template>

<script lang="ts" setup>
import { useGlobal } from "@/store/modules/globalConfig";
import { storeToRefs } from "pinia";

const store = useGlobal();

// pinia storeToRefs 使其结构出来的状态具有响应式
const { isCollapse } = storeToRefs(store);

const handleCheckIcon = () => {
  store.setGlobalConfig("isCollapse", !isCollapse.value);
};
</script>

<style lang="scss" scoped>
.icon-check {
  font-size: 22px;
  cursor: pointer;
}
</style>
@/store/modules/globalConfig
