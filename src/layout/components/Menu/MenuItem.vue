<template>
  <template v-for="subItem in menuList" :key="subItem.path">
    <el-sub-menu v-if="subItem.children?.length" :index="subItem.path">
      <template #title>
        <el-icon>
          <component :is="subItem.meta.icon"></component>
        </el-icon>
        <span>{{ subItem.meta.title }}</span>
      </template>
      <el-menu-item v-for="item in subItem.children" :key="item.path">
        <el-icon>
          <component :is="subItem.meta.icon"></component>
        </el-icon>
        <template #title>
          <span>{{ subItem.meta.title }}</span>
        </template>
      </el-menu-item>
    </el-sub-menu>
    <el-menu-item
      v-else
      :index="subItem.path"
      @click="handleClickMenu(subItem)"
    >
      <el-icon>
        <component :is="subItem.meta.icon"></component>
      </el-icon>
      <template #title>
        <span>{{ subItem.meta.title }}</span>
      </template>
    </el-menu-item>
  </template>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/store/modules/auth";
import { useGlobal } from "@/store/modules/globalConfig";

const authStore = useAuthStore();
const menuList = computed(() => authStore.menuList);

const router = useRouter();
const store = useGlobal();

const { setBreadcrumbList } = store;

const handleClickMenu = (item: Menu.MenuOptions) => {
  console.log(item);
  setBreadcrumbList("breadcrumbList", item);
  router.push(item.path);
};
</script>
<style lang="scss" scoped>
.el-sub-menu .el-sub-menu__title:hover {
  color: var(--el-menu-hover-text-color) !important;
  background-color: transparent !important;
}
.el-menu--collapse {
  .is-active {
    .el-sub-menu__title {
      color: #ffffff !important;
      background-color: var(--el-color-primary) !important;
    }
  }
}
.el-menu-item {
  &:hover {
    color: var(--el-menu-hover-text-color);
  }
  &.is-active {
    color: var(--el-menu-active-color) !important;
    background-color: var(--el-menu-active-bg-color) !important;
    &::before {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      width: 2px;
      content: "";
      background-color: var(--el-color-primary);
    }
  }
}

.classic,
.transverse {
  #driver-highlighted-element-stage {
    background-color: #606266 !important;
  }
}
</style>
