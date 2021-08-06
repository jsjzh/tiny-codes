/**
 * countPrimes
 *
 * 统计所有小于非负整数 n 的质数的数量。
 * 质数：质数是指在大于 1 的自然数中，除了 1 和它本身以外不再有其他因数的自然数。
 *
 * 0 <= n <= 5 * 10^6
 *
 * 输入：n = 10
 * 输出：4
 * 解释：小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7。
 *
 * 输入：n = 0
 * 输出：0
 *
 * 输入：n = 1
 * 输出：0
 */

export const code1 = (n: number): number => {
  if (n === 0 || n === 1 || n === 2) return 0;

  let count = 1;
  for (let i = 3; i < n; i++) {
    for (let t = 2; t < i; t++) {
      if (i % t === 0) break;
      else if (t === i - 1) count++;
    }
  }
  return count;
};

// export const code2 = (n: number): number => {};
