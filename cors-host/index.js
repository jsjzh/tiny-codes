const sleep = (time) =>
  new Promise((resolve) =>
    setTimeout(() => {
      console.log(promiseVariable);
      resolve();
    }, time)
  );

try {
  // 无法捕获语法错误
  // function demo()
  // 无法捕获异步错误
  setTimeout(() => {
    console.log(variable);
  }, 1000);
  // 通过给异步函数包装一个 try catch 可以捕获错误
  setTimeout(() => {
    try {
      console.log(variable);
    } catch (error) {
      throw error;
    }
  }, 1000);
  // await 也无法捕获
  (async () => {
    await sleep(1000);
  })();
  // 能够捕获错误
  console.log(variable);
} catch (error) {
  throw error;
}
