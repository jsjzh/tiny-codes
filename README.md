# cors

https://developer.mozilla.org/zh-CN/docs/Web/HTML/Attributes/crossorigin

# 脚本错误捕获

## 错误类型

async 异步错误

拼写错误

undefined.map(() => {})

## 如何捕获

try catch

window.onerror

## 包装一个捕获插件

try catch 直接 throw error，让 window.onerror 捕获

对于 window.onerror 增设一个 temp

onLine 为 false，可以先缓存等 onLine 为 true 统一上报，可以把数据先存在 localStroage 中，等下次登录，有网络的时候统一上报

window.ononline

window.onoffline

上报的时候需要应用的版本信息

cookieEnabled

onLine

[connection](https://developer.mozilla.org/zh-CN/docs/Web/API/Navigator/connection)

如果是混合应用，可以获取更多的信息，想象空间巨大

## 发现问题

### 跨域无法正常捕获错误

html5 crossorigin

### 若是压缩过的文件，报错信息无法定位错误所在

source-map

### 无法捕获 script image dom 元素的插入报错

## 其他

发现在 script 中设置 id，然后能在里面访问到这个元素，比如设置 id="demo"
在 demo.js 中可以直接获取到 demo，并且 demo 就等于 script 这个元素

react 和 vue2.x vue3.x 的错误如何捕获

fetch 请求如何捕获错误

create-react-app 报错之后，出现一个 iframe，点击报错的方块，会直接跳转到 vscode 对饮的代码位置，如何实现

无法捕获 script image 等资源加载失败的错误
