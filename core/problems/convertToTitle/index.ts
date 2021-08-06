/* eslint-disable no-param-reassign */

/**
 * convertToTitle
 *
 * 给定一个正整数，返回它在 Excel 表中相对应的列名称。
 *
 * 1 -> A
 * 2 -> B
 * 3 -> C
 * ...
 * 26 -> Z
 * 27 -> AA
 * 28 -> AB
 * ...
 *
 * 输入: 1
 * 输出: "A"
 *
 * 输入: 701
 * 输出: "ZY"
 */

export const code1 = (columnNumber: number): string => {
  let str = '';
  while (columnNumber) {
    const n = columnNumber % 26 || 26;
    str = String.fromCharCode(n + 64) + str;
    columnNumber = Math.floor((columnNumber - n) / 26);
  }
  return str;
};

// export const code2 = (columnNumber: number): string => {};
