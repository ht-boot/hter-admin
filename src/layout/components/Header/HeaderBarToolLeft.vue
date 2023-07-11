<template>
  <div class="header-left">
    <el-icon class="icon-check" @click="handleCheckIcon">
      <component :is="isCollapse ? 'expand' : 'fold'"></component>
    </el-icon>
    <div class="breadcrumb-box">
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item v-for="item in breadcrumbList" :key="item.path">
          <div class="breadcrumb-styles">
            <el-icon v-show="item.meta.icon" class="breadcrumb-icon">
              <component :is="item.meta.icon"></component>
            </el-icon>
            <span class="breadcrumb-title">{{ item.meta.title }}</span>
          </div>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useGlobal } from "@/store/modules/globalConfig";
import { storeToRefs } from "pinia";
import { ArrowRight } from "@element-plus/icons-vue";

const store = useGlobal();

// pinia storeToRefs 使其结构出来的状态具有响应式
const { isCollapse, breadcrumbList } = storeToRefs(store);

const handleCheckIcon = () => {
  store.setGlobalConfig("isCollapse", !isCollapse.value);
};
</script>

<style lang="scss" scoped>
.header-left {
  display: flex;
  align-items: center;
  height: 100%;
  .icon-check {
    font-size: 22px;
    cursor: pointer;
    margin-right: 16px;
  }

  .breadcrumb-box {
    .breadcrumb-styles {
      display: flex;
      align-items: center;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      color: rgba(0, 0, 0, 0.75);
      .breadcrumb-icon {
        font-size: 18px;
        margin-right: 4px;
      }
    }
  }
}
</style>
