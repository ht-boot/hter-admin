<template>
  <el-config-provider :size="assemblySize">
    <RouterView />
  </el-config-provider>
</template>

<script setup lang="ts">
import { computed } from "vue";

import { useGlobal } from "@/store/modules/globalConfig";

const global = useGlobal();

const assemblySize = computed(() => global.assemblySize as AssemblySizeType);
</script>

<style scoped></style>
