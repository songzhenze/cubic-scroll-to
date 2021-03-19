# cubic-scroll-to

带过渡效果的 scrollTo;

像使用 CSS cubic-bezier() 函数一样简单并且强大。[参数生成](https://cubic-bezier.com/#.17,.67,.83,.67)

## 为什么使用这个库

1. 其他的库如果要控制滚动速度需要复杂的计算。而这个库实现了 cubic-bezier 公式，只需要像使用 CSS cubic-bezier() 一样传入参数，就可以完全自定义你想要的滚动效果。
2. 这是一个无依赖的原生 js 库，打包后只有 5K 。

## 安装

```js
npm i cubic-scroll-to
```

## 使用

```js
import cubicScrollTo from "cubic-scroll-to";

const el = document.querySelector(".scroll-box");
const option = {
  el: el,
  cubic: [0.75, 0.16, 0.27, 0.88],
  totalTime: 2000,
};
const cubic = new cubicScrollTo(option);
cubic.scrollTo(500, 1000);
```

## 方法

### 初始化参数

| 参数      | 说明           | 类型    | 默认值                                                                      |
| --------- | -------------- | ------- | --------------------------------------------------------------------------- |
| el        | 父元素         | Element | window                                                                      |
| cubic     | 贝塞尔曲线参数 | Array   | [0.35, 0.13, 0.42, 1] [参数生成](https://cubic-bezier.com/#.17,.67,.83,.67) |
| totalTime | 滚动时间       | Number  | 500                                                                         |

### scrollTo（推荐）

使用当前位置作为滚动起始点

```js
const cubic = new cubicScrollTo();
cubic.scrollTo(500, 1000);
```

| 参数            | 说明                | 类型   | 默认值 |
| --------------- | ------------------- | ------ | ------ |
| targetPositionX | 目标位置的 X 轴坐标 | Number | 0      |
| targetPositionY | 目标位置的 Y 轴坐标 | Number | 0      |

### scrollToX

横向滚动，自定义起始、结束 X 轴位置

```js
const cubic = new cubicScrollTo();
cubic.scrollToX(500, 1000);
```

| 参数             | 说明                | 类型   | 默认值            |
| ---------------- | ------------------- | ------ | ----------------- |
| currentPositionX | 当前位置的 X 轴坐标 | Number | 当前位置 X 轴坐标 |
| targetPositionX  | 目标位置的 X 轴坐标 | Number | 0                 |

### scrollToY

纵向滚动，自定义起始、结束 Y 轴位置

```js
const cubic = new cubicScrollTo();
cubic.scrollToY(500, 1000);
```

| 参数             | 说明                | 类型   | 默认值            |
| ---------------- | ------------------- | ------ | ----------------- |
| currentPositionY | 当前位置的 Y 轴坐标 | Number | 当前位置 Y 轴坐标 |
| targetPositionY  | 目标位置的 Y 轴坐标 | Number | 0                 |

### scrollFromTo

自定义传入起时、结束坐标点

```js
const cubic = new cubicScrollTo();
cubic.scrollFromTo({ x: 0, y: 0 }, { x: 500, y: 500 });
```

| 参数            | 说明             | 类型   | 默认值         |
| --------------- | ---------------- | ------ | -------------- |
| currentPosition | 当前位置点的坐标 | Object | 当前位置坐标点 |
| targetPosition  | 目标位置点的坐标 | Object | {x:0,y:0}      |

## 其他

打开 test 文件夹，查看 test.html 文件获取更多用例。

## 如果觉得好用欢迎 star
