import { getFileName } from '../utils';
import Logger from '../shared/logger';

const logger = new Logger(getFileName(__filename));

// 输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。
// 要求时间复杂度为O(n)。

//  1 <= arr.length <= 10^5
// -100 <= arr[i] <= 100

// 输入: nums = [-2,1,-3,4,-1,2,1,-5,4]
// 输出: 6
// 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。

const code = (nums: number[]): number => {
  if (nums.length === 1) return nums[0];

  let sum = nums[0];
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    sum = Math.max(nums[i] + sum, nums[i]);
    max = Math.max(max, sum);
  }

  return max;
};

// const better = (nums: number[]): number => {};

export default () => {
  logger.time(() => logger.log(code([-2, 1, -3, 4, -1, 2, 1, -5, 4])));

  // logger.time(() => logger.log(better([-2, 1, -3, 4, -1, 2, 1, -5, 4])), 'better');
};
