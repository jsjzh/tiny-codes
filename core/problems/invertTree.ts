/* eslint-disable no-param-reassign */
import { getFileName } from '../utils';
import Logger from '../shared/logger';
import TreeNode, { ITreeNode } from '../shared/treeNode';

const logger = new Logger(getFileName(__filename));

// 翻转一棵二叉树。

// 输入：
//       4
//   2       7
// 1   3   6   9
// 输出：
//       4
//   7       2
// 9   6   3   1

const code = (root: ITreeNode): ITreeNode => {
  if (!root) return null;
  [root.right, root.left] = [code(root.left), code(root.right)];
  return root;
};

// const better = (root: ITreeNode): ITreeNode => {};

export default () => {
  const tree = new TreeNode(
    4,
    new TreeNode(2, new TreeNode(1), new TreeNode(3)),
    new TreeNode(7, new TreeNode(6), new TreeNode(9)),
  );

  logger.time(() => logger.log(code(tree)));

  // logger.time(() => logger.log(better(tree)));
};
