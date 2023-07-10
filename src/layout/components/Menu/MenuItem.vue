<template>
  <template v-for="subItem in menuList" :key="subItem.path">
    <el-sub-menu v-if="subItem.children?.length" :index="subItem.path">
      <template #title>
        <el-icon>
          <component :is="subItem.meta.icon"></component>
        </el-icon>
        <span>{{ subItem.meta.title }}</span>
      </template>
      <el-sub-menu index="2-4">
        <template #title>item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item :index="subItem.path" @click="handleClickMenu(subItem)">
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
import { useRouter } from "vue-router";
import { useAuthStore } from "@/store/modules/auth";
import { useGlobal } from "@/store/modules/globalConfig";
const { menuList } = useAuthStore();

const router = useRouter();
const store = useGlobal();

const { setBreadcrumbList } = store;

const handleClickMenu = (item: Menu.MenuOptions) => {
  // if (item.meta.isLink) return window.open(item.meta.isLink, "_blank");
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
