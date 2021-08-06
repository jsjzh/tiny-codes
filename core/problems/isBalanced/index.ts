/* eslint-disable complexity */

import { ITreeNode } from '../../shared/treeNode';

/**
 * isBalanced
 *
 * 给定一个二叉树，判断它是否是高度平衡的二叉树。
 * 本题中，一棵高度平衡二叉树定义为：一个二叉树每个节点的左右两个子树的高度差的绝对值不超过 1。
 *
 * 树中的节点数在范围 [0, 5000] 内
 * -10^4 <= Node.val <= 10^4
 *
 * 输入：root = []
 * 输出：true
 *
 * https://assets.leetcode.com/uploads/2020/10/06/balance_1.jpg
 * 输入：root = [3,9,2,null,null,5,7]
 *       3
 *   9       2
 * n   n   5   7
 * 输出：true
 *
 * https://assets.leetcode.com/uploads/2020/10/06/balance_2.jpg
 * 输入：root = [1,2,2,3,3,null,null,4,4]
 *               1
 *       2               2
 *   3       3       n       n
 * 4   4   n   n   n   n   n   n
 * 输出：false
 *
 * 输入：root = [1,2,2,3,null,null,3,4,null,null,4]
 *               1
 *       2               2
 *   3       n       n       3
 * 4   n   n   n   n   n   n   4
 * 输出：false
 *
 * 输入：root = [1,null,2,null,3]
 *       1
 *   n       2
 * n   n   n   7
 * 输出：false
 */

function deep(node: ITreeNode, count: number): number {
  if (!node) return count;
  return Math.max(deep(node.left, count + 1), deep(node.right, count + 1));
}

export const code1 = (root: ITreeNode): boolean => {
  if (!root) return true;

  return code1(root.left) && code1(root.right) && Math.abs(deep(root.left, 1) - deep(root.right, 1)) <= 1;
};

// export const code2 = (root: ITreeNode): boolean => {};
