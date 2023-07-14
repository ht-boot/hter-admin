import { defineStore } from "pinia";
import piniaLastingState from "@/utils/piniaLastingState";

interface UserState {
  token: string;
  username: string;
}

export const useUserStore = defineStore({
  id: "user-info", // id是必须传入的， Pinia 将用它来连接 store 和 devtools。
  state: (): UserState => ({
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
