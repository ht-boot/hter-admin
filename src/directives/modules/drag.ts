import type { Directive } from "vue";

interface ElType extends HTMLElement {
  parentNode: HTMLElement;
}

/**
 * @description 组件拖拽
 */

const drag: Directive = {
  mounted(el: ElType) {
    // 将当前的元素添加定位与设置css样式
    el.style.position = "absolute";
    el.style.cursor = "move";

    el.onmousedown = function (e) {
      // currentX 当前鼠标在元素内的X坐标， cuttentY 当前鼠标在元素内的Y坐标
      const currentX = e.pageX - el.offsetLeft;
      const cuttentY = e.pageY - el.offsetTop;
      document.onmousemove = function (e) {
        let translationX = e.pageX - currentX;
        let translationY = e.pageY - cuttentY;
        let maxX = el.parentNode.offsetWidth - el.offsetWidth;
        let maxY = el.parentNode.offsetHeight - el.offsetHeight;
        if (translationX < 0) {
          translationX = 0;
        } else if (translationX > maxX) {
          translationX = maxX;
        }

        if (translationY < 8) {
          translationY = 0;
        } else if (translationY > maxY) {
          translationY = maxY;
        }
        el.style.left = translationX + "px";
        el.style.top = translationY + "px";
      };

      document.onmouseup = function () {
        document.onmousemove = document.onmouseup = null;
      };
    };
  },
};

export default drag;
