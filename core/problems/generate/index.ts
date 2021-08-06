/**
 * generate
 *
 * 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
 * 在杨辉三角中，每个数是它左上方和右上方的数的和。
 *
 * https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif
 * 输入: 5
 * 输出:
 * [
 *      [1],     | 0
 *     [1,1],    | 1
 *    [1,2,1],   | 2
 *   [1,3,3,1],  | 3
 *  [1,4,6,4,1]  | 4
 * ]
 */

export const code1 = (numRows: number): number[][] => {
  if (numRows === 0) return [];
  if (numRows === 1) return [[1]];

  const arr = [[1]];

  for (let i = 1; i < numRows; i++) {
    arr[i] = [];
    for (let t = 0; t <= i; t++) {
      arr[i][t] = (arr[i - 1][t - 1] || 0) + (arr[i - 1][t] || 0);
    }
  }

  return arr;
};

// export const code2 = (numRows: number): number[][] => {};
