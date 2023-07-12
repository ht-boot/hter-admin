import { useDark } from "@vueuse/core";
import { useToggle } from "@vueuse/shared";

const isDark = useDark({
  // 存储到localStorage/sessionStorage中的Key 根据自己的需求更改
  storageKey: "themeKey",
  // 暗黑class名字
  valueDark: "dark",
});

const toggleDark = useToggle(isDark);

export default toggleDark;
