const reportError = (...args) => {
  console.log(args);
};

// 捕获 try catch 的错误
// 捕获其他位置的错误
const codeListener = (message, fileName, col, row, error) => {
  reportError(error.name, fileName, error.message, col, row);
};

// 捕获 promise 中，reject 了错误
// 但是未 catch 的错误
const promiseRejectListener = (promiseRejectEvent) => {
  const reason = promiseRejectEvent.reason;

  if (reason) {
    const message = reason.message;
    const stackArr = reason.stack.split("at").map((item) => item.trim());
    const fileNameAndColRowInfo = stackArr[stackArr.length - 1];
    const [, fileName, col, row] = new RegExp(/^(.+)\:(\d+)\:(\d+)/).exec(
      fileNameAndColRowInfo
    );

    reportError(
      "promiseRejectError",
      fileName,
      message,
      Number(col),
      Number(row)
    );
  } else {
    reportError("promiseRejectError", "unknown", "unknown", 0, 0);
  }
};

// 捕获 console.error 的错误
const logListener = (...args) => {
  console.log("logListener", args);
};

// 捕获资源加载错误
// 如果使用 new Image src 的方式来上报信息
// 要注意筛选掉是因为 new Image 的接口报错才错误的信息
const sourceErrorListener = (sourceErrorEvent) => {
  const targetElement = sourceErrorEvent.target || sourceErrorEvent.srcElement;

  const sourceType =
    (targetElement instanceof HTMLScriptElement && "js") ||
    (targetElement instanceof HTMLLinkElement && "css") ||
    (targetElement instanceof HTMLImageElement && "image") ||
    "";

  if (!sourceType) return;

  const url = targetElement.src || targetElement.href;
  reportError("sourceLoadError", sourceType, url);
};

const tempWindowOnerror = window.onerror;

window.onerror = (...args) => {
  typeof tempWindowOnerror === "function" && tempWindowOnerror.apply(this.args);
  codeListener.apply(this, args);
};

const tempWindowOnunhandledrejection = window.onunhandledrejection;

window.onunhandledrejection = (...args) => {
  typeof tempWindowOnunhandledrejection === "function" &&
    tempWindowOnunhandledrejection.apply(this.args);
  promiseRejectListener.apply(this, args);
};

const tempConsoleError = console.error;

console.error = (...args) => {
  typeof tempConsoleError === "function" && tempConsoleError.apply(this.args);
  tempConsoleError.apply(this.args);
  logListener.apply(this, args);
};

window.addEventListener("error", sourceErrorListener, true);
