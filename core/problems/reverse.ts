/* eslint-disable @typescript-eslint/no-loss-of-precision */
/* eslint-disable no-param-reassign */
import { getFileName } from '../utils';
import Logger from '../shared/logger';

const logger = new Logger(getFileName(__filename));

// 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。
// 如果反转后整数超过 32 位的有符号整数的范围 [−2^31, 2^31 − 1] ，就返回 0。
// 假设环境不允许存储 64 位整数（有符号或无符号）。

const code = (x: number): number => {
  const flag = x > 0;
  !flag && (x = Math.abs(x));
  const n = Number(x.toString().split('').reverse().join(''));
  if (Number.isNaN(n) || n > Math.pow(2, 31)) return 0;
  return flag ? n : -n;
};

export default () => {
  logger.time();
  logger.log(code(139847329));
  logger.timeEnd();
};
