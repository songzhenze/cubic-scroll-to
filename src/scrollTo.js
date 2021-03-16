/*
 * @Author       : songzhenze
 * @LastEditors  : songzhenze
 * @Description  : 滚动到指定位置工具函数
 */
// ES Modules rollup 打包使用
import Cubic from './Cubic.js'

// CommonJS webpack 打包使用
// const Cubic = require('./Cubic.js');

let totalTime = 500;
let progress = 0;
let distance = 0;
let current = 0;
let target = 0;
// ease cubic-bezier(.35,.13,.42,1)
let c = new Cubic(0.25, 0.1, 0.25, 1);
let el = window;
const config = function (option) {
  if (option.cubic) {
    c = new Cubic(...option.cubic);
  }
  console.log(option);
  if (option.el) {
    el = option.el;
  }
  if (option.totalTime) {
    totalTime = option.totalTime;
  }
};

let startTime;
const anim = (time) => {
  // 计算进度
  progress = (time - startTime) / totalTime;
  if (progress >= 1) {
    progress = 1;
  } else {
    window.requestAnimationFrame(anim);
  }
  el.scrollTo(0, current + c.solve(progress) * distance);
};

const scrollTo = (currentPosition, targetPosition) => {
  current = currentPosition;
  target = targetPosition;
  distance = target - current;
  startTime = performance.now();
  window.requestAnimationFrame(anim);
};

// CommonJS webpack 打包使用
// module.exports = {
//   scrollTo,
//   config,
// };

// ES Modules rollup 打包使用
export default {
  scrollTo,
  config,
};