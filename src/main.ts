import { createApp } from "vue";

import ElementPlus from "element-plus";

import "element-plus/dist/index.css";

import App from "./App.vue";
import router from "./router";

import "./styles/element/reset.scss";

import "./styles/element/element.scss";

const app = createApp(App);

app.use(router).use(ElementPlus).mount("#app");
