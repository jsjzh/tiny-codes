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
  error && console.log("error.name: ", error.name);
  error && console.log("error.message: ", error.message);
  console.log("error: ", error);
};
