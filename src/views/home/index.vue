<template>
  <div class="home">
    <el-button @click="dynamicRouting">hello</el-button>
  </div>
</template>

<script lang="ts" setup>
import { dynamicRouting } from "@/router/modules/dynamicRoutes";
</script>
