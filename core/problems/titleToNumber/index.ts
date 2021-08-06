/**
 * titleToNumber
 *
 * 给定一个Excel表格中的列名称，返回其相应的列序号。
 *
 * A -> 1
 * B -> 2
 * C -> 3
 * ...
 * Z -> 26
 * AA -> 27
 * AB -> 28
 * ...
 *
 * 输入: "A"
 * 输出: 1
 *
 * 输入: "AB"
 * 输出: 28
 *
 * 输入: "ZY"
 * 输出: 701
 */

export const code1 = (columnTitle: string): number => {
  let count = 0;
  for (let i = 0; i < columnTitle.length; i++) {
    const n = columnTitle.charCodeAt(i) - 64;
    const t = columnTitle.length - i - 1;
    count = n * Math.pow(26, t) + count;
  }
  return count;
};

export const code2 = (columnTitle: string): number => {
  let count = 0;
  for (let i = 0; i < columnTitle.length; i++) {
    const n = columnTitle.charCodeAt(i) - 64;
    count = count * 26 + n;
  }
  return count;
};
