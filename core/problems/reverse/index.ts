/* eslint-disable no-param-reassign */

/**
 * reverse
 *
 * 给你一个 32 位的有符号整数 x，返回将 x 中的数字部分反转后的结果。
 * 如果反转后整数超过 32 位的有符号整数的范围 [−2^31, 2^31 − 1]，就返回 0。
 * 假设环境不允许存储 64 位整数（有符号或无符号）。
 *
 * -2^31 <= x <= 2^31 - 1
 */

export const code1 = (x: number): number => {
  const flag = x > 0;
  !flag && (x = Math.abs(x));
  const n = Number(x.toString().split('').reverse().join(''));
  if (Number.isNaN(n) || n > Math.pow(2, 31)) return 0;
  return flag ? n : -n;
};

export const code2 = (x: number): number => {
  if ([-9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9].includes(x)) return x;

  const flag = x < 0;

  let t = flag ? -x : x;

  let count = 0;

  while (t !== 0) {
    let i = t % 10;
    t = (t - i) / 10;
    count = count * 10 + i;
  }

  if (count > Math.pow(2, 31)) return 0;

  return flag ? -count : count;
};
