/**
 * containsNearbyDuplicate
 *
 * 给定一个整数数组和一个整数 k，判断数组中是否存在两个不同的索引 i 和 j，使得 nums [i] = nums [j]，并且 i 和 j 的差的绝对值至多为 k。
 *
 * 输入: nums = [1, 2, 3, 1], k = 3
 * 输出: true
 *
 * 输入: nums = [1, 0, 1, 1], k = 1
 * 输出: true
 *
 * 输入: nums = [1, 2, 3, 1, 2, 3], k = 2
 * 输出: false
 */

export const code1 = (nums: number[], k: number): boolean => {
  if (nums.length === 1) return false;
  for (let i = 0; i < nums.length; i++) {
    for (let t = 1; t <= k; t++) {
      if (nums[i] === nums[i + t]) return true;
    }
  }
  return false;
};

export const code2 = (nums: number[], k: number): boolean => {
  if (nums.length === 1) return false;

  const arr: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    if (arr.includes(nums[i])) return true;
    arr.push(nums[i]);
    if (arr.length > k) arr.shift();
  }

  return false;
};
