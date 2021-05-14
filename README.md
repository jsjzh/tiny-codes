# tiny-codes demo/study-post-request

## 说明

这里是关于「Form Data 和 Request Payload」的文章 demo 合集。

## 使用

打开两个终端，分别启动前端和后端服务，地址栏输入 `http://127.0.0.1:3000`，打开调试工具即可。

### npm run start:frontend

启动前端服务，前端主要是发送了一个 http 请求，具体的代码可以看 `index.html` 和 `index.js`。

> `frontend-server.js` 只是单纯的起了一个服务，该服务会在用户访问 `http://127.0.0.1:3000` 时返回 `index.html` 和 `index.js`。

### npm run start:backend

启动后端服务，为前端服务提供接口，该服务会将接收到的请求体以如下方式返回，具体处理可以看 `backend-server.js`。

```json
{
  "data": {},
  "jsonParseData": {},
  "qsParseData": {}
}
```
