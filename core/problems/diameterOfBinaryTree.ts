/* eslint-disable no-return-assign */
import { getFileName } from '../utils';
import Logger from '../shared/logger';
import TreeNode, { ITreeNode } from '../shared/treeNode';

const logger = new Logger(getFileName(__filename));

// 给定一棵二叉树，你需要计算它的直径长度。
// 一棵二叉树的直径长度是任意两个结点路径长度中的最大值。这条路径可能穿过也可能不穿过根结点。
// 两结点之间的路径长度是以它们之间边的数目表示。

// 给定二叉树
//     1
//    / \
//   2   3
//  / \
// 4   5
// 返回 3, 它的长度是路径 [4,2,1,3] 或者 [5,2,1,3]。

// 从每个节点下手，只要有左右节点的，都可以遍历
// 然后有一个总的 len，Math.max
const code = (root: ITreeNode): number => {
  if (!root) return 0;
  if (!root.left && !root.right) return 1;

  let len = -Infinity;

  const core = (node: ITreeNode, count: number): number => {
    if (!node) return count;

    return (
      (len = Math.max(
        core(node.left, count + 1) + core(node.right, count + 1),
        len,
      )),
      len
    );
  };

  core(root, 1);

  return len;
};

// const better = (root: ITreeNode): number => {};

export default () => {
  const l1 = new TreeNode(
    3,
    new TreeNode(9),
    new TreeNode(20, new TreeNode(15), new TreeNode(7)),
  );

  logger.time(() => logger.log(code(l1)));

  // logger.time(() => logger.log(better(l1)), 'better');
};
