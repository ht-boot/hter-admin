// 清除localStorage缓存
export const exit = () => {
  localStorage.clear();
};

// 时间判断
export const getTimeState = () => {
  let timeNow = new Date();
  let hours = timeNow.getHours();
  if (hours >= 6 && hours <= 10) return `早上好 ⛅`;
  if (hours >= 10 && hours <= 14) return `中午好 🌞`;
  if (hours >= 14 && hours <= 18) return `下午好 🌞`;
  if (hours >= 18 && hours <= 24) return `晚上好 🌛`;
  if (hours >= 0 && hours <= 6) return `这么早，不太好吧！！ 🌛`;
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
