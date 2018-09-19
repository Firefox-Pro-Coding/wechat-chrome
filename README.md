# wechat-chrome

> Chrome style mpvue project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## Tracking Issues

### mpvue slot 传值问题

[#585](https://github.com/Meituan-Dianping/mpvue/issues/585)
[#427](https://github.com/Meituan-Dianping/mpvue/issues/427)

### 临时解决方案

```js
// /node_modules/mpvue-template-compiler/build.js
// line:4587
attrsMap['data'] = "{{...$root[$p], $root}}";

// 修改为
attrsMap['data'] = "{{...$root[$k], ...$root[$p], $root}}";
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
