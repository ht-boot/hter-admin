import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 7888,
    host: "0.0.0.0",
    open: true,
    strictPort: true,
    proxy: {
      "/api": {
        target: "https://mock.mengxuegu.com/mock/64ae5801d87ff84a6489f08b/hetr",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
      // 图片服务器
      "/uplaodImg": {
        target: " https://v2.alapi.cn/api/image",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/uplaodImg/, ""),
      },
    },
  },
  resolve: {
    // 配置路径别名
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/var.scss";`,
      },
    },
  },
});
