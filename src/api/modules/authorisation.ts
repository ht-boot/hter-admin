import service from "@/api/request";

// 登录
export const getMenusApi = async () => {
  const res = await service({
    method: "get",
    url: "/api/menus",
  });
  return res;
};
