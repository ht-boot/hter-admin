<template>
  <div class="header-right">
    <el-dropdown class="component-size" :trigger="'click'">
      <el-icon class="dropdown-icon"><Guide /></el-icon>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>默认</el-dropdown-item>
          <el-dropdown-item>大型</el-dropdown-item>
          <el-dropdown-item>小型</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <div class="theme-chech">
      <el-switch
        v-model="check"
        inline-prompt
        active-text="🔆"
        inactive-text="🌙"
      />
    </div>
    <el-icon class="search"><Search /></el-icon>
    <div class="userinfo">
      <div class="username">admin</div>
      <div class="avatar">
        <el-avatar
          src="https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const check = ref(false);
</script>

<style lang="scss" scoped>
.header-right {
  --font-color: rgba(0, 0, 0, 0.75);
  --font-size: 22px;
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 12px;
  .component-size {
    cursor: pointer;
    font-size: var(--font-size);
    font-weight: 600;
    color: var(--font-color);
    .dropdown-icon {
      padding-right: 16px;
    }
  }
  .theme-chech {
    padding-right: 16px;
  }
  .search {
    padding-right: 16px;
    font-size: var(--font-size);
  }
  .userinfo {
    display: flex;
    align-items: center;
    .username {
      padding-right: 16px;
      color: var(--font-color);
      font-weight: 600;
    }
  }
}
</style>
