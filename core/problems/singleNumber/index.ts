/**
 * singleNumber
 *
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
 * 说明：你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？
 *
 * 输入: [2, 2, 1]
 * 输出: 1
 *
 * 输入: [4, 1, 2, 1, 2]
 * 输出: 4
 */

export const code1 = (nums: number[]): number => {
  const set = new Set();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    set.has(num) ? set.delete(num) : set.add(num);
  }

  return set.values().next().value;
};

export const code2 = (nums: number[]): number => {
  let ans = 0;
  for (const num of nums) ans ^= num;
  return ans;
};
