import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const menuLists = [
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
    name: "dataScreen",
    path: "/dataScreen",
  },
  {
    component: "/dataScreen/index",
    meta: {
      icon: "Histogram",
      title: "权限管理",
    },
    isKeepAlive: true,
    name: "dataScreen",
    path: "/dataScreen",
  },
  {
    component: "/dataScreen/index",
    meta: {
      icon: "Histogram",
      title: "系统管理",
    },
    isKeepAlive: true,
    name: "dataScreen",
    path: "/dataScreen",
  },
];

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("@/layout/index.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login/index.vue"),
    meta: {
      title: "登录",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {
        top: 0,
        left: 0,
      };
    }
  },
});

export default router;
