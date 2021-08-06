import { getFileName } from '../utils';
import Logger from '../shared/logger';
import TreeNode, { ITreeNode } from '../shared/treeNode';

const logger = new Logger(getFileName(__filename));

// 给你二叉树的根节点 root 和一个表示目标和的整数 targetSum，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和 targetSum。
// 叶子节点是指没有子节点的节点。

// 树中节点的数目在范围 [0, 5000] 内
// -1000 <= Node.val <= 1000
// -1000 <= targetSum <= 1000

// https://assets.leetcode.com/uploads/2021/01/18/pathsum1.jpg
// 输入：root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
//                5
//        4                8
//   11       n       13       4
// 7    2   n   n   n    n   n   1
// 输出：true

// 输入：root = [1,2,3], targetSum = 5
//   1
// 2   3
// 输出：false

// 输入：root = [1,2], targetSum = 0
//   1
// 2   n
// 输出：false

// 输入：root = [-2,null,-3], targetSum = -5
//   -2
// n    -3
// 输出：true

// 输入：root = [1,2], targetSum = 1
//   1
// 2   n
// 输出：false

const code = (root: ITreeNode, targetSum: number): boolean => {
  if (!root) return false;
  if (targetSum === root.val && !root.left && !root.right) return true;

  return code(root.left, targetSum - root.val) || code(root.right, targetSum - root.val);
};

// const better = (root: ITreeNode, targetSum: number): boolean => {};

export default () => {
  const l1 = new TreeNode(
    1,
    new TreeNode(2, new TreeNode(3, new TreeNode(2)), new TreeNode(4)),
    new TreeNode(2, new TreeNode(4), new TreeNode(3)),
  );

  logger.time(() => logger.log(code(l1, 5)));

  // logger.time(() => logger.log(better(l1, 5)));
};
