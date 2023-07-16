import { defineStore } from "pinia";
import { apiGetMenuList } from "@/api/modules/authorisation";
import { handleFlatMenuList } from "@/utils/tools";

export const useAuthStore = defineStore({
  id: "auth", // id是必须传入的， Pinia 将用它来连接 store 和 devtools。
  state: (): PiniaStoreType.StoreAuthState => ({
    menuList: [],
  }),
  getters: {
    // 扁平化菜单， 用于动态路由
    flatMenuList: (state) => handleFlatMenuList(state.menuList),
  },
  actions: {
    async getMenuList() {
      const data = await apiGetMenuList();
      this.menuList = data;
    },
  },
});
