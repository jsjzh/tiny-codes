const sleeps = (time) =>
  new Promise((resolve) =>
    setTimeout(() => {
      console.log(promiseDemo);
      resolve();
    }, time)
  );

try {
  // 无法捕获语法错误
  // function demo()
  // 无法捕获异步错误
  setTimeout(() => {
    console.log(demo);
  }, 1000);
  // 通过给异步函数包装一个 try catch 可以捕获错误
  setTimeout(() => {
    try {
      console.log(demo);
    } catch (error) {
      throw error;
    }
  }, 1000);
  // await 也无法捕获
  (async () => {
    await sleep(1000);
  })();
  // 能够捕获错误
  console.log(demo);

  // null.map();
} catch (error) {
  throw error;
  console.log("---- try catch ----");
  console.log("try catch name", error.name);
  console.log("try catch message", error.message);
  console.log("try catch stack", error.stack);
  // console.log(error.stack.split("at").map((item) => item.trim()));
  console.log("try catch error", error);
  console.log("---- try catch ----");
}
