<template>
  <div class="header-right">
    <el-dropdown
      class="assembly-size"
      trigger="click"
      @command="handleSetAssemblySize"
    >
      <el-icon class="dropdown-icon"><Guide /></el-icon>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item
            v-for="item in assemblySizeList"
            :key="item.value"
            :command="item.value"
            :disabled="assemblySize === item.value"
          >
            {{ item.label }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <div class="theme-chech">
      <ThemeSwitch />
    </div>
    <el-icon class="search"><Search /></el-icon>
    <div class="username">{{ "admin" }}</div>
    <Avatar />
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useGlobal } from "@/store/modules/globalConfig";
import ThemeSwitch from "./modules/ThemeSwitch.vue";
import Avatar from "./modules/Avatar.vue";

const storeGlobal = useGlobal();

const assemblySize = computed(() => storeGlobal.assemblySize);

const assemblySizeList = [
  { label: "默认", value: "default" },
  { label: "大型", value: "large" },
  { label: "小型", value: "small" },
];

// 组件大小修改
const handleSetAssemblySize = (size: string) => {
  storeGlobal.setGlobalConfig("assemblySize", size);
};
</script>

<style lang="scss" scoped>
.header-right {
  --font-size: 22px;
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 12px;
  .assembly-size {
    cursor: pointer;
    font-size: var(--font-size);
    font-weight: 600;
    .dropdown-icon {
      padding-right: 16px;
    }
  }
  .theme-chech {
    padding-right: 16px;
  }
  .search {
    padding-right: 16px;
    font-size: var(--font-size);
    cursor: pointer;
  }
  .username {
    padding-right: 16px;
    color: var(--el-text-color-primary);
    font-weight: 600;
  }
  .el-switch {
    transition: all 0.3s;
  }
}
</style>
