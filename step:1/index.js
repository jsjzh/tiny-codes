/**
 * message {String}: 错误信息
 * fileName {String}: 发生错误的文件
 * col {Number}: 错误代码的行
 * row {Number}: 错误代码的列
 * error {Error}: Error 对象
 */
window.onerror = (message, fileName, col, row, error) => {
  console.log("message: ", message);
  console.log("fileName: ", fileName);
  console.log("col: ", col);
  console.log("row: ", row);
  console.log("error.name: ", error.name);
  console.log("error.message: ", error.message);
  console.log("error: ", error);
};

// ----------------------------------------------

// 同步执行代码，通过 try catch 可以捕获错误
try {
  console.log(helloWorld);
} catch (error) {
  // 在这里做一些自定义处理
  console.log("我是自定义处理函数");
  // 若做了自定义处理后，仍旧需要上报错误，可以增加 throw error
  // throw error;
}

// ----------------------------------------------

// // 未使用 try catch 捕获错误
// // 说明我们未预料到这段代码可能出错
// console.log(process);

// ----------------------------------------------

const promise = () =>
  new Promise(() => {
    setTimeout(() => {
      // 这里访问了一个未定义变量
      // 这是异步函数中的代码执行出错
      console.log(helloWorld);
    }, 1000);
  });

try {
  promise();
} catch (error) {
  // 通过 try catch 无法捕获到错误 error
  // 只能通过 window.onerror 捕获
  console.log("can't catch promise error");
}
