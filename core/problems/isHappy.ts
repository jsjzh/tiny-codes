import { getFileName } from '../utils';
import Logger from '../shared/logger';

const logger = new Logger(getFileName(__filename));

// 编写一个算法来判断一个数 n 是不是快乐数。
// 「快乐数」定义为：
// 对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和。
// 然后重复这个过程直到这个数变为 1，也可能是无限循环但始终变不到 1。
// 如果可以变为 1，那么这个数就是快乐数。
// 如果 n 是快乐数就返回 true；不是，则返回 false。

// 1 <= n <= 2^31 - 1

// 输入：19
// 输出：true
// 解释：
// 1^2 + 9^2 = 82
// 8^2 + 2^2 = 68
// 6^2 + 8^2 = 100
// 1^2 + 0^2 + 0^2 = 1

// 输入：n = 2
// 输出：false

const code = (n: number): boolean => {
  if (n === 1) return true;
  let t = n;

  const arr: number[] = [];
  let sum = 0;

  while (t !== 0) {
    // 这个地方用了比较讨巧的做法
    // 没有 n 转成数组
    // 而是用 % 10 来获取最后一位
    // 在用 (t - i) / 10 切换到前一位
    // 重复直到 t === 0，这个时候就代表取完了
    let i = t % 10;
    sum = sum + Math.pow(i, 2);
    t = (t - i) / 10;
    if (t === 0) {
      if (sum === 1) return true;
      if (arr.includes(sum)) return false;
      arr.push(sum);
      t = sum;
      sum = 0;
    }
  }

  return false;
};

// const better = (n: number): boolean => {};

export default () => {
  logger.time(() => logger.log(code(1)));
  logger.time(() => logger.log(code(2)));
  logger.time(() => logger.log(code(3)));
  logger.time(() => logger.log(code(4)));
  logger.time(() => logger.log(code(10)));

  // logger.time(() => logger.log(better(25)));
};
