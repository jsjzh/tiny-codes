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
 * 这种代码书写错误无法捕获到错误
 * 类似这种错应该在开发检查阶段就被排除掉
 */
// try {
//   function foo()
// } catch (error) {
//   throw error
// }

// try {
//   console.log(helloWorld);
// } catch (error) {
//   throw error;
// }

// try {
//   undefined.map(console.log);
// } catch (error) {
//   throw error;
// }

/**
 * try catch 无法捕获异步错误
 * 有两种解决方案
 *    1. 通过给异步函数包装 try catch
 *    2. 通过 window.onerror 兜底捕获
 * 另外，需要注意的一点是
 * promise 的 catch 无法捕获语法错误
 * 只能捕获到 reject 的错误
 * 关于 reject 我们有另外的兜底方案
 */
// try {
//   sleepResolve(1000)
//     .then(() => {
//       console.log("promise then");
//     })
//     .catch(() => {
//       console.log("promise catch");
//     });
// } catch (error) {
//   // 无效，无法捕获到错误
//   throw error;
// }

/**
 * async await 同样也是如此
 * 若是语法错误，比如访问了未知变量，也将抛出错误
 */
// try {
//   (async () => {
//     await sleepResolve(1000);
//   })();
// } catch (error) {
//   // 无效，无法捕获到错误
//   // throw error;
// }

/**
 * 这里的 sleepReject 中
 * reject 了一个 new Error('...')
 * 若使用了 promise.catch 则会被捕获
 * 若未使用 catch，则所有的错误会被 window.onunhandledrejection 捕获
 */
// try {
//   sleepReject(1000).then(() => {
//     console.log("promise then");
//   });
// } catch (error) {
//   //   // 无效，无法捕获到错误
//   //   // throw error;
// }
