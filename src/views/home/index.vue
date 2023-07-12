<template>
  <div class="home">
    <el-button @click="handleCheck">hello</el-button>
  </div>
</template>

<script lang="ts" setup>
import login from "@/api/modules/login";
const handleCheck = () => {
  login({
    username: "admin",
    password: "123",
  });
};
</script>
