/* eslint-disable no-return-assign */

import { ITreeNode } from '../../shared/treeNode';

/**
 * diameterOfBinaryTree
 *
 * 给定一棵二叉树，你需要计算它的直径长度。
 * 一棵二叉树的直径长度是任意两个结点路径长度中的最大值。这条路径可能穿过也可能不穿过根结点。
 * 两结点之间的路径长度是以它们之间边的数目表示。
 *
 * 给定二叉树
 *     1
 *    / \
 *   2   3
 *  / \
 * 4   5
 * 返回 3, 它的长度是路径 [4, 2, 1, 3] 或者 [5, 2, 1, 3]。
 */

export const code1 = (root: ITreeNode): number => {
  if (!root) return 0;
  if (!root.left && !root.right) return 0;

  let len = -Infinity;

  const core = (node: ITreeNode): number => {
    if (!node) return 0;

    const left = core(node.left);
    const right = core(node.right);

    len = Math.max(len, left + right + 1);

    return Math.max(left, right) + 1;
  };

  core(root);

  return len - 1;
};

// export const code2 = (root: ITreeNode): number => {};
