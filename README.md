# cubic-scrollTo

ScrollTo with transition effect

## Install

```js
npm i cubic-scroll-to
```

## Usage

```js
import { scrollTo, config } from 'cubic-scroll-to';

const el = document.querySelector('.scroll-box');
this.$nextTick(() => {
  const option = {
    el: el,
    cubic: [0.75, 0.16, 0.27, 0.88],
    totalTime: 2000,
  };
  config(option);
});

scrollTo(0, 500);
```

## API

### Options

| 参数      | 说明           | 类型    | 默认值               |
| --------- | -------------- | ------- | -------------------- |
| el        | 父元素         | Element | window               |
| cubic     | 贝塞尔曲线参数 | Array   | [0.25, 0.1, 0.25, 1] |
| totalTime | 滚动时间       | Number  | 500                  |
