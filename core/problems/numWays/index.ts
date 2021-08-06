/**
 * numWays
 *
 * 一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。求该青蛙跳上一个 n 级的台阶总共有多少种跳法。
 * 答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。
 *
 * 0 <= n <= 100
 *
 * 输入：n = 2
 * 输出：2
 *
 * 输入：n = 7
 * 输出：21
 *
 * 输入：n = 0
 * 输出：1
 */

const map: { [k: number]: number } = {};

export const code1 = (n: number): number => {
  if (n === 0) return 1;
  if (n === 1) return 1;

  const n1 = map[n - 1] ? map[n - 1] : ((map[n - 1] = code1(n - 1)), map[n - 1]);
  const n2 = map[n - 2] ? map[n - 2] : ((map[n - 2] = code1(n - 2)), map[n - 2]);

  return (n1 + n2) % 1000000007;
};

// export const code2 = (n: number): number => {};
