<template>
  <div class="icons-box">
    <el-input
      ref="inputRef"
      v-model="valueIcon"
      v-bind="$attrs"
      placeholder="请选择图标"
      :clearable="true"
      @click="handleOpenIconDialog"
    >
      <template #append>
        <el-button :icon="customIcons[valueIcon as any]" />
      </template>
    </el-input>
    <el-dialog
      v-model="iconDialogVisible"
      :destroy-on-close="true"
      title="选择图标"
      top="50px"
      :width="width"
    >
      <el-input
        v-model="currentIcon"
        placeholder="搜索图标"
        size="large"
        :prefix-icon="Icons.Search"
      />
      <el-scrollbar v-if="Object.keys(iconsList).length">
        <ul class="icon-list">
          <li
            v-for="item in iconsList"
            :key="item"
            class="icon-item"
            @click="handleSelectIcon(item)"
          >
            <component :is="item"></component>
            <span>{{ item.name }}</span>
          </li>
        </ul>
      </el-scrollbar>
      <el-empty v-else description="未搜索到您要找的图标~" />
    </el-dialog>
  </div>
</template>
<script setup lang="ts">
import { ref, computed } from "vue";
import * as Icons from "@element-plus/icons-vue";

const props = defineProps({
  iconValue: String,
  width: [String, Number],
});

const emit = defineEmits(["update:iconValue"]);

const valueIcon = computed({
  get() {
    return props.iconValue;
  },
  set(item) {
    emit("update:iconValue", item);
  },
});

const iconDialogVisible = ref(false);
const currentIcon = ref();
const customIcons: { [key: string]: any } = Icons;

const iconsList = computed((): { [key: string]: any } => {
  if (!currentIcon.value) return Icons;
  let result: { [key: string]: any } = {};
  for (const key in customIcons) {
    if (key.toLowerCase().indexOf(currentIcon.value.toLowerCase()) > -1)
      result[key] = customIcons[key];
  }
  return result;
});

// dialog 关闭操作
const handleCloseIconDialog = () => {
  iconDialogVisible.value = false;
  currentIcon.value = "";
};

const handleOpenIconDialog = () => {
  iconDialogVisible.value = true;
};

const handleSelectIcon = (item: { name: string }) => {
  currentIcon.value = item.name;
  valueIcon.value = item.name;
  handleCloseIconDialog();
};
</script>

<style lang="scss" scoped>
.icons-box {
  .icon-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, 115px);
    justify-content: space-evenly;
    max-height: 70vh;
  }
  .icon-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 44px;
    padding: 20px 30px;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      transform: scale(1.1);
      color: var(--el-color-primary);
    }
  }
}
</style>
