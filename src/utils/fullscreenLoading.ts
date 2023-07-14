import { ElLoading } from "element-plus";

const fullscreenLoading = () => {
  const loading = ElLoading.service({
    lock: true,
    text: "Loading...",
    background: "rgba(0, 0, 0, 0.6)",
  });
  return loading;
};

let isCloseLoading = 0;

// 开启loding 全屏加载
export const opneFullscreenLoading = () => {
  if (isCloseLoading === 0) {
    fullscreenLoading();
  }
  isCloseLoading++;
};

// 关闭loading  全屏加载
export const closeFullscreenLoading = () => {
  if (isCloseLoading <= 0) return;
  isCloseLoading--;
  if (isCloseLoading === 0) {
    fullscreenLoading().close();
  }
};
