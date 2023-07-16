import { defineStore } from "pinia";
import piniaLastingState from "@/utils/piniaLastingState";

export const useUserStore = defineStore({
  id: "user-info", // id是必须传入的， Pinia 将用它来连接 store 和 devtools。
  state: (): PiniaStoreType.StoreUserState => ({
    token: "",
    username: "",
  }),
  getters: {},
  actions: {
    setToken(token: string) {
      this.token = token;
    },
    setUserInfo(username: string) {
      this.username = username;
    },
  },
  persist: piniaLastingState("user-info"), //pinia 持久化
});
