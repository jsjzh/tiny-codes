/**
 * addBinary
 *
 * 给你两个二进制字符串，返回它们的和（用二进制表示）。
 * 输入为非空字符串且只包含数字 1 和 0。
 * 每个字符串仅由字符 '0' 或 '1' 组成。
 *
 * 1 <= a.length, b.length <= 10^4
 * 字符串如果不是 '0'，就都不含前导零。
 *
 * 输入: a = '1010', b = '1011'
 * 输出: '10101'
 */

export const code1 = (a: string, b: string): string => {
  return (parseInt(a, 2) + parseInt(b, 2)).toString(2);
};

// export const code2 = (a: string, b: string): string => {};
