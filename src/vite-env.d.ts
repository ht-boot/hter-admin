/// <reference types="vite/client" />
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

import * as axios from "axios";
declare module "axios" {
  interface AxiosInstance {
    (config: AxiosRequestConfig): Promise<any>;
  }
}
