import { getFileName } from '../utils';
import Logger from '../shared/logger';

const logger = new Logger(getFileName(__filename));

// 给定两个数组，编写一个函数来计算它们的交集。
// 输出结果中的每个元素一定是唯一的。
// 我们可以不考虑输出结果的顺序。

// 输入：nums1 = [1,2,2,1], nums2 = [2,2]
// 输出：[2]

// 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// 输出：[9,4]

const code = (nums1: number[], nums2: number[]): number[] => {
  const arr1 = Array.from(new Set(nums1));
  const arr2 = Array.from(new Set(nums2));

  const [big, small] = arr1.length > arr2.length ? [arr1, arr2] : [arr2, arr1];

  const result: number[] = [];

  for (let i = 0; i < small.length; i++) big.includes(small[i]) && result.push(small[i]);

  return result;
};

// const better = (nums1: number[], nums2: number[]): number[] => {};

export default () => {
  logger.time(() => logger.log(code([1, 2, 2, 1], [2, 2])));
  logger.time(() => logger.log(code([4, 9, 5], [9, 4, 9, 8, 4])));

  // logger.time(() => logger.log(better([1, 2, 2, 1], [2, 2])), 'better');
};
