import { ITreeNode } from '../../shared/treeNode';

/**
 * inorderTraversal
 *
 * 给定一个二叉树的根节点 root，返回它的中序遍历。
 * 中序遍历（LDR）是二叉树遍历的一种，也叫做中根遍历、中序周游。在二叉树中，中序遍历首先遍历左子树，然后访问根结点，最后遍历右子树。
 *
 * 树中节点数目在范围 [0, 100] 内
 * -100 <= Node.val <= 100
 *
 * https://assets.leetcode.com/uploads/2020/09/15/inorder_1.jpg
 *      1
 *   n     2
 *       3   n
 * 输入：root = [1, null, 2, 3]
 * 输出：[1, 3, 2]
 *
 * https:// assets.leetcode.com/uploads/2020/09/15/inorder_4.jpg
 *      1
 *   n     2
 * 输入：root = [1, null, 2]
 * 输出：[1, 2]
 */

export const code1 = (root: ITreeNode): number[] => {
  const result: number[] = [];

  function curry(node: ITreeNode) {
    node?.left && curry(node.left);
    node?.val && result.push(node.val);
    node?.right && curry(node.right);
  }

  curry(root);

  return result;
};

// export const code2 = (root: ITreeNode): number[] => {};
