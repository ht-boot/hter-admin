<template>
  <el-container>
    <el-aside>
      <div class="aside-box">
        <div class="logo">
          <img class="logo-img" src="@/assets/vue.svg" alt="logo" />
          <span class="logo-title">Geeker Admin </span>
        </div>
        <el-scrollbar>
          <el-menu
            :router="false"
            :unique-opened="true"
            :collapse-transition="false"
          >
          </el-menu>
        </el-scrollbar>
      </div>
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>
<script lang="ts" setup>
import { ElMain, ElContainer, ElFooter, ElAside, ElHeader } from "element-plus";
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
