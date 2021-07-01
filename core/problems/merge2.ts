/* eslint-disable max-params */
/* eslint-disable no-param-reassign */
import { getFileName } from '../utils';
import Logger from '../shared/logger';

const logger = new Logger(getFileName(__filename));

// 给定两个排序后的数组 A 和 B，其中 A 的末端有足够的缓冲空间容纳 B。
// 编写一个方法，将 B 合并入 A 并排序。
// 初始化 A 和 B 的元素数量分别为 m 和 n。

// A.length == n + m

// 输入：
// A = [1,2,3,0,0,0], m = 3
// B = [2,5,6],       n = 3
// 输出：[1,2,2,3,5,6]

/**
 Do not return anything, modify A in-place instead.
 */
const code = (A: number[], m: number, B: number[], n: number): void => {
  if (!n) return;

  m = m - 1;
  n = n - 1;
  let target = m + n + 1;

  while (m >= 0 || n >= 0) {
    const tA = A[m];
    const tB = B[n];
    if (tA >= tB || tB === undefined) {
      A[target] = tA;
      m--;
    } else if (tB > tA || tA === undefined) {
      A[target] = tB;
      n--;
    }
    target--;
  }
};

// const better = (A: number[], m: number, B: number[], n: number): void => {};

export default () => {
  logger.time(() => logger.log(code([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)));

  logger.time(() =>
    logger.log(code([4, 0, 0, 0, 0, 0], 1, [1, 2, 3, 5, 6], 5)),
  );

  logger.time(() => logger.log(code([-1, -1, 0, 0, 0, 0], 4, [-1, 0], 2)));

  // logger.time(() => logger.log(better([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)));
};
