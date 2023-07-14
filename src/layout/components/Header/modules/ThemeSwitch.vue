<template>
  <el-switch
    style="--el-switch-on-color: #2d2d2f; --el-switch-off-color: #b1b3b8"
    v-model="isDark"
    size="default"
    inline-prompt
    active-text="🔆"
    inactive-text="🌙"
    @change="handleThemeChange"
  />
</template>

<script lang="ts" setup>
import { computed, watchEffect } from "vue";
import { useGlobal } from "@/store/modules/globalConfig";

const storeGlobal = useGlobal();
const isDark = computed({
  get() {
    return storeGlobal.isDark;
  },
  set(newValue) {
    storeGlobal.isDark = newValue;
  },
});

// 主题样式替换
const cssReplace = () => {
  if (isDark.value) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};

// 主题修改
const handleThemeChange = (item: any) => {
  storeGlobal.setGlobalConfig("isDark", item);
  cssReplace();
};

watchEffect(() => {
  cssReplace();
});
</script>
