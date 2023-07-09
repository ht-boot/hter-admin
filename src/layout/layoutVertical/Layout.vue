<template>
  <el-container>
    <el-aside>
      <div class="aside-box" :style="{ width: isCollapse ? '65px' : '210px' }">
        <div class="logo">
          <img class="logo-img" src="@/assets/vue.svg" alt="logo" />
          <span v-if="!isCollapse" class="logo-title">Hter-Admin </span>
        </div>
        <el-scrollbar>
          <el-menu
            :collapse="isCollapse"
            :router="false"
            :unique-opened="true"
            :collapse-transition="false"
          >
            <MenuItem />
          </el-menu>
        </el-scrollbar>
      </div>
    </el-aside>
    <el-container>
      <el-header>
        <HeaderBarToolLeft />
      </el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import MenuItem from "@/layout/components/Menu/MenuItem.vue";
import HeaderBarToolLeft from "@/layout/components/Header/HeaderBarToolLeft.vue";

const isCollapse = ref(true);
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
