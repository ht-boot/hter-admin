<template>
  <div class="login-container">
    <div class="login-main">
      <div class="login-decoration">
        <img src="@/assets/svg/log.svg" alt="log-svg" />
      </div>
      <div class="login-box">
        <el-card class="box-card">
          <div class="title">
            <img src="@/assets/vue.svg" alt="logo" />
            <h1>HTer-Admin</h1>
          </div>
          <div class="login-form">
            <el-form
              ref="loginFormRef"
              :rules="loginRules"
              :model="loginForm"
              size="large"
            >
              <el-form-item prop="username">
                <el-input
                  v-model="loginForm.username"
                  size="large"
                  placeholder="用户名：admin / user"
                >
                  <template #prefix>
                    <el-icon class="el-input__icon">
                      <user />
                    </el-icon>
                  </template>
                </el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input
                  v-model="loginForm.password"
                  size="large"
                  type="password"
                  placeholder="密码：123456"
                  show-password
                  autocomplete="new-password"
                >
                  <template #prefix>
                    <el-icon class="el-input__icon">
                      <lock />
                    </el-icon>
                  </template>
                </el-input>
              </el-form-item>
            </el-form>
            <div class="login-btn">
              <el-button :icon="Refresh" round size="large"> 重置 </el-button>
              <el-button
                :icon="UserFilled"
                round
                size="large"
                type="primary"
                :loading="loading"
                @click="handleLogin(loginFormRef)"
              >
                登录
              </el-button>
            </div>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive } from "vue";
import type { ElForm } from "element-plus";
import { Refresh, UserFilled } from "@element-plus/icons-vue";

type FormInstance = InstanceType<typeof ElForm>;
const loginFormRef = ref<FormInstance>();

const loading = ref(false);
const loginForm = reactive<{ username: string; password: string }>({
  username: "",
  password: "",
});

const loginRules = reactive({
  username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }],
});

// 登录并数据校验
const handleLogin = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate(async (valid) => {
    if (!valid) return;
    loading.value = true;
  });
};
</script>
<style lang="scss" scoped>
.login-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #eee;
  background: url("@/assets/svg/bg-svg.svg") no-repeat 100%;
  min-width: none;

  .login-main {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 96.5%;
    height: 94%;
    padding: 0 50px;
    border-radius: 50px;
    background: rgba($color: #e0e0e0, $alpha: 0.4);
    box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #bebebe;
    .login-decoration {
      flex: 1;
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 100%;
      }
    }
    .login-box {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;

      .box-card {
        width: 85%;
        max-width: 620px;
        border-radius: 20px;
        background-color: #fff;
        padding: 0 35px;
        padding-bottom: 35px;
        box-sizing: border-box;
        .title {
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 20px;
          img {
            margin-right: 10px;
          }
        }
        .login-form {
          .el-input {
            padding-top: 20px;
          }
        }
        .login-btn {
          width: 100%;
          display: flex;
          padding-top: 30px;
          justify-content: space-between;
          .el-button {
            width: 40%;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 1220px) {
  .login-decoration {
    flex: 0 !important;
  }

  .login-box .box-card {
    width: 100% !important;
  }
  .login-main {
    width: 98% !important;
  }
}
@media screen and (max-width: 620px) {
  .login-box .box-card {
    padding: 0px !important;
  }
}
</style>
