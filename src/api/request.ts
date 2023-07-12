import axios from "axios";
import { useUserStore } from "@/store/modules/user";
import { statusCheck } from "@/utils/statusCheck";
import { ElMessage } from "element-plus";
import router from "@/router";

const store = useUserStore();

// 获取浏览器地址 url
const baseURL = window.location.origin + "/api";

const service = axios.create({
  // 默认地址请求地址
  baseURL,
  // 设置超时时间
  timeout: 10000,
});

/**
 * @description 请求拦截
 */

service.interceptors.request.use(
  (config) => {
    // 是否需要设置 token
    const isToken = (config.headers || {}).isToken === false;
    if (store.token && !isToken) {
      config.headers["token"] = store.token; // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * 响应拦截
 */

service.interceptors.response.use(
  (res) => {
    const { data } = res;
    // 登录失效
    if (data.code == "401") {
      store.setToken("");
      router.replace("/login");
      return Promise.reject(data);
    }
    // 请求成功
    return data;
  },
  (error) => {
    const { response } = error;
    // 请求超时 && 网络错误单独判断，没有 response
    if (error.message.indexOf("timeout") !== -1)
      ElMessage.error("请求超时！请您稍后重试");
    if (error.message.indexOf("Network Error") !== -1)
      ElMessage.error("网络错误！请您稍后重试");
    // 根据服务器响应的错误状态码，做不同的处理
    if (response) statusCheck(response.status);
    // 服务器结果都没有返回(可能服务器错误可能客户端断网)，断网处理:可以跳转到断网页面
    if (!window.navigator.onLine) router.replace("/500");
    return Promise.reject(error);
  }
);

export default service;
