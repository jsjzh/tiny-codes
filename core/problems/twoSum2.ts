import { getFileName } from '../utils';
import Logger from '../shared/logger';

const logger = new Logger(getFileName(__filename));

// 给定一个已按照升序排列的整数数组 numbers，请你从数组中找出两个数满足相加之和等于目标数 target。
// 函数应该以长度为 2 的整数数组的形式返回这两个数的下标值。numbers 的下标 从 1 开始计数，所以答案数组应当满足 1 <= answer[0] < answer[1] <= numbers.length。
// 你可以假设每个输入只对应唯一的答案，而且你不可以重复使用相同的元素。

// 2 <= numbers.length <= 3 * 10^4
// -1000 <= numbers[i] <= 1000
// numbers 按 递增顺序 排列
// -1000 <= target <= 1000
// 仅存在一个有效答案

// 输入：numbers = [2,7,11,15], target = 9
// 输出：[1,2]
// 解释：2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。

// 输入：numbers = [2,3,4], target = 6
// 输出：[1,3]

// 输入：numbers = [-1,0], target = -1
// 输出：[1,2]

// [5,25,75]
// 100

const code = (numbers: number[], target: number): number[] => {
  if (numbers.length === 2) return [1, 2];
  for (let i = 0; i < numbers.length; i++) {
    // 因为是升序排列，这里跳过了”如果加上最大的数，还是比 target 小“的计算
    if (target - numbers[i] > numbers[numbers.length - 1]) continue;
    for (let t = i + 1; t < numbers.length; t++) {
      if (numbers[i] + numbers[t] === target) return [i + 1, t + 1];
      if (numbers[i] + numbers[t] > target) break;
    }
  }
  return [];
};

// const better = (numbers: number[], target: number): number[] => {
//   if (numbers.length === 2) return [1, 2];
// };

export default () => {
  // logger.time(() => logger.log(code([2, 7, 11, 15], 9)));
  logger.time(() => logger.log(code([5, 25, 75], 100)));

  // logger.time(() => logger.log(better([2, 7, 11, 15], 9)));
};
