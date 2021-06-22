import { getFileName } from '../utils';
import Logger from '../shared/logger';

const logger = new Logger(getFileName(__filename));

// 给定一个只包括 '('、')'、'{'、'}'、'['、']' 的字符串 s，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。

// 1 <= s.length <= 104
// s 仅由括号 '()[]{}' 组成

const code = (str: string): boolean => {
  return !!str;
};

export default () => {
  logger.timeStart();
  logger.log(code('()[]{}'));
  logger.timeEnd();
};
