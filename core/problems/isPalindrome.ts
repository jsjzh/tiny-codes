import { getFileName } from '../utils';
import Logger from '../shared/logger';

const logger = new Logger(getFileName(__filename));

// 给你一个整数 x，如果 x 是一个回文整数，返回 true；否则，返回 false。
// 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。例如，121 是回文，而 123 不是。

const code = (x: number): boolean => {
  if (x < 0) return false;
  if (x === 0) return true;
  return !!x;
};

export default () => {
  logger.time();
  logger.log(code(139847329));
  logger.timeEnd();
};
