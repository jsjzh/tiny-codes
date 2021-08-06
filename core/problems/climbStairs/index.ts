/**
 * climbStairs
 *
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 * 注意：给定 n 是一个正整数。
 */

const map: { [k in number]: number } = {};

export const code1 = (n: number): number => {
  if (n === 1) return 1;
  if (n === 2) return 2;
  const n1 = map[n - 1] || ((map[n - 1] = code1(n - 1)), map[n - 1]);
  const n2 = map[n - 2] || ((map[n - 2] = code1(n - 2)), map[n - 2]);
  return n1 + n2;
};

export const code2 = (n: number): number => {
  if (n === 1) return 1;
  if (n === 2) return 2;
  return code2(n - 1) + code2(n - 2);
};

export const code3 = (n: number): number => {
  if (n === 1) return 1;
  if (n === 2) return 2;

  let n1 = 1;
  let n2 = 2;
  let result = 0;

  for (let i = 3; i <= n; i++) {
    result = n1 + n2;
    [n1, n2] = [n2, result];
  }

  return result;
};
