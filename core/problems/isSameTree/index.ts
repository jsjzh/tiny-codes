import { ITreeNode } from '../../shared/treeNode';

/**
 * isSameTree
 *
 * 给你两棵二叉树的根节点 p 和 q，编写一个函数来检验这两棵树是否相同。
 * 如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。
 *
 * 两棵树上的节点数目都在范围 [0, 100] 内
 * -10^4 <= Node.val <= 10^4
 *
 * https://assets.leetcode.com/uploads/2020/12/20/ex3.jpg
 *    1              1
 * 2     1        1     2
 * 输入：p = [1, 2, 1], q = [1, 1, 2]
 * 输出：false
 *
 * https://assets.leetcode.com/uploads/2020/12/20/ex1.jpg
 *    1              1
 * 2     3        2     3
 * 输入：p = [1, 2, 3], q = [1, 2, 3]
 * 输出：true
 */

export const code1 = (p: ITreeNode, q: ITreeNode): boolean => {
  if (p === q) return true;

  if (p && q) {
    if (p.val !== q.val) return false;

    const flag = code1(p.left, q.left) ? true : false;

    if (flag) {
      return code1(p.right, q.right) ? true : false;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

// export const code2 = (p: TreeNode | null, q: TreeNode | null): boolean => {};
