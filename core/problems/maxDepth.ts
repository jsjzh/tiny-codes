import { getFileName } from '../utils';
import Logger from '../shared/logger';
import TreeNode, { ITreeNode } from '../shared/treeNode';

const logger = new Logger(getFileName(__filename));

// 给定一个二叉树，找出其最大深度。
// 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
// 说明: 叶子节点是指没有子节点的节点。

// 给定二叉树 [3, 9, 2, null, null, 1, 7]，
// 返回它的最大深度 3。
//      3
//   9     2
// n   n 1   7

const code = (root: ITreeNode): number => {
  if (!root) return 0;

  function deepCount(node: ITreeNode, count: number): number {
    if (!node) return count;
    return Math.max(
      deepCount(node.left, count + 1),
      deepCount(node.right, count + 1),
    );
  }

  return Math.max(deepCount(root.left, 1), deepCount(root.right, 1));
};

// const best = (root: ITreeNode): boolean => {};

export default () => {
  const l1 = new TreeNode(
    1,
    new TreeNode(2, new TreeNode(3, new TreeNode(2)), new TreeNode(4)),
    new TreeNode(2, new TreeNode(4), new TreeNode(3)),
  );

  const l2 = new TreeNode(
    3,
    new TreeNode(9),
    new TreeNode(2, new TreeNode(1), new TreeNode(7)),
  );

  logger.timeStart();
  logger.log(code(l1));
  logger.timeEnd();

  logger.timeStart();
  logger.log(code(l2));
  logger.timeEnd();

  // logger.timeStart();
  // logger.log(best(l, r));
  // logger.timeEnd();
};
