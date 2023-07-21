<template>
  <div class="container_box">
    <h1>富文本编辑器</h1>
    <WangEditor v-model:value="content" />
    <div style="margin-top: 20px">
      内容预览：
      <p v-html="content"></p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import WangEditor from "@/components/wangEditor/WangEditor.vue";
import { ref, watch } from "vue";
const content = ref("");

watch(
  () => content.value,
  (val: string) => {
    console.log(val);
  }
);
</script>
