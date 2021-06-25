import { getFileName } from '../utils';
import Logger from '../shared/logger';
import TreeNode, { ITreeNode } from '../shared/treeNode';

const logger = new Logger(getFileName(__filename));

// 给你一个整数数组 nums，其中元素已经按升序排列，请你将其转换为一棵高度平衡二叉搜索树。
// 高度平衡二叉树是一棵满足「每个节点的左右两个子树的高度差的绝对值不超过 1 」的二叉树。

// 1 <= nums.length <= 10^4
// -10^4 <= nums[i] <= 10^4
// nums 按严格递增顺序排列

// https://assets.leetcode.com/uploads/2021/02/18/btree1.jpg
// 输入：nums = [-10,-3,0,5,9]
// 输出：[0,-3,9,-10,null,5]

// 解释：[0,-10,5,null,-3,null,9] 也将被视为正确答案：
// https://assets.leetcode.com/uploads/2021/02/18/btree2.jpg

// https://assets.leetcode.com/uploads/2021/02/18/btree.jpg
// 输入：nums = [1,3]
// 输出：[3,1]
// 解释：[1,3] 和 [3,1] 都是高度平衡二叉搜索树。
// https://assets.leetcode.com/uploads/2021/02/18/btree.jpg

const code = (nums: number[]): ITreeNode => {
  logger.log(nums);
  return new TreeNode();
};

// const best = (nums: number[]): ITreeNode => {};

export default () => {
  logger.timeStart();
  logger.log(code([-10, -3, 0, 5, 9]));
  logger.timeEnd();

  // logger.timeStart();
  // logger.log(best(l, r));
  // logger.timeEnd();
};
