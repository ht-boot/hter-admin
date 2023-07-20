import CryptoJS from "crypto-js";
// 十六位十六进制数作为密钥
const SECRET_KEY = CryptoJS.enc.Utf8.parse("1234123412341234");
// 十六位十六进制数作为密钥偏移量
const SECRET_IV = CryptoJS.enc.Utf8.parse("1234123412341234");

// 清除localStorage缓存
export const exit = () => {
  localStorage.clear();
};

// 时间判断
export const getTimeState = () => {
  let nowTime = new Date();
  let hours = nowTime.getHours();
  if (hours >= 6 && hours <= 10) return `早上好 ！ ☀️`;
  if (hours >= 10 && hours <= 14) return `中午好 ！ 🌞`;
  if (hours >= 14 && hours <= 18) return `下午好 ！ 🌞`;
  if (hours >= 18 && hours <= 24) return `晚上好 ！ 🌛`;
  if (hours >= 0 && hours <= 6) return `这么早，不太好吧 ！！ 🌛`;
};

// 扁平化数组
export const handleFlatMenuList = (
  menuList: Menu.MenuOptions[]
): Menu.MenuOptions[] => {
  let newMenuList: Menu.MenuOptions[] = JSON.parse(JSON.stringify(menuList));

  return newMenuList.flatMap((item) => [
    item,
    ...(item.children ? handleFlatMenuList(item.children) : []),
  ]);
};

/**
 * @description 前端加密
 * @param txt
 * @returns {string}
 */

export const encrypt = (txt: string): string => {
  const dataHex = CryptoJS.enc.Utf8.parse(txt);
  const encrypted = CryptoJS.AES.encrypt(dataHex, SECRET_KEY, {
    iv: SECRET_IV,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  return encrypted.ciphertext.toString();
};
