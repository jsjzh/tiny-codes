import { getFileName } from '../utils';
import Logger from '../shared/logger';

const logger = new Logger(getFileName(__filename));

// 找出数组中重复的数字。
// 在一个长度为 n 的数组 nums 里的所有数字都在 0 ～ n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。

// 2 <= n <= 100000

// 输入：[2, 3, 1, 0, 2, 5, 3]
// 输出：2 或 3

const code = (nums: number[]): number => {
  if (nums.length === 2) return nums[0];

  const set = new Set();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (!set.has(num)) set.add(num);
    else return num;
  }

  return nums[0];
};

// const better = (nums: number[]): number => {};

export default () => {
  logger.time(() => logger.log(code([2, 3, 1, 0, 2, 5, 3])));

  // logger.time(() => logger.log(better([2, 3, 1, 0, 2, 5, 3])));
};
