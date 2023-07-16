import { defineStore } from "pinia";
import piniaLastingState from "@/utils/piniaLastingState";
import { apiGetMenuList } from "@/api/modules/authorisation";
import { handleFlatMenuList } from "@/utils/tools";

export const useAuthStore = defineStore({
  id: "auth", // id是必须传入的， Pinia 将用它来连接 store 和 devtools。
  state: () => ({
    menuList: <Menu.MenuOptions[]>[],
  }),
  getters: {
    // 扁平化菜单， 用于动态路由
    flatMenuList: (state) => handleFlatMenuList(state.menuList),
    // 菜单权限列表
    // showMenuList: (state) => {},
  },
  actions: {
    async getMenuList() {
      const data = await apiGetMenuList();
      this.menuList = data;
    },
  },
  persist: piniaLastingState("auth"),
});
