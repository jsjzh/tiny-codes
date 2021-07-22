import { getFileName } from '../utils';
import Logger from '../shared/logger';

const logger = new Logger(getFileName(__filename));

// 斐波那契数，通常用 F(n) 表示，形成的序列称为 斐波那契数列。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：

// F(0) = 0，F(1) = 1
// F(n) = F(n - 1) + F(n - 2)，其中 n > 1
// 给你 n ，请计算 F(n)。

// 0 <= n <= 30

// 输入：2
// 输出：1
// 解释：F(2) = F(1) + F(0) = 1 + 0 = 1

// 输入：3
// 输出：2
// 解释：F(3) = F(2) + F(1) = 1 + 1 = 2

// 输入：4
// 输出：3
// 解释：F(4) = F(3) + F(2) = 2 + 1 = 3

const code = (n: number): number => {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let pre = 0;
  let curr = 1;

  for (let i = 2; i <= n; i++) [pre, curr] = [curr, curr + pre];

  return curr;
};

const map: { [k: number]: number } = { 0: 0, 1: 1, 2: 1, 3: 2, 4: 3 };

const better = (n: number): number => {
  if (n === 0) return 0;
  if (n === 1) return 1;

  const n1 = map[n - 1] ? map[n - 1] : code(n - 1);
  const n2 = map[n - 2] ? map[n - 2] : code(n - 2);

  return n1 + n2;
};

export default () => {
  logger.time(() => logger.log(code(5)));

  logger.time(() => logger.log(better(5)), 'better');
};
