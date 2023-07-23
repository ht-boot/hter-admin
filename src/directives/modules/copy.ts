import type { Directive, DirectiveBinding } from "vue";

import { ElMessage } from "element-plus";

interface ElType extends HTMLElement {
  copyValue: string | number;
}

function handleClick(this: any) {
  // console.log(this.copyValue);
  const input = document.createElement("input");
  input.value = this.copyValue.toLocaleString();
  document.body.appendChild(input);
  input.select();
  document.execCommand("Copy");
  document.body.removeChild(input);
  ElMessage({
    type: "success",
    message: "复制成功",
  });
}

const copy: Directive = {
  mounted(el: ElType, binding: DirectiveBinding) {
    el.copyValue = binding.value;
    el.addEventListener("click", handleClick);
  },
  updated(el: ElType, binding: DirectiveBinding) {
    el.copyValue = binding.value;
  },
  // 组件销毁前移除事件监听
  beforeUnmount(el) {
    el.removeEventListener("click", handleClick);
  },
};

export default copy;
