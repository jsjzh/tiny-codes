import { getFileName } from '../utils';
import Logger from '../shared/logger';

const logger = new Logger(getFileName(__filename));

// 给定两个字符串 s 和 t，判断它们是否是同构的。

// 如果 s 中的字符可以按某种映射关系替换得到 t，那么这两个字符串是同构的。

// 每个出现的字符都应当映射到另一个字符，同时不改变字符的顺序。不同字符不能映射到同一个字符上，相同字符只能映射到同一个字符上，字符可以映射到自己本身。

// 可以假设 s 和 t 长度相同。

// 输入：s = "egg", t = "add"
// 输出：true

// 输入：s = "foo", t = "bar"
// 输出：false

// 输入：s = "paper", t = "title"
// 输出：true

const code = (s: string, t: string): boolean => {
  if (!s.length || s === t) return true;

  const AMap: { [k: string]: string } = {};
  const BMap: { [k: string]: string } = {};

  for (let i = 0; i < s.length; i++) {
    if (AMap[s[i]]) {
      if (AMap[s[i]] !== t[i]) {
        return false;
      }
    } else if (BMap[t[i]]) {
      if (BMap[t[i]] !== s[i]) {
        return false;
      }
    } else {
      AMap[s[i]] = t[i];
      BMap[t[i]] = s[i];
    }
  }

  return true;
};

const better = (s: string, t: string): boolean => {
  if (!s.length) return true;
  return !!t;
};

export default () => {
  logger.time(() => logger.log(code('paper', 'title')));
  logger.time(() => logger.log(code('foo', 'bar')));
  logger.time(() => logger.log(code('badc', 'baba')));

  logger.time(() => logger.log('better', better('paper', 'title')));
  logger.time(() => logger.log('better', better('foo', 'bar')));
  logger.time(() => logger.log('better', better('badc', 'baba')));
};
