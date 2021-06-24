/* eslint-disable no-param-reassign */
/* eslint-disable max-params */
import { getFileName } from '../utils';
import Logger from '../shared/logger';

const logger = new Logger(getFileName(__filename));

// 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
// 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。你可以假设 nums1 的空间大小等于 m + n，这样它就有足够的空间保存来自 nums2 的元素。

// nums1.length == m + n
// nums2.length == n
// 0 <= m, n <= 200
// 1 <= m + n <= 200
// -10^9 <= nums1[i], nums2[i] <= 10^9

// 输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// 输出：[1,2,2,3,5,6]

/**
 Do not return anything, modify nums1 in-place instead.
 */
const code = (nums1: number[], m: number, nums2: number[], n: number): void => {
  if (n === 0) return;
  if (m === 0) {
    let _n = n - 1;
    while (_n >= 0) {
      nums1[_n] = nums2[_n];
      _n--;
    }
    return;
  }

  let _m = m - 1;
  let _n = n - 1;
  let target = m + n - 1;

  while (_m >= 0 || _n >= 0) {
    const n1 = _m >= 0 ? nums1[_m] : -Infinity;
    while (_n >= 0) {
      const n2 = nums2[_n];
      if (n2 < n1) break;
      nums1[target] = n2;
      target--;
      _n--;
    }
    if (_m >= 0) {
      nums1[target] = n1;
      target--;
      _m--;
    }
  }
};

// const best = (str: string): boolean => {
//   return !!str;
// };

// [4,0,0,0,0,0]
// 1
// [1,2,3,5,6]
// 5

export default () => {
  logger.timeStart();
  logger.log(code([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
  // logger.log(code([0], 0, [1], 1));
  // logger.log(code([2, 0], 1, [1], 1));
  // logger.log(code([4, 0, 0, 0, 0, 0], 1, [1, 2, 3, 5, 6], 5));
  logger.timeEnd();

  // logger.timeStart();
  // logger.log(best(''));
  // logger.timeEnd();
};
