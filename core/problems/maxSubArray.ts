import { getFileName } from '../utils';
import Logger from '../shared/logger';

const logger = new Logger(getFileName(__filename));

// 给定一个整数数组 nums，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

// 1 <= nums.length <= 3 * 10^4
// -10^5 <= nums[i] <= 10^5

// 输入：nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// 输出：6
// 解释：连续子数组 [4, -1, 2, 1] 的和最大，为 6。

// 进阶：如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。

const code = (nums: number[]): number => {
  if (nums.length === 1) return nums[0];

  let sum = 0;
  let max = nums[0];

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    sum = Math.max(num + sum, num);
    max = Math.max(max, sum);
  }

  return max;
};

const better = (nums: number[]): number => {
  let pre = 0;
  let maxAns = nums[0];
  nums.forEach((x) => {
    pre = Math.max(pre + x, x);
    maxAns = Math.max(maxAns, pre);
  });
  return maxAns;
};

export default () => {
  logger.timeStart();
  logger.log(code([5, 4, -1, 7, 8]));
  logger.timeEnd();

  logger.timeStart();
  logger.log(better([5, 4, -1, 7, 8]));
  logger.timeEnd();
};
