import service from "@/api/request";

// 登录
const login = async (data: {
  username: string;
  password: string;
}): Promise<any> => {
  const res = await service({
    method: "post",
    url: "/login",
    data,
  });

  return res;
};

export default login;
