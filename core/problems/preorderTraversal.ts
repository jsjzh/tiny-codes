import { getFileName } from '../utils';
import Logger from '../shared/logger';
import TreeNode, { ITreeNode } from '../shared/treeNode';

const logger = new Logger(getFileName(__filename));

// 给你二叉树的根节点 root，返回它节点值的前序遍历。

// 规定 D、L、R 分别代表遍历根结点、遍历左子树、遍历右子树
// DLR--前序遍历（根在前，从左往右，一棵树的根永远在左子树前面，左子树又永远在右子树前面）
// https://img-blog.csdn.net/20180523165904117
// LDR--中序遍历（根在中，从左往右，一棵树的左子树永远在根前面，根永远在右子树前面）
// https://img-blog.csdn.net/20180523165909343
// LRD--后序遍历（根在后，从左往右，一棵树的左子树永远在右子树前面，右子树永远在根前面）
// https://img-blog.csdn.net/20180523165914666

// 树中节点数目在范围 [0, 100] 内
// -100 <= Node.val <= 100

// https://assets.leetcode.com/uploads/2020/09/15/inorder_1.jpg
// 输入：root = [1,null,2,3]
//       1
//   n       2
// n   n   3   n
// 输出：[1,2,3]

// 输入：root = []
// 输出：[]

// 输入：root = [1]
// 输出：[1]

// https://assets.leetcode.com/uploads/2020/09/15/inorder_5.jpg
// 输入：root = [1,2]
// 输出：[1,2]

// https://assets.leetcode.com/uploads/2020/09/15/inorder_4.jpg
// 输入：root = [1,null,2]
// 输出：[1,2]

const code = (root: ITreeNode): number[] => {
  if (!root) return [];
  if (!root.left && !root.right) return [root.val];

  const arr: number[] = [];

  function mark(node: TreeNode) {
    arr.push(node.val);

    node.left && mark(node.left);
    node.right && mark(node.right);
  }

  mark(root);

  return arr;
};

// const better = (root: ITreeNode): number[] => {};

export default () => {
  const l1 = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)));

  logger.timeStart();
  logger.log(code(l1));
  logger.timeEnd();

  // logger.timeStart();
  // logger.log(better(l1));
  // logger.timeEnd();
};
