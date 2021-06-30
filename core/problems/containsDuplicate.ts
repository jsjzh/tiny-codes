import { getFileName } from '../utils';
import Logger from '../shared/logger';

const logger = new Logger(getFileName(__filename));

// 给定一个整数数组，判断是否存在重复元素。
// 如果存在一值在数组中出现至少两次，函数返回 true。如果数组中每个元素都不相同，则返回 false。

// 输入: [1,2,3,1]
// 输出: true

// 输入: [1,2,3,4]
// 输出: false

// 输入: [1,1,1,3,3,4,3,2,4,2]
// 输出: true

const code = (nums: number[]): boolean => {
  if (nums.length === 1) return false;
  for (let i = 0; i < nums.length; i++) {
    if (nums.indexOf(nums[i], i + 1) !== -1) return true;
  }
  return false;
};

const better = (nums: number[]): boolean => {
  if (nums.length === 1) return false;
  const arr = new Array(nums.length).fill(false);
  for (let i = 0; i < nums.length; i++) {
    if (arr[nums[i]]) return true;
    arr[nums[i]] = true;
  }

  return false;
};

const better2 = (nums: number[]): boolean => {
  if (nums.length === 1) return false;
  return Array.from(new Set(nums)).length !== nums.length;
};

export default () => {
  logger.time(() => logger.log(code([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])));

  logger.time(() => logger.log(better([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])));

  logger.time(() => logger.log(better2([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])));
};
