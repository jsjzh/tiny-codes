import { getFileName } from '../utils';
import Logger from '../shared/logger';

const logger = new Logger(getFileName(__filename));

// 一个长度为 n-1 的递增排序数组中的所有数字都是唯一的，并且每个数字都在范围 0 ～ n-1 之内。在范围 0 ～ n-1 内的 n 个数字中有且只有一个数字不在该数组中，请找出这个数字。

// 1 <= 数组长度 <= 10000

// 输入: [0,1,3]
// 输出: 2

// 输入: [0,1,2,3,4,5,6,7,9]
// 输出: 8

const code = (nums: number[]): number => {
  for (let i = 0; i <= nums.length; i++) if (i !== nums[i]) return i;
  return 0;
};

// const better = (nums: number[]): number => {};

export default () => {
  logger.time(() => logger.log(code([0])));
  logger.time(() => logger.log(code([1])));
  logger.time(() => logger.log(code([0, 1])));
  logger.time(() => logger.log(code([0, 1, 3])));
  logger.time(() => logger.log(code([0, 1, 2, 3, 4, 5, 6, 7, 9])));

  // logger.time(() => logger.log(better([0, 1, 2, 3, 4, 5, 6, 7, 9])), 'better');
};
