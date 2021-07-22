import { getFileName } from '../utils';
import Logger from '../shared/logger';
import TreeNode, { ITreeNode } from '../shared/treeNode';

const logger = new Logger(getFileName(__filename));

// 请完成一个函数，输入一个二叉树，该函数输出它的镜像。

// 0 <= 节点个数 <= 1000

// 例如输入：
//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9

// 镜像输出：
//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1

// 输入：root = [4,2,7,1,3,6,9]
// 输出：[4,7,2,9,6,3,1]

const code = (root: ITreeNode): ITreeNode => {
  if (!root) return root;

  [root.left, root.right] = [root.right, root.left];

  code(root.left);
  code(root.right);

  return root;
};

// const better = (nums: number[]): ITreeNode => {};

export default () => {
  const l1 = new TreeNode(
    4,
    new TreeNode(2, new TreeNode(1), new TreeNode(3)),
    new TreeNode(7, new TreeNode(6), new TreeNode(9)),
  );

  logger.time(() => logger.log(code(l1)));

  // logger.time(() => logger.log(better([-10, -3, 0, 5, 9])), 'better');
};
