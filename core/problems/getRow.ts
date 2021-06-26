import { getFileName } from '../utils';
import Logger from '../shared/logger';

const logger = new Logger(getFileName(__filename));

// 给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。
// 在杨辉三角中，每个数是它左上方和右上方的数的和。

//            [1],                 | 0
//           [1,1],                | 1
//          [1,2,1],               | 2
//         [1,3,3,1],              | 3
//        [1,4,6,4,1],             | 4
//      [1,5,10,10,5,1],           | 5
//     [1,6,15,20,15,6,1],         | 6
//    [1,7,21,35,35,21,7,1],       | 7
//   [1,8,28,56,70,56,28,8,1],     | 8
// [1,9,36,84,126,126,84,36,9,1]   | 9

// https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif
// 输入: 3
// 输出: [1,3,3,1]

const code = (rowIndex: number): number[] => {
  if (rowIndex === 0) return [1];
  if (rowIndex === 1) return [1, 1];

  let pre: number[] = [1, 1];
  let curr: number[] = [];

  for (let i = 2; i <= rowIndex; i++) {
    curr = [];
    for (let t = 0; t <= i; t++) {
      curr[t] = (pre[t - 1] || 0) + (pre[t] || 0);
    }
    pre = curr;
  }

  return curr;
};

// const best = (rowIndex: number): number[] => {};

export default () => {
  logger.time(() => logger.log(code(10)));

  // logger.time(() => logger.log(best(3)));
};
