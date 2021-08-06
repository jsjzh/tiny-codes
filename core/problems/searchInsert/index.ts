/**
 * searchInsert
 *
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 * 你可以假设数组中无重复元素。
 */

export const code1 = (nums: number[], target: number): number => {
  if (!nums.length || nums[0] > target) return 0;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num < target && (nums[i + 1] > target || nums[i + 1] === undefined)) {
      return i + 1;
    }
    if (num === target) {
      return i;
    }
  }

  return 0;
};

// export const code2 = (nums: number[], target: number): number => {};
