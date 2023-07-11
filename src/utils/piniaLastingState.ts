import { PersistedStateOptions } from "pinia-plugin-persistedstate";

/**
 * @description pinia 状态持久化
 * @param {String} key 存储到持久化的 name
 * @param {Array} paths 需要持久化的 state name
 * @return persist
 * */

const piniaLastingState = (key: string, paths?: string[]) => {
  const persist: PersistedStateOptions = {
    key,
    storage: localStorage,
    paths,
  };
  return persist;
};

export default piniaLastingState;
