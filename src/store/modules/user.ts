import { defineStore } from "pinia";
import { UserState } from "../interface";

export const useUserStore = defineStore({
  id: "userInfo", // id是必须传入的， Pinia 将用它来连接 store 和 devtools。
  state: (): UserState => ({
    token: "",
    userInfo: { name: "Geeker" },
  }),
  getters: {},
  actions: {
    // Set Token
    setToken(token: string) {
      this.token = token;
    },
    // Set setUserInfo
    setUserInfo(userInfo: UserState["userInfo"]) {
      this.userInfo = userInfo;
    },
  },
  //   persist: true, //pinia 持久化
});
