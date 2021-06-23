import { getFileName } from '../utils';
import Logger from '../shared/logger';

const logger = new Logger(getFileName(__filename));

// 给你一个字符串 s，由若干单词组成，单词之间用空格隔开。返回字符串中最后一个单词的长度。如果不存在最后一个单词，请返回 0。
// 单词是指仅由字母组成、不包含任何空格字符的最大子字符串。

// 1 <= s.length <= 10^4
// s 仅有英文字母和空格 ' ' 组成

const code = (s: string): number => {
  if (s.length === 1) return s[0] === ' ' ? 0 : 1;

  let len = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    const coder = s[i];
    if (len && coder === ' ') return len;
    if (coder !== ' ') len++;
  }

  return len;
};

// const best = (str: string): boolean => {
//   return !!str;
// };

export default () => {
  logger.timeStart();
  logger.log(code(' hel lo wo rld '));
  logger.timeEnd();

  // logger.timeStart();
  // logger.log(best(''));
  // logger.timeEnd();
};
