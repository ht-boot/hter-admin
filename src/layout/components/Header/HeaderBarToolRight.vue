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
      <el-switch
        v-model="isDark"
        inline-prompt
        active-text="🔆"
        inactive-text="🌙"
        @change="handleThemeChange"
      />
    </div>
    <el-icon class="search"><Search /></el-icon>
    <div class="userinfo">
      <div class="username">『admin』</div>
      <div class="avatar">
        <el-avatar
          src="https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useGlobal } from "@/store/modules/globalConfig";
import toggleDark from "@/utils/theme";

const storeGlobal = useGlobal();

const assemblySize = computed(() => storeGlobal.assemblySize);

const assemblySizeList = [
  { label: "默认", value: "default" },
  { label: "大型", value: "large" },
  { label: "小型", value: "small" },
];

const isDark = computed({
  get() {
    return storeGlobal.isDark;
  },
  set(newValue: boolean) {
    storeGlobal.isDark = newValue;
  },
});

// 组件大小修改
const handleSetAssemblySize = (size: string) => {
  storeGlobal.setGlobalConfig("assemblySize", size);
};

// 主题修改
const handleThemeChange = (val: any) => {
  storeGlobal.setGlobalConfig("isDark", val);
  toggleDark();
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
    color: var(--el-text-color-primary);
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
  .userinfo {
    display: flex;
    align-items: center;
    .username {
      padding-right: 16px;
      color: var(--font-color);
      font-weight: 600;
    }
    .avatar {
      cursor: pointer;
    }
  }
}
</style>
