import { getFileName } from '../utils';
import Logger from '../shared/logger';

const logger = new Logger(getFileName(__filename));

// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
// 你可以假设数组中无重复元素。

const code = (nums: number[], target: number): number => {
  if (!nums.length || nums[0] > target) return 0;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num < target && (nums[i + 1] > target || nums[i + 1] === undefined)) {
      return i + 1;
    }
    if (num === target) {
      return i;
    }
  }

  return 0;
};

// const best = (str: string): boolean => {
//   return !!str;
// };

export default () => {
  logger.timeStart();
  logger.log(code([1, 3, 5, 6], 0));
  logger.timeEnd();

  // logger.timeStart();
  // logger.log(best(''));
  // logger.timeEnd();
};
