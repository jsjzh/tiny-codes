import { getFileName } from '../utils';
import Logger from '../shared/logger';

const logger = new Logger(getFileName(__filename));

// 给你两个二进制字符串，返回它们的和（用二进制表示）。
// 输入为非空字符串且只包含数字 1 和 0。

// 每个字符串仅由字符 '0' 或 '1' 组成。
// 1 <= a.length, b.length <= 10^4
// 字符串如果不是 '0'，就都不含前导零。

// 输入: a = '1010', b = '1011'
// 输出: '10101'

const code = (a: string, b: string): string => {
  return (parseInt(a, 2) + parseInt(b, 2)).toString(2);
};

// const better = (str: string): boolean => {
//   return !!str;
// };

export default () => {
  logger.timeStart();
  logger.log(
    code(
      '10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101',
      '110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011',
    ),
  );
  logger.timeEnd();

  // logger.timeStart();
  // logger.log(better(''));
  // logger.timeEnd();
};
