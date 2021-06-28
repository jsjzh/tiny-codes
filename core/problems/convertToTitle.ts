import { getFileName } from '../utils';
import Logger from '../shared/logger';

const logger = new Logger(getFileName(__filename));

// 给定一个正整数，返回它在 Excel 表中相对应的列名称。

// 1 -> A
// 2 -> B
// 3 -> C
// ...
// 26 -> Z
// 27 -> AA
// 28 -> AB
// ...

// 输入: 1
// 输出: "A"

// 输入: 701
// 输出: "ZY"

const code = (columnNumber: number): string => {};

// const better = (columnNumber: number): string => {};

export default () => {
  logger.time(() => logger.log(code(702)));

  // logger.time(() => logger.log(better(10)));
};
