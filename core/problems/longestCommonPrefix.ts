import { getFileName } from '../utils';
import Logger from '../shared/logger';

const logger = new Logger(getFileName(__filename));

// 编写一个函数来查找字符串数组中的最长公共前缀。
// 如果不存在公共前缀，返回空字符串 ""。

// 0 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] 仅由小写英文字母组成

const code = (strs: string[]): string => {
  return '';
};

export default () => {
  logger.time();
  logger.log(code(['flower', 'flow', 'flight']));
  logger.timeEnd();
};
