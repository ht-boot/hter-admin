import service from "@/api/request";

// 登录
const login = async (data: {
  username: string;
  password: string;
}): Promise<Request.LoginResult> => {
  return await service({
    method: "post",
    url: "/api/login",
    data,
    // 当前不需要lodaing, 若需要则去除headers
    headers: {
      notLoading: true,
    },
  });
};

export default login;
