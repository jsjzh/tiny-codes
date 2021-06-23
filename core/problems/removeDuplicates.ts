import { getFileName } from '../utils';
import Logger from '../shared/logger';

const logger = new Logger(getFileName(__filename));

// 给你一个有序数组 nums，请你原地删除重复出现的元素，使每个元素只出现一次，返回删除后数组的新长度。
// 不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。

// 说明:
// 为什么返回数值是整数，但输出的答案是数组呢?
// 请注意，输入数组是以「引用」方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。

// 0 <= nums.length <= 3 * 10^4
// -10^4 <= nums[i] <= 10^4
// nums 已按升序排列

// 输入：nums = [0,0,1,1,1,2,2,3,3,4]
// 输出：5, nums = [0,1,2,3,4]
// 解释：函数应该返回新的长度 5，并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4。不需要考虑数组中超出新长度后面的元素。

const code = (nums: number[]): number => {
  if (nums.length === 0) return 0;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num === nums[i + 1]) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
};

const best = (nums: number[]): number => {
  const n = nums.length;
  if (n === 0) {
    return 0;
  }
  let fast = 1;
  let slow = 1;

  // 这里和我写的不同的一点就是它不用移除
  // 而题目里写的就是说不用移除，返回的长度就是短指针的长度
  while (fast < n) {
    if (nums[fast] !== nums[fast - 1]) {
      nums[slow] = nums[fast];
      ++slow;
    }
    ++fast;
  }

  return slow;
};

export default () => {
  logger.timeStart();
  logger.log(code([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
  logger.timeEnd();

  logger.timeStart();
  logger.log('best', best([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
  logger.timeEnd();
};
