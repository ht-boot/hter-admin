/**
 * @description 防抖指令， 用于防止按钮短时间内多次点击
 *
 * 使用方式： 给按钮添加 v-throttle 指令， 传递参数为数组， [func, delay]
 * func: 需要回调的函数。
 * delay: 多长时间内回调一次函数。 默认 1s。
 */

import { Directive, DirectiveBinding } from "vue";

interface ElType extends HTMLElement {
  disabled: boolean;
  funThrottle: () => void;
}

const throttle: Directive = {
  mounted(el: ElType, binding: DirectiveBinding) {
    const callback = binding.value[0];
    const delay = binding.value[1] ?? 1000;
    if (typeof callback !== "function") {
      throw "callback must be a function";
    }
    let timer: number | null = null;
    el.funThrottle = () => {
      if (timer) {
        clearTimeout(timer);
      }
      if (!el.disabled) {
        el.disabled = true;
        callback(); //  执行回调函数
        timer = setTimeout(() => {
          el.disabled = false;
        }, delay);
      }
    };

    el.addEventListener("click", el.funThrottle);
  },
  // 注销时清除事件监听
  beforeUnmount(el: ElType) {
    el.removeEventListener("click", el.funThrottle);
  },
};

export default throttle;
