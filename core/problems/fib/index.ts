/**
 * fib
 *
 * 写一个函数，输入 n ，求斐波那契（Fibonacci）数列的第 n 项（即 F(N)）。斐波那契数列的定义如下：
 *
 * F(0) = 0, F(1) = 1
 * F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
 * 斐波那契数列由 0 和 1 开始，之后的斐波那契数就是由之前的两数相加而得出。
 *
 * 答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。
 *
 * 0 <= n <= 100
 *
 * 输入：n = 2
 * 输出：1
 *
 * 输入：n = 5
 * 输出：5
 */

const map: { [k: number]: number } = {};

export const code1 = (n: number): number => {
  if (n === 0) return 0;
  if (n === 1) return 1;

  const n1 = map[n - 1] ? map[n - 1] : ((map[n - 1] = code1(n - 1)), map[n - 1]);
  const n2 = map[n - 2] ? map[n - 2] : ((map[n - 2] = code1(n - 2)), map[n - 2]);

  return (n1 + n2) % 1000000007;
};

// export const code2 = (n: number): number => {};
