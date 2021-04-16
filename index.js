const sleepResolve = (timer) =>
  new Promise(
    (resolve) =>
      setTimeout(() => {
        console.log(helloWorld);
        resolve();
      }),
    timer
  );

const sleepReject = (timer) =>
  new Promise(
    (resolve, reject) =>
      setTimeout(() => {
        reject(new Error("promise reject"));
      }),
    timer
  );

/**
 * 这种代码书写错误应该在开发检查阶段就被排除掉
 */
// function foo()

/**
 * 代码执行错误的情况
 */
// console.log(helloWorld);
// undefined.map(console.log);

/**
 * 捕获异步代码执行错误
 * 有两种解决方案
 *    1. 通过给异步函数包装 try catch
 *    2. 通过 window.onerror 兜底捕获
 * 另外，需要注意的一点是
 * promise 的 catch 无法捕获语法错误
 * 只能捕获到 reject 的错误
 * 关于 reject 我们有另外的兜底方案
 */
// sleepResolve(1000)
//   .then(() => {
//     console.log("promise then");
//   })
//   .catch(() => {
//     console.log("promise catch");
//   });

/**
 * async await 同样也是如此
 * 若是语法错误，比如访问了未知变量，也将抛出错误
 */
// (async () => {
//   await sleepResolve(1000);
// })();

/**
 * 这里的 sleepReject 中
 * reject 了一个 new Error('...')
 * 若使用了 promise.catch 则会被捕获
 * 若未使用 catch，则所有的错误会被 window.onunhandledrejection 捕获
 */
// sleepReject(1000).then(() => {
//   console.log("promise then");
// });

window.onerror = (message, fileName, col, row, error) => {
  console.log("message", message);
  console.log("fileName", fileName);
  console.log("col", col);
  console.log("row", row);
  console.log("error.name", error.name);
  console.log("error.message", error.message);
  console.log("error", error);
};

console.log(process);
