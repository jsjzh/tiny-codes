/**
 * replaceSpace
 *
 * 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。
 *
 * 0 <= s 的长度 <= 10000
 *
 * 输入：s = "We are happy."
 * 输出："We%20are%20happy."
 */

export const code1 = (s: string): string => {
  if (!s.length) return s;
  return s.replace(/ /g, '%20');
};

export const code2 = (s: string): string => {
  if (!s.length) return s;
  return s.split(' ').join('%20');
};
