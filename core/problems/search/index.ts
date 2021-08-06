/**
 * search
 *
 * 统计一个数字在排序数组中出现的次数。
 *
 * 0 <= nums.length <= 10^5
 * -10^9 <= nums[i] <= 10^9
 * nums 是一个非递减数组
 * -10^9 <= target <= 10^9
 *
 * 输入: nums = [5, 7, 7, 8, 8, 10], target = 8
 * 输出: 2
 *
 * 输入: nums = [5, 7, 7, 8, 8, 10], target = 6
 * 输出: 0
 */

export const code1 = (nums: number[], target: number): number => {
  if (!nums.length) return 0;

  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < target) continue;
    if (nums[i] === target) {
      count++;
      continue;
    }
    if (nums[i] > target) break;
  }

  return count;
};

// export const code2 = (nums: number[], target: number): number => {};
