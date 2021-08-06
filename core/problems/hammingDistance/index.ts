/**
 * hammingDistance
 *
 * 两个整数之间的 汉明距离 指的是这两个数字对应二进制位不同的位置的数目。
 * 给你两个整数 x 和 y，计算并返回它们之间的汉明距离。
 *
 * 0 <= x, y <= 2^31 - 1
 *
 * 输入：x = 1, y = 4
 * 输出：2
 * 解释：
 * 1   (0 0 0 1)
 * 4   (0 1 0 0)
 *        ↑   ↑
 * 上面的箭头指出了对应二进制位不同的位置。
 *
 * 输入：x = 3, y = 1
 * 输出：1
 */

export const code1 = (x: number, y: number): number => {
  return (x ^ y).toString(2).replace(/0/g, '').length;
};

// export const code2 = (x: number, y: number): number => {};
