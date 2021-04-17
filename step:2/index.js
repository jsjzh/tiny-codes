const promise = () =>
  new Promise(() => {
    setTimeout(() => {
      // 这里是在异步函数中访问了未定义变量
      console.log(helloWorld);
    }, 1000);
  });

promise()
  // promise.catch 无法捕获到 helloWorld 的错误
  .catch(() => {
    console.log("can't catch error");
  });

// ----------------------------------------------

const promise2 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      // 通过 reject 抛出错误
      reject(new Error("promise reject"));
    }, 1000);
  });

promise2().catch((error) => {
  // promise.catch 能够捕获到 reject
  console.log("error.name: ", error.name);
  console.log("error.message: ", error.message);
  console.log("error: ", error);
});

// ----------------------------------------------

window.onunhandledrejection = (promiseRejectEvent) => {
  // Error 对象，由 reject(new Error()) 生成
  const reason = promiseRejectEvent.reason;
  if (reason) {
    console.log("reason.name: ", reason.name);
    console.log("reason.message: ", reason.message);
    console.log("reason.stack: ", reason.stack);
  }
};

const promise3 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      // 通过 reject 抛出错误
      reject(new Error("promise reject"));
    }, 1000);
  });

// 未使用 catch，错误将被 window.onunhandledrejection 捕获
promise3();
