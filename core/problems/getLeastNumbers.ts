import { getFileName } from '../utils';
import Logger from '../shared/logger';

const logger = new Logger(getFileName(__filename));

// 输入整数数组 arr，找出其中最小的 k 个数。例如，输入 4、5、1、6、2、7、3、8 这 8 个数字，则最小的 4 个数字是1、2、3、4。

// 0 <= k <= arr.length <= 10000
// 0 <= arr[i] <= 10000

// 输入：arr = [3,2,1], k = 2
// 输出：[1,2] 或者 [2,1]

// 输入：arr = [0,1,2,1], k = 1
// 输出：[0]

const code = (arr: number[], k: number): number[] => {
  if (!k) return [];
  if (k === arr.length) return arr;
  if (arr.length === 1) return [arr[0]];

  return arr.sort((a, b) => a - b).slice(0, k);
};

// 快排，待看
// https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof/solution/jian-zhi-offer-40-zui-xiao-de-k-ge-shu-j-9yze/

// const better = (arr: number[], k: number): number[] => {};

export default () => {
  logger.time(() => logger.log(code([3, 2, 1], 2)));
  logger.time(() => logger.log(code([0, 1, 2, 1], 1)));
  // logger.time(() =>
  //   logger.log(
  //     code(
  //       [
  //         0, 1, 1, 1, 4, 5, 3, 7, 7, 8, 10, 2, 7, 8, 0, 5, 2, 16, 12, 1, 19, 15,
  //         5, 18, 2, 2, 22, 15, 8, 22, 17, 6, 22, 6, 22, 26, 32, 8, 10, 11, 2,
  //         26, 9, 12, 9, 7, 28, 33, 20, 7, 2, 17, 44, 3, 52, 27, 2, 23, 19, 56,
  //         56, 58, 36, 31, 1, 19, 19, 6, 65, 49, 27, 63, 29, 1, 69, 47, 56, 61,
  //         40, 43, 10, 71, 60, 66, 42, 44, 10, 12, 83, 69, 73, 2, 65, 93, 92, 47,
  //         35, 39, 13, 75,
  //       ],
  //       75,
  //     ),
  //   ),
  // );

  // logger.time(() => logger.log(better('')));
};
