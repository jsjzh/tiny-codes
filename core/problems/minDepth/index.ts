import { ITreeNode } from '../../shared/treeNode';

/**
 * minDepth
 *
 * 给定一个二叉树，找出其最小深度。
 * 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
 * 说明：叶子节点是指没有子节点的节点。
 *
 * 树中节点数的范围在 [0, 105] 内
 * -1000 <= Node.val <= 1000
 *
 * https://assets.leetcode.com/uploads/2020/10/12/ex_depth.jpg
 * 输入：root = [3,9,2,null,null,5,7]
 *       3
 *   9       2
 * n   n   5   7
 * 输出：2
 *
 * 输入：root = [1,2,2,3,3,null,null,4,4]
 *               1
 *       2               2
 *   3       3       n       n
 * 4   4   n   n   n   n   n   n
 * 输出：2
 *
 * 输入：root = [1,2,2,3,null,null,3,4,null,null,4]
 *               1
 *       2               2
 *   3       n       n       3
 * 4   n   n   n   n   n   n   4
 * 输出：4
 *
 * 输入：root = [1,null,2,null,3]
 *       1
 *   n       2
 * n   n   n   7
 * 输出：3
 *
 * 输入：root = [2,null,3,null,4,null,5,null,6]
 *                               2
 *               n                                3
 *       n               n               n               4
 *   n       n       n       n       n       n       n       5
 * n   n   n   n   n   n   n   n   n   n   n   n   n   n   n   6
 * 输出：5
 */

export const code1 = (root: ITreeNode): number => {
  if (root === null) return 0;
  if (root.left === null && root.right === null) return 1;

  let count = Infinity;

  if (root.left !== null) {
    count = Math.min(code1(root.left), count);
  }

  if (root.right !== null) {
    count = Math.min(code1(root.right), count);
  }

  return count + 1;
};

// export const code2 = (root: ITreeNode): number => {};
