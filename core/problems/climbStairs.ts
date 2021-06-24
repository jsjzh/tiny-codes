import { getFileName } from '../utils';
import Logger from '../shared/logger';

const logger = new Logger(getFileName(__filename));

// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
// 注意：给定 n 是一个正整数。

const map: { [k in number]: number } = {};

const code = (n: number): number => {
  if (n === 1) return 1;
  if (n === 2) return 2;
  const n1 = map[n - 1] || ((map[n - 1] = code(n - 1)), map[n - 1]);
  const n2 = map[n - 2] || ((map[n - 2] = code(n - 2)), map[n - 2]);
  return n1 + n2;
};

// const code = (n: number): number => {
//   if (n === 1) return 1;
//   if (n === 2) return 2;
//   return code(n - 1) + code(n - 2);
// };

const best = (n: number): number => {
  if (n === 1) return 1;
  if (n === 2) return 2;

  let n1 = 1;
  let n2 = 2;
  let result = 0;

  for (let i = 3; i <= n; i++) {
    result = n1 + n2;
    [n1, n2] = [n2, result];
  }

  return result;
};

export default () => {
  const num = 20;

  logger.timeStart();
  logger.log(code(num));
  logger.timeEnd();

  logger.timeStart();
  logger.log(best(num));
  logger.timeEnd();
};
