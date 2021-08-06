import { getFileName } from '../utils';
import Logger from '../shared/logger';

const logger = new Logger(getFileName(__filename));

// 实现一个算法，确定一个字符串 s 的所有字符是否全都不同。
// 如果你不使用额外的数据结构，会很加分。

// 0 <= len(s) <= 100

// 输入: s = "leetcode"
// 输出: false

// 输入: s = "abc"
// 输出: true

const code = (astr: string): boolean => {
  if (!astr.length || astr.length === 1) return true;
  for (let i = 0; i < astr.length; i++) if (astr.indexOf(astr[i], i + 1) !== -1) return false;
  return true;
};

const better = (astr: string): boolean => {
  if (!astr.length || astr.length === 1) return true;
  return Array.from(new Set(astr)).length === astr.length;
};

export default () => {
  logger.time(() => logger.log(code('leetcode')));
  logger.time(() => logger.log(code('abc')));

  logger.time(() => logger.log(better('leetcode')), 'better');
  logger.time(() => logger.log(better('abc')), 'better');
};
