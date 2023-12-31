import { createApp } from "vue";
import pinia from "@/store";
import ElementPlus from "element-plus";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/dark/css-vars.css";
import "@/styles/theme.scss";

import directives from "./directives"; // 自定义指令

import App from "./App.vue";
import router from "./router";

import "./styles/element/reset.scss";

import "./styles/element/element.scss";

const app = createApp(App);

// 引入icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(router).use(pinia).use(ElementPlus).use(directives).mount("#app");
