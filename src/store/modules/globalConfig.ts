import { defineStore } from "pinia";

interface IUseGlobal {
  isCollapse: boolean;
}

export const useGlobal = defineStore({
  id: "global",
  state: (): IUseGlobal => ({
    isCollapse: false,
  }),
  getters: {},
  actions: {
    setGlobalConfig(...args: ObjectToKeyValueOfArray<IUseGlobal>) {
      this.$patch({ [args[0]]: args[1] });
    },
  },
});
