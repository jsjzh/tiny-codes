import TreeNode, { ITreeNode } from '../../shared/treeNode';

/**
 * isSymmetric
 *
 * 给定一个二叉树，检查它是否是镜像对称的。
 *
 * 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。
 *      1
 *   2     2
 * 3   4 4   3
 *
 * 但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:
 *      1
 *   2     2
 * n   3 n   3
 */

export const code1 = (root: ITreeNode): boolean => {
  if (!root) return false;
  if (root.left === root.right) return true;

  if (root.left && root.right) {
    if (root.left.val !== root.right.val) return false;

    const flag = code1(new TreeNode(0, root.left.left, root.right.right));

    if (flag) {
      return code1(new TreeNode(0, root.left.right, root.right.left));
    } else {
      return false;
    }
  } else {
    return false;
  }
};

// export const code2 = (root: ITreeNode): boolean => {};
