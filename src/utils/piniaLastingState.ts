import { PersistedStateOptions } from "pinia-plugin-persistedstate";

/**
 * @description pinia 状态持久化
 * @param {String} key 存储到持久化的 name
 * @return persist
 * */

const piniaLastingState = (key: string) => {
  const persist: PersistedStateOptions = {
    key,
    storage: localStorage,
  };
  return persist;
};

export default piniaLastingState;
