import { getFileName } from '../utils';
import Logger from '../shared/logger';

const logger = new Logger(getFileName(__filename));

// 字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部。请定义一个函数实现字符串左旋转操作的功能。比如，输入字符串"abcdefg"和数字 2，该函数将返回左旋转两位得到的结果"cdefgab"。

// 1 <= k < s.length <= 10000

// 输入: s = "abcdefg", k = 2
// 输出: "cdefgab"

// 输入: s = "lrloseumgh", k = 6
// 输出: "umghlrlose"

const code = (s: string, n: number): string => {
  if (s.length === 1) return s;

  const arr = s.split('');

  for (let i = 0; i < n; i++) arr.push(arr.shift() as string);

  return arr.join('');
};

// const better = (s: string, n: number): string => {};

export default () => {
  logger.time(() => logger.log(code('lrloseumgh', 6)));

  // logger.time(() => logger.log(better('abcdefg', 2)), 'better');
};
