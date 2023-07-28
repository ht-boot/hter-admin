import service from "@/api/request";

// 登录
export const apiGetMenuList = async (): Promise<Menu.MenuOptions[]> => {
  return await service({
    method: "get",
    url: "/api/menus",
    headers: {
      notLoading: true,
    },
  });
};

export const apiGetUserList = async () => {
  return await service({
    method: "get",
    url: "/api/user/list",
  });
};
