import { getFileName } from '../utils';
import Logger from '../shared/logger';

const logger = new Logger(getFileName(__filename));

// 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数位于数组的前半部分，所有偶数位于数组的后半部分。

// 0 <= nums.length <= 50000
// 1 <= nums[i] <= 10000

// 输入：nums = [1,2,3,4]
// 输出：[1,3,2,4]
// 注：[3,1,2,4] 也是正确的答案之一。

const code = (nums: number[]): number[] => {
  if (!nums.length || nums.length === 1) return nums;

  const left = [];
  const right = [];

  for (let i = 0; i < nums.length; i++)
    nums[i] % 2 ? left.push(nums[i]) : right.push(nums[i]);

  return left.concat(right);
};

const better = (nums: number[]): number[] => {
  if (!nums.length || nums.length === 1) return nums;

  const len = nums.length;
  let i = 0;
  let j = 0;

  while (j < len) {
    if (nums[j] % 2) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
      j++;
    } else j++;
  }

  return nums;
};

export default () => {
  logger.time(() => logger.log(code([1, 2, 3, 4])));

  logger.time(() => logger.log(better([1, 2, 3, 4])), 'better');
};
