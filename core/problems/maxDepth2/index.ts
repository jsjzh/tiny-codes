import { ITreeNode } from '../../shared/treeNode';

/**
 * maxDepth2
 *
 * 输入一棵二叉树的根节点，求该树的深度。从根节点到叶节点依次经过的节点（含根、叶节点）形成树的一条路径，最长路径的长度为树的深度。
 * 节点总数 <= 10000
 *
 * 给定二叉树 [3,9,20,null,null,15,7]，
 *     3
 *    / \
 *   9  20
 *     /  \
 *    15   7
 * 返回它的最大深度 3。
 */

export const code1 = (root: ITreeNode): number => {
  if (!root) return 0;

  const core = (node: ITreeNode, count: number): number => {
    if (!node) return count;
    if (!node.left && !node.right) return count;
    return Math.max(core(node.left, count + 1), core(node.right, count + 1));
  };

  return core(root, 1);
};

// export const code2 = (root: ITreeNode): number => {};
