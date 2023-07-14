<template>
  <div class="userinfo">
    <div class="username">{{ userStore.username ?? "admin" }}</div>
    <el-dropdown class="avatar" trigger="click">
      <div class="avatar">
        <el-avatar
          src="https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg"
          alt="head.jpg"
        />
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item
            ><el-icon><User /></el-icon> 个人信息</el-dropdown-item
          >
          <el-dropdown-item
            ><el-icon><EditPen /></el-icon> 修改密码</el-dropdown-item
          >
          <el-dropdown-item divided @click="handlLogout"
            ><el-icon><SwitchButton /></el-icon> 退出登录</el-dropdown-item
          >
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import { ElMessageBox, ElMessage } from "element-plus";
import { useUserStore } from "@/store/modules/user";

const router = useRouter();

const userStore = useUserStore();
// 退出系统
const handlLogout = () => {
  ElMessageBox.confirm("您是否确认退出登录?", "温馨提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  }).then(() => {
    userStore.setToken("");
    router.replace("/login");
    ElMessage.success("退出登录成功！");
  });
};
</script>

<style lang="scss" scoped>
.userinfo {
  display: flex;
  align-items: center;
  .username {
    padding-right: 16px;
    color: var(--el-text-color-primary);
    font-weight: 600;
  }
  .avatar {
    cursor: pointer;
  }
}
</style>
@/utils/tools
