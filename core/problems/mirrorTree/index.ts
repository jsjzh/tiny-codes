import { ITreeNode } from '../../shared/treeNode';

/**
 * mirrorTree
 *
 * 请完成一个函数，输入一个二叉树，该函数输出它的镜像。
 *
 * 0 <= 节点个数 <= 1000
 *
 * 例如输入：
 *      4
 *    /   \
 *   2     7
 *  / \   / \
 * 1   3 6   9
 *
 * 镜像输出：
 *      4
 *    /   \
 *   7     2
 *  / \   / \
 * 9   6 3   1
 *
 * 输入：root = [4, 2, 7, 1, 3, 6, 9]
 * 输出：[4, 7, 2, 9, 6, 3, 1]
 */

export const code1 = (root: ITreeNode): ITreeNode => {
  if (!root) return root;

  [root.left, root.right] = [root.right, root.left];

  code1(root.left);
  code1(root.right);

  return root;
};

// export const code2 = (nums: number[]): ITreeNode => {};
