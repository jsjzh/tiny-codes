/**
 * spiralOrder
 *
 * 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。
 *
 * 0 <= matrix.length <= 100
 * 0 <= matrix[i].length <= 100
 *
 * 输入：matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
 * 输出：[1, 2, 3, 6, 9, 8, 7, 4, 5]
 *
 * 输入：matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]
 * 输出：[1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]
 */

export const code1 = (matrix: number[][]): number[] => {
  let result: number[] = [];

  for (let i = 0; i < matrix.length; i++) {
    const arr = matrix[i];

    if (i === 0) {
      result = result.concat(arr);
    } else if (i === matrix.length - 1) {
      result = result.concat(arr.reverse());
      matrix.shift();
      matrix.pop();
      for (let j = matrix.length - 1; j > 0; j--) {
        const innerArr = matrix[j];
        const item = innerArr.shift();
        item !== undefined && result.push(item);
      }
      i = -1;
    } else {
      const item = arr.pop();
      item !== undefined && result.push(item);
    }
  }

  return result;
};

// export const code2 = (matrix: number[][]): number[] => {};
