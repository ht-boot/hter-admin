import { defineStore } from "pinia";

export const useAuthStore = defineStore({
  id: "auth", // id是必须传入的， Pinia 将用它来连接 store 和 devtools。
  state: () => ({
    menuList: [
      {
        component: "/home/index",
        meta: {
          icon: "HomeFilled",
          title: "首页",
        },
        name: "home",
        path: "/home/index",
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
        name: "dataScreen3",
        path: "/dataScreen3",
      },
      {
        component: "/dataScreen/index",
        meta: {
          icon: "Histogram",
          title: "权限管理",
        },
        isKeepAlive: true,
        name: "dataScreen2",
        path: "/dataScreen2",
      },
      {
        component: "/dataScreen/index",
        meta: {
          icon: "Histogram",
          title: "系统管理",
        },
        isKeepAlive: true,
        name: "dataScreen1",
        path: "/dataScreen1",
      },
    ],
  }),
  getters: {},
  actions: {
    getMenuList(listArr: any) {
      console.log(listArr);

      this.menuList = listArr;
    },
  },
  //   persist: true, //pinia 持久化
});
