import { getFileName } from '../utils';
import Logger from '../shared/logger';
import TreeNode, { ITreeNode } from '../shared/treeNode';

const logger = new Logger(getFileName(__filename));

// 给定一个二叉树，检查它是否是镜像对称的。

// 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。
//      1
//   2     2
// 3   4 4   3

// 但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:
//      1
//   2     2
// n   3 n   3

const code = (root: ITreeNode): boolean => {
  if (!root) return false;
  if (root.left === root.right) return true;

  if (root.left && root.right) {
    if (root.left.val !== root.right.val) return false;

    const flag = code(new TreeNode(0, root.left.left, root.right.right));

    if (flag) {
      return code(new TreeNode(0, root.left.right, root.right.left));
    } else {
      return false;
    }
  } else {
    return false;
  }
};

// const better = (root: ITreeNode): boolean => {};

export default () => {
  const l1 = new TreeNode(
    1,
    new TreeNode(2, new TreeNode(3), new TreeNode(4)),
    new TreeNode(2, new TreeNode(4), new TreeNode(3)),
  );

  const l2 = new TreeNode(
    1,
    new TreeNode(2, null, new TreeNode(3)),
    new TreeNode(2, null, new TreeNode(3)),
  );

  logger.timeStart();
  logger.log(code(l1));
  logger.timeEnd();

  logger.timeStart();
  logger.log(code(l2));
  logger.timeEnd();

  // logger.timeStart();
  // logger.log(better(l, r));
  // logger.timeEnd();
};
