import { getFileName } from '../utils';
import Logger from '../shared/logger';

const logger = new Logger(getFileName(__filename));

// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出和为目标值 target 的那两个整数，并返回它们的数组下标。
// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
// 你可以按任意顺序返回答案。

// 2 <= nums.length <= 10^4
// -10^9 <= nums[i] <= 10^9
// -10^9 <= target <= 10^9
// 只会存在一个有效答案

const code = (nums: number[], target: number): number[] => {
  const map = { [nums[0]]: 0 };
  for (let i = 1; i < nums.length; i++) {
    const n = nums[i];
    const x = target - n;
    // step:2. 如果发现 x 存在于 map，就直接返回 i
    if (map[x] !== undefined) return [i, map[x]];
    // step:1. 这里把每个元素都给 map，然后看上面的逻辑
    map[n] = i;
  }
  return [];
};

export default () => {
  logger.time();
  logger.log(code([2, 7, 11, 15], 9));
  logger.timeEnd();
};
