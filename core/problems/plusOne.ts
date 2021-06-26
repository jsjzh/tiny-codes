import { getFileName } from '../utils';
import Logger from '../shared/logger';

const logger = new Logger(getFileName(__filename));

// 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
// 最高位数字存放在数组的首位，数组中每个元素只存储单个数字。
// 你可以假设除了整数 0 之外，这个整数不会以零开头。

// 1 <= digits.length <= 100
// 0 <= digits[i] <= 9

// 输入：digits = [4,3,2,1]
// 输出：[4,3,2,2]
// 解释：输入数组表示数字 4321。

const code = (digits: number[]): number[] => {
  if (digits.length === 1 && digits[0] === 0) return [1];

  const len = digits.length;
  const sum = digits[len - 1] + 1;
  digits[len - 1] = sum;

  if (sum <= 9) {
    return digits;
  } else {
    for (let i = digits.length - 1; i >= 0; i--) {
      let num = digits[i];
      if (num > 9) {
        digits[i] = 0;
        if (digits[i - 1] === undefined) {
          digits.unshift(1);
          return digits;
        }
        digits[i - 1] = digits[i - 1] + 1;
      }
    }
  }

  return digits;
};

// const better = (str: string): boolean => {
//   return !!str;
// };

export default () => {
  logger.timeStart();
  logger.log(code([9]));
  logger.timeEnd();

  // logger.timeStart();
  // logger.log(better(''));
  // logger.timeEnd();
};
