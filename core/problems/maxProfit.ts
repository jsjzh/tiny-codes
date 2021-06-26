import { getFileName } from '../utils';
import Logger from '../shared/logger';

const logger = new Logger(getFileName(__filename));

// 给定一个数组 prices，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
// 你只能选择某一天买入这只股票，并选择在未来的某一个不同的日子卖出该股票。设计一个算法来计算你所能获取的最大利润。
// 返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0。

// 1 <= prices.length <= 10^5
// 0 <= prices[i] <= 10^4

// 输入：[7,1,5,3,6,4]
// 输出：5
// 解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5。
// 注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。

// 输入：prices = [7,6,4,3,1]
// 输出：0
// 解释：在这种情况下, 没有交易完成, 所以最大利润为 0。

const code = (prices: number[]): number => {
  if (prices.length === 1) return 0;

  let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    for (let t = i + 1; t < prices.length; t++) {
      if (prices[t] === 0) break;
      if (prices[i] > prices[t]) break;
      profit = Math.max(prices[t] - prices[i], profit);
    }
  }

  return profit;
};

const better = (prices: number[]): number => {
  if (prices.length === 1) return 0;

  let min = Infinity;
  let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
      // 这里是一个很讨巧的做法，用了 else if
      // 先是记录了最小值，也表示了在这一天买入
      // 用 else if 来保证不会当天又卖出
    } else if (prices[i] - min > profit) {
      profit = prices[i] - min;
    }
  }

  return profit;
};

export default () => {
  logger.time(() => logger.log(code([7, 1, 5, 3, 6, 4])));

  logger.time(() => logger.log(better([7, 1, 5, 3, 6, 4])));
};
