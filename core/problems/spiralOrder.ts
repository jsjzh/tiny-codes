import { getFileName } from '../utils';
import Logger from '../shared/logger';

const logger = new Logger(getFileName(__filename));

// 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。

// 0 <= matrix.length <= 100
// 0 <= matrix[i].length <= 100

// 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
// 输出：[1,2,3,6,9,8,7,4,5]

// 输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// 输出：[1,2,3,4,8,12,11,10,9,5,6,7]

const code = (matrix: number[][]): number[] => {
  const result: number[] = [];

  return result;
};

// const better = (matrix: number[][]): number[] => {};

export default () => {
  // [01, 02, 03, 04]
  // [05, 06, 07, 08]
  // [09, 10, 11, 12]
  // [13, 14, 15, 16]
  // [17, 18, 19, 20]

  logger.time(() =>
    logger.log(
      code([
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16],
      ]),
    ),
  );

  // logger.time(() => logger.log(better('')), 'better');
};
