import service from "@/api/request";

// 登录
export const apiUploadImage = async (data: any) => {
  return await service({
    method: "post",
    url: "/uploadImage",
    data,
  });
};
