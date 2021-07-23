import { getFileName } from '../utils';
import Logger from '../shared/logger';

const logger = new Logger(getFileName(__filename));

// 给定两个数组，编写一个函数来计算它们的交集。
// 输出结果中每个元素出现的次数，应与元素在两个数组中出现次数的最小值一致。
// 我们可以不考虑输出结果的顺序。

// 输入：nums1 = [1,2,2,1], nums2 = [2,2]
// 输出：[2,2]

// 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// 输出：[4,9]

// 如果给定的数组已经排好序呢？你将如何优化你的算法？
// 如果 nums1 的大小比 nums2 小很多，哪种方法更优？
// 如果 nums2 的元素存储在磁盘上，内存是有限的，并且你不能一次加载所有的元素到内存中，你该怎么办？

const code = (nums1: number[], nums2: number[]): number[] => {
  const result: number[] = [];
  const arrMap = [];

  for (let i = 0; i < nums1.length; i++)
    arrMap[nums1[i]] ? arrMap[nums1[i]]++ : (arrMap[nums1[i]] = 1);

  for (let j = 0; j < nums2.length; j++) {
    if (!arrMap[nums2[j]]) continue;

    result.push(nums2[j]);
    arrMap[nums2[j]]--;
  }

  return result;
};

// const better = (nums1: number[], nums2: number[]): number[] => {};

export default () => {
  logger.time(() => logger.log(code([1, 2, 2, 1], [2, 2])));

  // logger.time(() => logger.log(better([1, 2, 2, 1], [2, 2])), 'better');
};
