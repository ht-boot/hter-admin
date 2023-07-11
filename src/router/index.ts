import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import NProgress from "@/utils/nprogress";
import { useUserStore } from "@/store/modules/user";

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
      title: "系统管理",
    },
  },
  {
    path: "/dataScreen",
    name: "dataScreen",
    component: "dataScreen/index",
    meta: {
      icon: "HomeFilled",
      title: "数据大屏",
    },
  },
];

const whiteList = ["/login"];

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

/**
 * @description 路由拦截 beforeEach
 * */

router.beforeEach((to, from, next) => {
  const userStore = useUserStore();
  // 进度条 开始
  NProgress.start();
  if (userStore.token) {
    // 动态设置标题
    document.title = to.meta.title
      ? `${to.meta.title} | ☀️ HTer admin`
      : "☀️ HTer admin";
    // 若返回登录页
    if (to.path.toLocaleLowerCase() === "/login") {
      if (userStore.token) return next(from.fullPath);
      return next();
    }
    next();
  } else {
    // 没有token
    if (whiteList.indexOf(to.path) !== -1) {
      // 在免登录白名单，直接进入
      next();
    } else {
      next(`/login?redirect=${to.fullPath}`); // 否则全部重定向到登录页
      NProgress.done();
    }
  }
});

/**
 * @description 重置路由
 * */
export const resetRouter = () => {};

/**
 * @description 路由跳转结束
 * */
router.afterEach(() => {
  NProgress.done();
});

export default router;
