import { getFileName } from '../utils';
import Logger from '../shared/logger';

const logger = new Logger(getFileName(__filename));

// 给定一个无重复元素的有序整数数组 nums。
// 返回 恰好覆盖数组中所有数字 的 最小有序 区间范围列表。也就是说，nums 的每个元素都恰好被某个区间范围所覆盖，并且不存在属于某个范围但不属于 nums 的数字 x。
// 列表中的每个区间范围 [a,b] 应该按如下格式输出：

// "a->b"，如果 a != b
// "a"，如果 a == b

// 0 <= nums.length <= 20
// -2^31 <= nums[i] <= 2^31 - 1
// nums 中的所有值都互不相同
// nums 按升序排列

// 输入：nums = [0,1,2,4,5,7]
// 输出：["0->2","4->5","7"]
// 解释：区间范围是：
// [0,2] --> "0->2"
// [4,5] --> "4->5"
// [7,7] --> "7"

// 输入：nums = [0,2,3,4,6,8,9]
// 输出：["0","2->4","6","8->9"]
// 解释：区间范围是：
// [0,0] --> "0"
// [2,4] --> "2->4"
// [6,6] --> "6"
// [8,9] --> "8->9"

// 输入：nums = []
// 输出：[]

// 输入：nums = [-1]
// 输出：["-1"]

// 输入：nums = [0]
// 输出：["0"]

const code = (nums: number[]): string[] => {
  if (!nums.length) return [];
  if (nums.length === 1) return [nums[0].toString()];

  const result: string[] = [];

  let start = nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] + 1 !== nums[i + 1]) {
      if (start === nums[i]) {
        result.push(start.toString());
      } else {
        result.push(`${start}->${nums[i]}`);
      }
      start = nums[i + 1];
    }
  }

  return result;
};

// const better = (nums: number[]): string[] => {};

export default () => {
  logger.time(() => logger.log(code([0, 1, 2, 4, 5, 7])));
  logger.time(() => logger.log(code([0, 2, 3, 4, 6, 8, 9])));

  // logger.time(() => logger.log(better([0,2,3,4,6,8,9])));
};
