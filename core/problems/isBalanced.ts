import { getFileName } from '../utils';
import Logger from '../shared/logger';
import TreeNode, { ITreeNode } from '../shared/treeNode';

const logger = new Logger(getFileName(__filename));

// 给定一个二叉树，判断它是否是高度平衡的二叉树。
// 本题中，一棵高度平衡二叉树定义为：一个二叉树每个节点的左右两个子树的高度差的绝对值不超过 1。

// 树中的节点数在范围 [0, 5000] 内
// -10^4 <= Node.val <= 10^4

// https://assets.leetcode.com/uploads/2020/10/06/balance_1.jpg
// 输入：root = [3,9,2,null,null,5,7]
//       3
//    9     2
// n   n   5   7
// 输出：true

// https://assets.leetcode.com/uploads/2020/10/06/balance_2.jpg
// 输入：root = [1,2,2,3,3,null,null,4,4]
//               1
//       2               2
//   3       3       n       n
// 4   4   n   n   n   n   n   n
// 输出：false

// 输入：root = []
// 输出：true

const code = (root: ITreeNode): boolean => {
  return !!root;
};

// const best = (root: ITreeNode): boolean => {};

export default () => {
  const l1 = new TreeNode(
    3,
    new TreeNode(9),
    new TreeNode(2, new TreeNode(5), new TreeNode(7)),
  );

  const l2 = new TreeNode(
    1,
    new TreeNode(
      2,
      new TreeNode(3),
      new TreeNode(3, new TreeNode(4), new TreeNode(4)),
    ),
    new TreeNode(2),
  );

  logger.time(() => {
    logger.log(code(l1));
  });

  logger.time(() => {
    logger.log(code(l2));
  });

  // logger.timeEnd();

  // logger.timeStart();
  // logger.log(code(l2));
  // logger.timeEnd();

  // logger.timeStart();
  // logger.log(best(l, r));
  // logger.timeEnd();
};
