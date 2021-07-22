import { getFileName } from '../utils';
import Logger from '../shared/logger';

const logger = new Logger(getFileName(__filename));

// 给定一个非负整数 num。对于 0 ≤ i ≤ num 范围中的每个数字 i，计算其二进制数中的 1 的数目并将它们作为数组返回。

// 进阶:
// 给出时间复杂度为 O(n*sizeof(integer)) 的解答非常容易。但你可以在线性时间 O(n) 内用一趟扫描做到吗？
// 要求算法的空间复杂度为O(n)。

// 输入: 2
// 输出: [0,1,1]

// 输入: 5
// 输出: [0,1,1,2,1,2]

const code = (n: number): number[] => {
  const result: number[] = [];

  for (let i = 0; i <= n; i++)
    result.push(i.toString(2).replace(/0/g, '').length);

  return result;
};

// 奇偶性判断建议用 i&1 的结果来进行判断

// &: AND：如果两位都是 1 则设置每位为 1
// |: OR：如果两位之一为 1 则设置每位为 1
// ^: XOR：如果两位只有一位为 1 则设置每位为 1
// ~: NOT：反转所有位
// <<: 零填充左位移：通过从右推入零向左位移，并使最左边的位脱落
// >>: 有符号右位移：通过从左推入最左位的拷贝来向右位移，并使最右边的位脱落
// >>>: 零填充右位移：通过从左推入零来向右位移，并使最右边的位脱落

const better = (n: number): number[] => {
  const result: number[] = [0];

  for (let i = 1; i <= n; i++)
    result[i] = i & 1 ? result[i - 1] + 1 : result[i / 2];

  return result;
};

export default () => {
  logger.time(() => logger.log(code(5)));

  logger.time(() => logger.log(better(5)), 'better');
};
