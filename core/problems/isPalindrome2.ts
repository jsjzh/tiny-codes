/* eslint-disable no-param-reassign */
import { getFileName } from '../utils';
import Logger from '../shared/logger';

const logger = new Logger(getFileName(__filename));

// 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
// 说明：本题中，我们将空字符串定义为有效的回文串。

// 输入: "A man, a plan, a canal: Panama"
// 输出: true

// 输入: "race a car"
// 输出: false

const code = (s: string): boolean => {
  if (!s) return true;
  if (s.length === 1) return true;

  s = s.toLocaleLowerCase().replace(/[\W_]/g, '');

  const len = s.length;

  let f = 0;
  let b = len - 1 - f;
  let flag = true;

  while (true) {
    if (f >= b) {
      break;
    }

    if (s[f] === s[b]) {
      f++;
      b--;
      continue;
    }

    if (s[f] !== s[b]) {
      flag = false;
      break;
    }
  }

  return flag;
};

// const better = (s: string): boolean => {
//   return !!s;
// };

export default () => {
  logger.time(() => logger.log(code('A man, a plan, a canal: Panama')));
  logger.time(() => logger.log(code('race a car')));

  // logger.time(() => logger.log(better('')));
};
