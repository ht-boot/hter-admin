<template>
  <el-pagination
    v-model:current-page="currentPage"
    v-model:page-size="pageSize"
    :page-sizes="[10, 20]"
    small
    background
    layout="total, sizes, prev, pager, next, jumper"
    :total="total"
  />
</template>

<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps({
  total: {
    type: Number,
    required: true,
  },
  page: {
    type: Number,
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
});

const emits = defineEmits(["update:size", "update:page"]);

const currentPage = computed({
  get() {
    return props.page as number;
  },
  set(page: number) {
    emits("update:page", page);
  },
});

const pageSize = computed({
  get() {
    return props.size as number;
  },
  set(size: number) {
    emits("update:size", size);
  },
});
</script>
