import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "./", //设置打包路径
  server: {
    port: 7888,
    host: "0.0.0.0",
    open: true,
    strictPort: true,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
      // 图片服务器
      "/uploadImage": {
        target: "https://v2.alapi.cn/api/image",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/uploadImage/, ""),
      },
    },
  },
  build: {
    outDir: "dist",
    minify: "esbuild",
    reportCompressedSize: false, // 启用/禁用 gzip 压缩大小报告。压缩大型输出文件可能会很慢，因此禁用该功能可能会提高大型项目的构建性能。
    chunkSizeWarningLimit: 2000, // 规定触发警告的 chunk 大小。（以 kbs 为单位）。
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
