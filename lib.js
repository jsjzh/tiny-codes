// 捕获资源加载错误
// 如果使用 new Image src 的方式来上报信息
// 要注意筛选掉是因为 new Image 的接口报错才错误的信息
const sourceErrorListener = (...args) => {
  console.log("sourceErrorListener", args);
};

window.addEventListener("error", sourceErrorListener, true);

// 捕获 try catch 的错误
// 捕获其他位置的错误
const codeListener = (...args) => {
  console.log("codeListener", args);
};

const tempWindowOnerror = window.onerror;
window.onerror = codeListener;

// 捕获 promise 中，reject 了错误
// 但是未 catch 的错误
const promiseRejectListener = (...args) => {
  console.log("promiseRejectListener", args);
};

const tempWindowOnunhandledrejection = window.onunhandledrejection;
window.onunhandledrejection = promiseRejectListener;

// 捕获 console.error 的错误
const logListener = (...args) => {
  console.log("logListener", args);
};

const tempConsoleError = console.error;
console.error = logListener;
