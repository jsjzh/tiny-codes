import { getFileName } from '../utils';
import Logger from '../shared/logger';

const logger = new Logger(getFileName(__filename));

// 输入一个正整数 target，输出所有和为 target 的连续正整数序列（至少含有两个数）。
// 序列内的数字由小到大排列，不同序列按照首个数字从小到大排列。

// 1 <= target <= 10^5

// 输入：target = 9
// 输出：[[2,3,4],[4,5]]

// 输入：target = 15
// 输出：[[1,2,3,4,5],[4,5,6],[7,8]]

const code = (target: number): number[][] => {
  if (target === 1) return [[1]];
  if (target === 2) return [[2]];

  const arr: number[][] = [];
  let center = Math.ceil(target / 2);
  let left = 1;
  let right = 2;
  let sum = left + right;

  while (right <= center) {
    if (sum === target) {
      const temp = [];
      for (let i = left; i <= right; i++) temp.push(i);
      arr.push(temp);
      sum = sum - left;
      left++;
      right++;
      sum = sum + right;
      continue;
    }

    if (sum < target) {
      right++;
      sum = sum + right;
      continue;
    }

    if (sum > target) {
      sum = sum - left;
      left++;
      continue;
    }
  }

  return arr;
};

// const better = (target: number): number[][] => {};

export default () => {
  logger.time(() => logger.log(code(100)));

  // logger.time(() => logger.log(better(15)));
};
