<template>
  <el-container>
    <el-aside>
      <div class="aside-box" :style="{ width: isCollapse ? '65px' : '210px' }">
        <div class="logo" @click="() => router.push('/')">
          <img class="logo-img" src="@/assets/vue.svg" alt="logo" />
          <span v-if="!isCollapse" class="logo-title">HTer-Admin </span>
        </div>
        <el-scrollbar>
          <el-menu
            :collapse="isCollapse"
            :router="false"
            :unique-opened="true"
            :collapse-transition="false"
            :default-active="currentMenu"
          >
            <MenuItem />
          </el-menu>
        </el-scrollbar>
      </div>
    </el-aside>
    <el-container>
      <el-header>
        <HeaderBarToolLeft />
        <HeaderBarToolRight />
      </el-header>
      <el-main>
        <router-view v-slot="{ Component, route }">
          <transition appear name="fade-transform" mode="out-in">
            <keep-alive>
              <component :is="Component" :key="route.fullPath" />
            </keep-alive>
          </transition>
        </router-view>
      </el-main>
      <el-footer>2022 © HTer-Admin.</el-footer>
    </el-container>
  </el-container>
</template>
<script lang="ts" setup>
import { computed } from "vue";
import { storeToRefs } from "pinia";
import { useRoute, useRouter } from "vue-router";
import MenuItem from "@/layout/components/Menu/MenuItem.vue";
import HeaderBarToolLeft from "@/layout/components/Header/HeaderBarToolLeft.vue";
import HeaderBarToolRight from "@/layout/components/Header/HeaderBarToolRight.vue";
import { useGlobal } from "@/store/modules/globalConfig";

const store = useGlobal();
const route = useRoute();
const router = useRouter();

const { isCollapse } = storeToRefs(store);

// 当前选中菜单
const currentMenu = computed(() => route.path);
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
