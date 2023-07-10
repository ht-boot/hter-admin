import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const menuLists = [
  // {
  //   component: "/home/index",
  //   meta: {
  //     icon: "HomeFilled",
  //     title: "首页",
  //   },
  //   name: "home",
  //   path: "/home/index",
  // },
  {
    path: "/system",
    name: "system",
    component: "system/index",
    meta: {
      icon: "HomeFilled",
      title: "首页",
    },
  },
  {
    path: "/dataScreen",
    name: "dataScreen",
    component: "dataScreen/index",
    meta: {
      icon: "HomeFilled",
      title: "首页",
    },
  },
];

const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login/index.vue"),
    meta: {
      title: "登录",
    },
  },
  {
    path: "/",
    name: "layout",
    redirect: "/home",
    component: () => import("@/layout/index.vue"),
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("@/views/home/index.vue"),
        meta: {
          icon: "HomeFilled",
          title: "首页",
        },
      },
    ],
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

// 引入 views 文件夹下所有 vue 文件
const modules = import.meta.glob("@/views/**/*.vue");

menuLists.forEach((item: any) => {
  item.component = modules["/src/views/" + item.component + ".vue"];
  router.addRoute("layout", item);
});

export default router;
