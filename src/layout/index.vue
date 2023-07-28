<template>
  <el-config-provider :locale="locale">
    <LayoutVertical />
  </el-config-provider>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import LayoutVertical from "@/layout/layoutVertical/Layout.vue";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import en from "element-plus/dist/locale/en.mjs";

const language = ref("zh-cn");

const locale = computed(() => (language.value === "zh-cn" ? zhCn : en));
</script>
