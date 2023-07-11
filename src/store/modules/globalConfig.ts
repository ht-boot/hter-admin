import { defineStore } from "pinia";
import piniaLastingState from "@/utils/piniaLastingState";

type Tbreadcrumb = {
  icon: string;
  title: string;
};

interface IUseGlobal {
  isCollapse: boolean;
  assemblySize: string;
  isDark: boolean;
  breadcrumbList: Array<{
    path: string;
    name: string;
    meta: {
      [K in keyof Tbreadcrumb]: Tbreadcrumb[K];
    };
  }>;
}

export const useGlobal = defineStore({
  id: "global",
  state: (): IUseGlobal => ({
    // 折叠菜单
    isCollapse: false,
    // 组件大小
    assemblySize: "default",
    // 主题配置
    isDark: false,
    // 面包屑默认数据
    breadcrumbList: [
      {
        path: "/home",
        name: "home",
        meta: {
          icon: "HomeFilled",
          title: "首页",
        },
      },
    ],
  }),
  getters: {},
  actions: {
    setGlobalConfig(...args: ObjectToKeyValueOfArray<IUseGlobal>) {
      this.$patch({ [args[0]]: args[1] });
    },
    // 面包屑数据更新
    setBreadcrumbList<K extends keyof IUseGlobal>(
      key: K,
      val: Menu.MenuOptions
    ) {
      this.$patch({ [key]: [val] });
    },
  },
  persist: piniaLastingState("global"),
});
