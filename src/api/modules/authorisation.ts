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

export const apiGetUserList = async (params: {
  username: string;
  phone: string;
  status: string;
  createTime: string;
  currentPage: number;
  pageSize: number;
}) => {
  return await service({
    method: "get",
    url: "/api/user/list",
    params,
  });
};
