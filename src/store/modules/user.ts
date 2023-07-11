import { defineStore } from "pinia";

interface UserState {
  token: string;
  userInfo: { name: string };
}

export const useUserStore = defineStore({
  id: "user", // id是必须传入的， Pinia 将用它来连接 store 和 devtools。
  state: (): UserState => ({
    token: "123",
    userInfo: { name: "Admin" },
  }),
  getters: {},
  actions: {
    setToken(token: string) {
      this.token = "token";
    },
    setUserInfo(userInfo: UserState["userInfo"]) {
      this.userInfo = userInfo;
    },
  },
  //   persist: true, //pinia 持久化
});
