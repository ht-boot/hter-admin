import { defineStore } from "pinia";

export const useAuthStore = defineStore({
  id: "auth", // id是必须传入的， Pinia 将用它来连接 store 和 devtools。
  state: () => ({
    menuList: <Menu.MenuOptions[]>[
      {
        component: "/home/index",
        meta: {
          icon: "HomeFilled",
          title: "首页",
        },
        name: "home",
        path: "/home",
      },
      {
        component: "/dataScreen/index",
        meta: {
          icon: "Histogram",
          title: "数据大屏",
        },
        isKeepAlive: true,
        isLink: "",
        title: "数据大屏",
        name: "dataScreen",
        path: "/dataScreen",
      },

      {
        component: "/system/index",
        meta: {
          icon: "Platform",
          title: "系统管理",
        },
        isKeepAlive: true,
        name: "system",
        path: "/system",
      },
    ],
  }),
  getters: {},
  actions: {
    getMenuList(listArr: any) {
      this.menuList = listArr;
    },
  },
  //   persist: true, //pinia 持久化
});
