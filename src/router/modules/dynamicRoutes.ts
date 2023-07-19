import router from "@/router";
import { PiniaCustomStateProperties, Store } from "pinia";
import { RouteRecordRaw } from "vue-router";

// 引入 views 文件夹下所有 vue 文件
const modules = import.meta.glob("@/views/**/*.vue");

/**
 *
 * @param userStore
 * @param authStore
 * @returns
 */

type TUserStore = Store<
  "user-info",
  PiniaStoreType.StoreUserState,
  {},
  {
    setToken(token: string): void;
    setUserInfo(userInfo: Request.UserInfo): void;
  }
>;

type TAuthStore = Store<
  "auth",
  PiniaStoreType.StoreAuthState,
  {
    flatMenuList: (
      state: {
        menuList: Menu.MenuOptions[];
      } & PiniaCustomStateProperties<{ menuList: Menu.MenuOptions[] }>
    ) => Menu.MenuOptions[];
  },
  { getMenuList(): Promise<void> }
>;

export const dynamicRouting = async (
  userStore: TUserStore,
  authStore: TAuthStore
) => {
  try {
    await authStore.getMenuList();

    const newMenuList = authStore.flatMenuList;

    newMenuList.forEach((item: Menu.MenuOptions) => {
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
    //菜单请求出错时，重定向到登陆页
    userStore.setToken("");
    router.replace("/login");
    return Promise.reject(error);
  }
};
