/* eslint-disable no-param-reassign */

import { ITreeNode } from '../../shared/treeNode';

/**
 * invertTree
 *
 * 翻转一棵二叉树。
 *
 * 输入：
 *       4
 *   2       7
 * 1   3   6   9
 * 输出：
 *       4
 *   7       2
 * 9   6   3   1
 */

export const code1 = (root: ITreeNode): ITreeNode => {
  if (!root) return null;
  [root.right, root.left] = [code1(root.left), code1(root.right)];
  return root;
};

// export const code2 = (root: ITreeNode): ITreeNode => {};
