import { getFileName } from '../utils';
import Logger from '../shared/logger';

const logger = new Logger(getFileName(__filename));

// 给定一个整数 n，返回 n! 结果尾数中零的数量。

// 输入：3
// 输出：0
// 解释：3! = 6, 尾数中没有零。

// 输入：5
// 输出：1
// 解释：5! = 120, 尾数中有 1 个零.

// 说明：你算法的时间复杂度应为 O(log n)。

const code = (n: number): number => {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    let t = i;
    while (t % 5 === 0) {
      t = t / 5;
      count++;
    }
  }
  return count;
};

// const better = (n: number): number => {};

export default () => {
  logger.time(() => logger.log(code(3)));

  // logger.time(() => logger.log(better(25)));
};
