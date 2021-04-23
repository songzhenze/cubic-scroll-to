# cubic-scroll-to

**English** | [中文](./README.zh-CN.md)

scrollTo with transition effect;

It's as simple and powerful as using the CSS cubic-bezier() function.[Parameter generation](https://cubic-bezier.com/#.17,.67,.83,.67)

## Why

1. other libraries need complex calculation if they want to control rolling speed. This library implements cubic Bezier formula. You can customize the rolling effect you want by simply passing in parameters like CSS cubic-bezier().

## Install

```js
npm i cubic-scroll-to
```

## Usage

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

## Options

### Init

| parameter | explain                 | type    | default                                                                                 |
| --------- | ----------------------- | ------- | --------------------------------------------------------------------------------------- |
| el        | Parent element          | Element | window                                                                                  |
| cubic     | Bezier curve parameters | Array   | [0.35, 0.13, 0.42, 1] [Parameter generation](https://cubic-bezier.com/#.17,.67,.83,.67) |
| totalTime | Rolling time            | Number  | 500                                                                                     |

### scrollTo（recommend）

Use current position as the starting point of rolling

```js
const cubic = new cubicScrollTo();
cubic.scrollTo(500, 1000);
```

| parameter       | explain                              | type   | default |
| --------------- | ------------------------------------ | ------ | ------- |
| targetPositionX | X-axis coordinate of target position | Number | 0       |
| targetPositionY | Y-axis coordinate of target position | Number | 0       |

### scrollToX

Scroll horizontally, customize the start and end X-axis positions

```js
const cubic = new cubicScrollTo();
cubic.scrollToX(500, 1000);
```

| parameter        | explain                                       | type   | default                               |
| ---------------- | --------------------------------------------- | ------ | ------------------------------------- |
| currentPositionX | The x-axis coordinate of the current position | Number | X-axis coordinate of current position |
| targetPositionX  | X-axis coordinate of target position          | Number | 0                                     |

### scrollToY

Scroll vertically to customize the start and end Y-axis positions

```js
const cubic = new cubicScrollTo();
cubic.scrollToY(500, 1000);
```

| parameter        | explain                               | type   | default                                |
| ---------------- | ------------------------------------- | ------ | -------------------------------------- |
| currentPositionY | Y-axis coordinate of current position | Number | Y-axis coordinates of current position |
| targetPositionY  | Y-axis coordinate of target position  | Number | 0                                      |

### scrollFromTo

Define the start and end coordinate points of the input

```js
const cubic = new cubicScrollTo();
cubic.scrollFromTo({ x: 0, y: 0 }, { x: 500, y: 500 });
```

| parameter       | explain                                       | type   | default                           |
| --------------- | --------------------------------------------- | ------ | --------------------------------- |
| currentPosition | The coordinates of the current position point | Object | Current position coordinate point |
| targetPosition  | Coordinates of the target location point      | Object | {x:0,y:0}                         |

## Other

Open the test folder and view it test.html File for more use cases.

## welcome star
