<template>
  <div class="container_box">
    <h1>复制指令 🍉🍉🍉🍊🍊🍊</h1>
    <el-input v-model="copyValue" placeholder="Please input">
      <template #append>
        <el-button v-copy="copyValue">复制</el-button>
      </template>
    </el-input>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const copyValue = ref("🍉🍉🍉🍊🍊🍊吃瓜吃瓜");
</script>
