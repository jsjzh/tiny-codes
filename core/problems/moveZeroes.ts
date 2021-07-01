import { getFileName } from '../utils';
import Logger from '../shared/logger';

const logger = new Logger(getFileName(__filename));

// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

// 必须在原数组上操作，不能拷贝额外的数组。
// 尽量减少操作次数。

// 输入: [0,1,0,3,12]
// 输出: [1,3,12,0,0]

/**
 Do not return anything, modify nums in-place instead.
 */
function code(nums: number[]): void {
  if (nums.length === 0) return;
  const startIndex = nums.indexOf(0);
  if (startIndex === -1) return;

  let slow = startIndex;

  for (let i = startIndex + 1; i < nums.length; i++) {
    if (nums[i]) {
      nums[slow] = nums[i];
      nums[i] = 0;
      slow++;
    }
  }
}

// const better = (nums: number[]): void => {};

export default () => {
  logger.time(() => logger.log(code([0, 1, 0, 3, 12])));

  // logger.time(() => logger.log(better('')));
};
