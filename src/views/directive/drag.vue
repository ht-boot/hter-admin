<template>
  <div class="container_box">
    <div class="box" v-drag></div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.box {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: rgba(58, 43, 103, 0.9);
}
</style>
