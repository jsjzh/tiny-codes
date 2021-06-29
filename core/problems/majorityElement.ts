import { getFileName } from '../utils';
import Logger from '../shared/logger';

const logger = new Logger(getFileName(__filename));

// 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数大于 n/2 的元素。
// 你可以假设数组是非空的，并且给定的数组总是存在多数元素。

// 输入：[3,2,3]
// 输出：3

// 输入：[2,2,1,1,1,2,2]
// 输出：2

// 尝试设计时间复杂度为 O(n)、空间复杂度为 O(1) 的算法解决此问题。

const code = (nums: number[]): number => {
  const map: { [k: number]: number } = {};
  const n = nums.length / 2;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    map[num] ? map[num]++ : (map[num] = 1);
    if (map[num] > n) return num;
  }
  return 0;
};

// 摩尔投票法思路
// 候选人 (cand_num) 初始化为 nums[0]，票数 count 初始化为 1。
// 当遇到与 cand_num 相同的数，则票数 count = count + 1，否则票数 count = count - 1。
// 当票数 count 为 0 时，更换候选人，并将票数 count 重置为 1。
// 遍历完数组后，cand_num 即为最终答案。

// 为何这行得通呢？
// 投票法是遇到相同的则票数 + 1，遇到不同的则票数 - 1。
// 且“多数元素”的个数 > ⌊ n/2 ⌋，其余元素的个数总和 <= ⌊ n/2 ⌋。
// 因此“多数元素”的个数 - 其余元素的个数总和的结果肯定 >= 1。
// 这就相当于每个“多数元素”和其他元素两两相互抵消，抵消到最后肯定还剩余至少 1 个“多数元素”。

// 无论数组是 1 2 1 2 1，亦或是 1 2 2 1 1，总能得到正确的候选人。

const better = (nums: number[]): number => {
  let candNum = nums[0];
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (candNum === nums[i]) ++count;
    else if (--count === 0) {
      candNum = nums[i];
      count = 1;
    }
  }
  return candNum;
};

export default () => {
  logger.time(() => logger.log(code([3, 2, 3])));
  logger.time(() => logger.log(code([2, 2, 1, 1, 1, 2, 2])));

  logger.time(() => logger.log(better([2, 2, 1, 1, 1, 2, 2])));
};
