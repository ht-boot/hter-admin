import { App, Directive } from "vue";

import copy from "./modules/copy";
import drag from "./modules/drag";
import throttle from "./modules/throttle";

const directivesList: { [key: string]: Directive } = {
  copy,
  drag,
  throttle,
};

// app.use() 如果plugin对象的install是一个方法。那么就将参数传入并执行install方法，完成插件的安装。
const directives = {
  install: function (app: App<Element>) {
    Object.keys(directivesList).forEach((key) => {
      app.directive(key, directivesList[key]);
    });
  },
};

export default directives;
