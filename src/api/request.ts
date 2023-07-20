import axios, { InternalAxiosRequestConfig, AxiosResponse } from "axios";
import { useUserStore } from "@/store/modules/user";
import { statusCheck } from "@/utils/statusCheck";
import { ElMessage } from "element-plus";
import router from "@/router";
import {
  opneFullscreenLoading,
  closeFullscreenLoading,
} from "@/utils/fullscreenLoading";

// 获取浏览器地址 url
const baseURL = window.location.origin;

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
  (config: InternalAxiosRequestConfig) => {
    const store = useUserStore();
    // 是否需要设置 token
    const isToken = (config.headers || {}).isToken === false;
    // 当前请求不需要显示 loading。
    config.headers.notLoading || opneFullscreenLoading();
    if (store.token && !isToken) {
      config.headers["authorization"] = `Bearer ${store.token}`; // 让每个请求携带自定义token 请根据实际情况自行修改
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 *@description 响应拦截
 */
service.interceptors.response.use(
  (res: AxiosResponse) => {
    const store = useUserStore();
    const { data } = res;

    // 登录失效或者账号密码错误(根据后端返回的code码修改)
    if (data.code === 401 || data.code === 0) {
      store.setToken("");
      router.replace("/login");
      ElMessage.error(data.message);
      return Promise.reject(data);
    }
    // 全局错误信息拦截
    if (data.code && data.code !== 200) {
      ElMessage.error(data.message);
      closeFullscreenLoading(); // 关闭全局加载
      return Promise.reject(data);
    }

    closeFullscreenLoading(); // 关闭全局加载
    // 请求成功
    return data.data;
  },
  (error) => {
    const { response } = error;
    closeFullscreenLoading(); // 关闭全局加载
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
