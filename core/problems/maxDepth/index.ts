import { ITreeNode } from '../../shared/treeNode';

/**
 * maxDepth
 *
 * 给定一个二叉树，找出其最大深度。
 * 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
 * 说明: 叶子节点是指没有子节点的节点。
 *
 * 给定二叉树 [3, 9, 2, null, null, 1, 7]，
 * 返回它的最大深度 3。
 *      3
 *   9     2
 * n   n 1   7
 */

export const code1 = (root: ITreeNode): number => {
  if (root === null) return 0;
  if (root.left === null && root.right === null) return 1;

  function deepCount(node: ITreeNode, count: number): number {
    if (!node) return count;
    return Math.max(deepCount(node.left, count + 1), deepCount(node.right, count + 1));
  }

  return Math.max(deepCount(root.left, 1), deepCount(root.right, 1));
};

export const code2 = (root: ITreeNode): number => {
  if (root === null) return 0;
  if (root.left === null && root.right === null) return 1;

  let count = -Infinity;

  if (root.left) {
    count = Math.max(code2(root.left), count);
  }

  if (root.right) {
    count = Math.max(code2(root.right), count);
  }

  return count + 1;
};
