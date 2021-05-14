# tiny-codes demo/catch-code-error

## 说明

该分支下是关于「[捕获代码错误的正确姿势](https://github.com/jsjzh/blog/issues/10)」文章的 demo 合集。

## 使用

安装依赖，项目依赖 `http-server`，这是一个可以快速启动一个 `http` 服务极好用的库。

```bash
yarn
```

> ps: 如果发现每个 `step` 启动服务时候资源有缓存，请使用 `command+shift+r`，或者 `ctrl+shift+r`。

### npm run step:1

关于 `window.onerror` 的一些小 demo。

也就是如何捕获同步、异步执行代码的错误。

### npm run step:2

关于 `window.onunhandledrejection` 的一些小 demo。

也就是如何捕获未主动 `catch` 的 `promise.reject` 错误。

### npm run step:3

关于 `window.addEventListener("error")` 的一些小 demo。

也就是资源加载错误该如何捕获错误。

### npm run step:4

这个有点小特殊，是针对跨域的资源定位错误的一个 demo。

首先需要 `npm run step:4`，然后**另起一个 shell**，执行 `npm run step:4-1`，我们在 `npm run step:4-1` 的时候模拟了一个跨域的资源（端口不同），然后在 `step:4` 中请求该资源。

上一步应该可以发现报错信息记录不全，这个时候，**退出第二个启动的 shell**，在第二个 `shell` 中，再执行 `npm run step:4-2`，可以发现错误信息就可以完整的看到了。
