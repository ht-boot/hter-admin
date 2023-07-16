import router from "@/router";
import { RouteRecordRaw } from "vue-router";
import { useAuthStore } from "@/store/modules/auth";
import { useUserStore } from "@/store/modules/user";

const userStore = useUserStore();

// 引入 views 文件夹下所有 vue 文件
const modules = import.meta.glob("@/views/**/*.vue");

export const dynamicRouting = async () => {
  try {
    const authStore = useAuthStore();
    await authStore.getMenuList();

    const newMenuList = authStore.flatMenuList;

    newMenuList.forEach((item) => {
      item.children && delete item.children;

      if (item.component && typeof item.component == "string") {
        item.component = modules["/src/views" + item.component + ".vue"];
      }

      if (item.meta.isFullScreen) {
        router.addRoute(item as unknown as RouteRecordRaw);
      } else {
        router.addRoute("layout", item as unknown as RouteRecordRaw);
      }
    });
  } catch (error) {
    // 当按钮 || 菜单请求出错时，重定向到登陆页
    userStore.setToken("");
    router.replace("/login");
    return Promise.reject(error);
  }
};
