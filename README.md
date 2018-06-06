# H5-
H5模板
# 轻量的移动端 H5 翻页库
# Swiper
[![Build Status](https://travis-ci.org/fex-team/swiper.svg?branch=master)](https://travis-ci.org/fex-team/swiper)
[![Coverage Status](https://coveralls.io/repos/github/fex-team/swiper/badge.svg?branch=master)](https://coveralls.io/github/fex-team/swiper?branch=master)

轻量的移动端 H5 翻页库，提供了必要的配置选项和 API，同时具有高性能的特点。目前百度 H5 运行时页面在使用。
支持的功能：
- 横向或竖向滑动
- 循环翻页
- 总体和页面级别过渡效果
- 页面级别禁止滑动
- 外部 API 调用
- 完善的事件机制
- 可扩展的过渡动画

## 文档
- [基本用法](#基本用法)
- [数据类型](#数据类型)
    - [Transition](#transition)
    - [Page](#page)
- [配置选项](#配置选项)
- [事件](#事件)
- [API](#api)
    - [swipeTo](#swipeto)
    - [swipePrev](#swipeprev)
    - [swipeNext](#swipenext)
    - [getCurrentIndex](#getcurrentindex)
    - [on](#on)
    - [off](#off)
- [贡献代码](#贡献代码)
    - [技术栈](#技术栈)
    - [目录结构](目录结构)
    - [开发步骤](#开发步骤)

## 基本用法
只需三步即可完成：
1. 引入 js 和 css，可以按照下面两种方式之一进行：
    1. 在 [release](https://github.com/fex-team/swiper/releases) 页面下载构建好的 js 和 css；
    2. 通过 npm 或 yarn 安装，命令 `npm install fex-swiper` 或 `yarn add fex-swiper`，目的文件在 `dist` 目录下；

2. 创建一个容器 `div`，注意：这个容器必须是有宽度和高度（如 100% 或者 650px）；
```html
<div class="outer-container"></div>
```

3. 准备数据，创建 swiper。
```javascript
var list = [{
    content: '<h1>第 0 页</h1>'
}, {
    content: '<h1>第 1 页</h1>'
}, {
    content: '<h1>第 2 页</h1>'
}];

var swiper = new Swiper({
    container: document.querySelector('.outer-container'),
    data: list
});
```
具体可以参考 [simple.html](https://github.com/fex-team/swiper/blob/master/examples/simple.html)

## 数据类型
Swiper 定义了两个数据类型: `Transition` 和 `Page`，`Transition` 用于描述翻页过渡动画，`Page` 用于描述页面。

### Transition
```javascript
{
    // 过渡动画名称，目前提供了 5 种过渡动画
    name: 'slide' | 'rotate' | 'flip' | 'card' | 'fade'
    // 过渡动画时长，单位为 ms
    duration: Number
    // 只允许滑动方向 1: 后向，-1: 前向，0:双向禁止滑动，默认为 undefined，即不限制任何方向的滑动
    direction: 1 | -1 | 0
}
```

### Page
```javascript
{
    // 本页面内容，可以是 DOM 或者 string
    content: DOM or string,
    // 本页面翻页过渡动画
    transition: Transition
}
```

## 配置选项
所有的配置项都是可选的

配置项|类型|默认值|说明
----|----|----|---
container           | `DOM` or `string` | document.body                     | swiper 的外层容器 
data                | [Page](#page)[]            | []                                |所有页面的数据    
debug               | boolean           | `false`                           | 是否开启调试模式    
isVertical          | boolean           | `true`                            | 是否是垂直方向滑动
isLoop              | boolean           | `false`                           |是否开启循环翻页 
keepDefaultClasses    | string[]          | []              | 保持默认行为的 class 名，详见[说明](#about-keepdefault)
transition          | [Transition](#transition)           | `{name: 'slide', duration: 800}`  | 翻页过渡动画，按照优先级取值，详见[优先级](#about-transition-priority)

**关于 keepDefaultClasses 说明**<a name="about-keepdefault"></a>

为防止滑动事件中断，Swiper 默认阻止所有除了 `a`, `input`, `textarea`, `select` 以外的所有元素的滑动事件(mouseXXX, touchXXX)默认行为。但是在实际项目中，可能还有一些元素需要被排除在外（如微信中，长按图片会有识别二维码的响应，因此就需要将该图片的 className 放入该数组中），加入到 keepDefaultClasses 的元素及其 **后代元素** 均会被排除在外。因此 `keepDefaultClasses` 就是一个 **要保持默认响应的元素 class 的白名单**。

**过渡效果优先级**<a name="about-transition-priority"></a>

`swipeTo` 函数设定的翻页效果 > 当前页面的翻页效果 > 全局的翻页效果。

若高优先级已经设定，以高优先级的为准，若未设定，采用低一优先级的翻页效果。

## 事件<a name="swiper-events"></a>
Swiper 提供了 7 个事件，按照滑动开始到结束的顺序介绍如下：

事件名|触发时机
----|----
swipeStart          | 在页面开始滑动时触发
swipeMoving         | 在页面滑动时触发
swipeChanged        | 在翻页完成时触发
swipeRestore        | 在回弹开始时触发
swipeRestored       | 在回弹完成时触发
activePageChanged   | 下一页有变动时触发
destroy             | 销毁实例时触发

其中，页面滑动有两个结果：**回弹**和**翻页**。

回弹即页码没有变化，恢复原状。

翻页即页码产生变化，翻到了下一页。

## API
Swiper 提供了 5 个接口供外部调用：

函数名|作用
----|----
swipeTo | 翻到指定页面
swipePrev | 翻到上一页
swipeNext | 翻到下一页
on      | 监听事件
off     | 取消监听事件

### swipeTo
`swipeTo` 函数用于将页面翻到指定页码（从 0 开始计），可以指定翻页过渡动画。不受页面禁止滑动配置选项的限制。

#### 语法
```javascript
swiper.swipeTo(toIndex, transition);
```
#### 参数
- `toIndex`: Number, 翻到的页码，从 0 开始计。
- `transition`: \[可选\][Transition](#transition), 翻页动画，若未指定，则使用[当前翻页效果](#about-transition-priority)。

#### 示例
```javascript
swiper = new Swiper();
// 翻到第 0 页
swiper.swipeTo(0);
// 翻到第 3 页，以 rotate 过渡效果
swiper.swipeTo(3, {name: 'rotate'});
```

### swipePrev
`swipePrev` 函数用于将页面翻到上一页，可以指定翻页过渡动画。不受页面禁止滑动配置选项的限制。

#### 语法
```javascript
swiper.swipePrev(transition);
```
#### 参数
- `transition`: \[可选\][Transition](#transition), 翻页动画，若未指定，则使用[当前翻页效果](#about-transition-priority)。

#### 示例
```javascript
swiper = new Swiper();
// 翻到上一页，以默认效果
swiper.swipePrev();
```
### swipeNext
`swipeNext` 函数用于将页面翻到下一页，可以指定翻页过渡动画。不受页面禁止滑动配置选项的限制。

#### 语法
```javascript
swiper.swipeNext(transition);
```
#### 参数
- `transition`: \[可选\][Transition](#transition), 翻页动画，若未指定，则使用[当前翻页效果](#about-transition-priority)。

#### 示例
```javascript
swiper = new Swiper();
// 翻到下一页，以 flip 过渡效果
swiper.swipeNext({name: 'flip'});
```

### getCurrentIndex
`getCurrentIndex` 函数用于获取当前页面的序号（从 0 开始计）。

#### 语法
```javascript
swiper.getCurrentIndex();
```
#### 参数
- 无

#### 示例
```javascript
swiper = new Swiper();
// 获取当前页面序号
swiper.getCurrentIndex();
```

### on 
`on` 函数用于监听事件。

#### 语法
```javascript
swiper.on(eventName, listener);
```
#### 参数
- `eventName`: string, swiper [事件](#swiper-events)。
- `listener`: Function, 当所监听事件触发时，就会接收到通知并执行该函数，拥有 1 个参数 `event`。
    - `event`: Object, 默认包含 `name` 属性，表示当前的事件名。

#### 示例
```javascript
swiper = new Swiper();
// 监听 swipeChanged 事件，会在页面完成翻页时触发
swiper.on('swipeChanged', function (e) {
    console.log(e.name + 'fired');
});
```

### off
`off` 函数用于取消监听事件，与 `on` 函数相反。取消监听后，不会接收到事件响应。

#### 语法
```javascript
swiper.off(eventName, listener);
```
#### 参数
- `eventName`: string, swiper [事件](#swiper-events)
- `listener`: Function, 在 `on` 函数中传入的监听函数。
    

#### 示例
```javascript
swiper = new Swiper();
// 取消监听 swipeChanged 事件
swiper.off('swipeChanged', function (e) {
    console.log(e.name + 'fired');
});
```

## 贡献代码
欢迎大家为 Swiper 共享代码，开始之前，可以了解一下 Swiper 的基本原理，见[这篇文章](http://fex.baidu.com/blog/2017/10/build-a-silky-smooth-slide-library)。

### 技术栈
TypeScript + Webpack + Jest

### 目录结构
├── docs 文档  
├── examples 例子  
├── index.html 开发用到的 demo  
├── src 源码  
│   ├── constant.ts 常量定义  
│   ├── device.ts 统一设备  
│   ├── easing.ts 缓动函数  
│   ├── interface.ts 接口定义  
│   ├── render.ts render 抽象类  
│   ├── renders 支持的六种翻页效果  
│   ├── swiper.css 样式文件  
│   └── swiper.ts 主文件  
└── tests 测试文件

### 开发步骤
1. Fork 代码至自己的代码库，并 clone 到本地；
2. `yarn`，安装依赖包，主要是开发时用的；
3. `yarn dev`，用到的文件是 `index.html`，开发时修改保存后，会实时将 TypeScript 编译为 Javascript；
4. `yarn test`，运行测试用例，并输出代码覆盖率；
5. 开发完成后，在 Github 上提交 Pull Request。

# basesize.js
使用以JS计算REM做手机适配
# animate.css
动画库可自行添加扩展
## 进度条使用方法
```html
new Progres().init(function (res) {
  //res.loaded表示加载成功
}
```