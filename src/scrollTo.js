/*
 * @Author       : songzhenze
 * @LastEditors  : songzhenze
 * @Description  : 滚动到指定位置工具函数
 */
// ES Modules rollup 打包使用
import Cubic from "./Cubic.js";

// CommonJS webpack 打包使用
// const Cubic = require('./Cubic.js');
class ScrollTo extends Cubic {
  constructor(option) {
    // ease cubic-bezier(.35,.13,.42,1)
    let params = [0.35, 0.13, 0.42, 1];
    if (option.cubic) {
      params = option.cubic;
    }
    super(...params);

    this.totalTime = 500;
    this.progress = 0;
    this.distance = { x: 0, y: 0 };
    this.current = { x: 0, y: 0 };
    this.startTime = null;
    this.el = window;

    if (option.el) {
      this.el = option.el;
    }
    console.log(option);
    if (option.totalTime) {
      this.totalTime = option.totalTime;
    }
  }

  anim(time) {
    if (!this.startTime) {
      this.startTime = time;
    }
    // 计算进度
    this.progress = (time - this.startTime) / this.totalTime;

    if (this.progress >= 1) {
      this.progress = 1;
      this.startTime = null;
    } else {
      window.requestAnimationFrame(this.anim.bind(this));
    }
    const solveResult = this.solve(this.progress);
    this.el.scrollTo(
      this.current.x + solveResult * this.distance.x,
      this.current.y + solveResult * this.distance.y
    );
  }

  scrollTo(targetPositionX, targetPositionY) {
    const position = this.getScrollOffsets();
    console.log(position);
    this.current = position;
    this.distance = {
      x: targetPositionX - position.x,
      y: targetPositionY - position.y,
    };
    window.requestAnimationFrame(this.anim.bind(this));
  }

  scrollFromTo(currentPosition, targetPosition) {
    const position = currentPosition;
    const autoPosition = this.getScrollOffsets();
    if (!position.x) {
      position.x = autoPosition.x;
    }
    if (!position.y) {
      position.y = autoPosition.y;
    }

    this.current = position;
    this.distance = {
      x: targetPosition.x - position.x,
      y: targetPosition.y - position.y,
    };
    window.requestAnimationFrame(this.anim.bind(this));
  }

  scrollToY(currentPositionY, targetPositionY) {
    const position = this.getScrollOffsets();
    console.log(position);
    this.current = { x: position.x, y: currentPositionY };
    this.distance = {
      x: 0,
      y: targetPositionY - currentPositionY,
    };
    window.requestAnimationFrame(this.anim.bind(this));
  }

  scrollToX(currentPositionX, targetPositionX) {
    const position = this.getScrollOffsets();
    console.log(position);
    this.current = { x: currentPositionX, y: position.y };
    this.distance = {
      x: targetPositionX - currentPositionX,
      y: 0,
    };
    window.requestAnimationFrame(this.anim.bind(this));
  }

  getScrollOffsets(w) {
    //指定窗口，如果不指定则默认当前窗口
    w = w || window;
    console.log(w.pageXOffset, w.pageYOffset);
    //除了IE8 及更早的版本以外，其他浏览器都能用
    if (w.pageXOffset != null) {
      return { x: w.pageXOffset, y: w.pageYOffset };
    }

    //对标准模式下的IE（或任何浏览器）
    var d = w.document;
    //document.compatMode用于判断浏览器渲染方式，CSS1Compat代表标准兼容模式，此时可以
    //使用scrollLeft,scrollTop来获取滚动条位置
    if (document.compatMode == "CSS1Compat") {
      return {
        x: d.documentElement.scrollLeft,
        y: d.documentElement.scrollTop,
      }; //对于怪异模式下的浏览器
    } else {
      return { x: d.body.scrollLeft, y: d.body.scrollTop };
    }
  }
}

// ES Modules rollup 打包使用
export default ScrollTo;
