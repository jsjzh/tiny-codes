import { getFileName } from '../utils';
import Logger from '../shared/logger';

const logger = new Logger(getFileName(__filename));

// 给你一个数组 nums 和一个值 val，你需要原地移除所有数值等于 val 的元素，并返回移除后数组的新长度。
// 不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并原地修改输入数组。
// 元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。

// 0 <= nums.length <= 100
// 0 <= nums[i] <= 50
// 0 <= val <= 100

// 输入：nums = [0,1,2,2,3,0,4,2], val = 2
// 输出：5, nums = [0,1,4,0,3]
// 解释：函数应该返回新的长度 5, 并且 nums 中的前五个元素为 0, 1, 3, 0, 4。注意这五个元素可为任意顺序。你不需要考虑数组中超出新长度后面的元素。

const code = (nums: number[], val: number): number => {
  const len = nums.length;
  if (!len) return 0;

  let fast = 0;
  let slow = 0;

  while (fast < len) {
    if (nums[fast] !== val) {
      nums[slow] = nums[fast];
      slow++;
    }
    fast++;
  }

  return slow;
};

// const better = (str: string): boolean => {
//   return !!str;
// };

export default () => {
  logger.timeStart();
  logger.log(code([0, 1, 2, 2, 3, 0, 4, 2], 2));
  logger.timeEnd();

  // logger.timeStart();
  // logger.log(better(''));
  // logger.timeEnd();
};
