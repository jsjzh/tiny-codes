/* eslint-disable no-param-reassign */
import { getFileName } from '../utils';
import Logger from '../shared/logger';

const logger = new Logger(getFileName(__filename));

// 给你一个整数 n，请你判断该整数是否是 2 的幂次方。如果是，返回 true；否则，返回 false。
// 如果存在一个整数 x 使得 n == 2^x，则认为 n 是 2 的幂次方。

// -2^31 <= n <= 2^31 - 1

// 输入：n = 1
// 输出：true
// 解释：2^0 = 1

// 输入：n = 16
// 输出：true
// 解释：2^4 = 16

// 输入：n = 3
// 输出：false

// 输入：n = 4
// 输出：true

// 输入：n = 5
// 输出：false

// 进阶：你能够不使用循环/递归解决此问题吗？

const code = (n: number): boolean => {
  if (n <= 0) return false;
  if (n === 1) return true;

  while (n !== 1) {
    if (Math.floor(n) !== n) return false;
    n = n / 2;
  }

  return true;
};

// n 二进制最高位为 1，其余所有位为 0；
// n − 1 二进制最高位为 0，其余所有位为 1；

// (0001) & (0000) === 0
// (0010) & (0001) === 0
// (0100) & (0011) === 0
// (1000) & (0111) === 0

const better = (n: number): boolean => {
  return n > 0 && (n & (n - 1)) === 0;
};

export default () => {
  logger.time(() => logger.log(code(1)));
  logger.time(() => logger.log(code(16)));
  logger.time(() => logger.log(code(3)));
  logger.time(() => logger.log(code(4)));
  logger.time(() => logger.log(code(5)));

  logger.time(() => logger.log(better(1)));
  logger.time(() => logger.log(better(16)));
  logger.time(() => logger.log(better(3)));
  logger.time(() => logger.log(better(4)));
  logger.time(() => logger.log(better(5)));
};
