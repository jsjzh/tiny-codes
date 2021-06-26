/* eslint-disable complexity */
import { getFileName } from '../utils';
import Logger from '../shared/logger';
import TreeNode, { ITreeNode } from '../shared/treeNode';

const logger = new Logger(getFileName(__filename));

// 给定一个二叉树，判断它是否是高度平衡的二叉树。
// 本题中，一棵高度平衡二叉树定义为：一个二叉树每个节点的左右两个子树的高度差的绝对值不超过 1。

// 树中的节点数在范围 [0, 5000] 内
// -10^4 <= Node.val <= 10^4

// 输入：root = []
// 输出：true

// https://assets.leetcode.com/uploads/2020/10/06/balance_1.jpg
// 输入：root = [3,9,2,null,null,5,7]
//       3
//   9       2
// n   n   5   7
// 输出：true

// https://assets.leetcode.com/uploads/2020/10/06/balance_2.jpg
// 输入：root = [1,2,2,3,3,null,null,4,4]
//               1
//       2               2
//   3       3       n       n
// 4   4   n   n   n   n   n   n
// 输出：false

// 输入：root = [1,2,2,3,null,null,3,4,null,null,4]
//               1
//       2               2
//   3       n       n       3
// 4   n   n   n   n   n   n   4
// 输出：false

// 输入：root = [1,null,2,null,3]
//       1
//   n       2
// n   n   n   7
// 输出：false

function deep(node: ITreeNode, count: number): number {
  if (!node) return count;
  return Math.max(deep(node.left, count + 1), deep(node.right, count + 1));
}

const code = (root: ITreeNode): boolean => {
  if (!root) return true;

  return (
    code(root.left) &&
    code(root.right) &&
    Math.abs(deep(root.left, 1) - deep(root.right, 1)) <= 1
  );
};

// const best = (root: ITreeNode): boolean => {};

export default () => {
  const l1 = new TreeNode(
    3,
    new TreeNode(9),
    new TreeNode(2, new TreeNode(5), new TreeNode(7)),
  );

  const l2 = new TreeNode(
    1,
    new TreeNode(
      2,
      new TreeNode(3),
      new TreeNode(3, new TreeNode(4), new TreeNode(4)),
    ),
    new TreeNode(2),
  );

  const l3 = new TreeNode(
    1,
    new TreeNode(2, new TreeNode(3, new TreeNode(4))),
    new TreeNode(2, null, new TreeNode(3, null, new TreeNode(4))),
  );

  const l4 = new TreeNode(1, null, new TreeNode(2, null, new TreeNode(3)));

  logger.time(() => {
    logger.log(code(l1));
  });

  logger.time(() => {
    logger.log(code(l2));
  });

  logger.time(() => {
    logger.log(code(l3));
  });

  logger.time(() => {
    logger.log(code(l4));
  });

  // logger.time(() => {
  // logger.log(best(l1));
  // });
};

// const code = (root: ITreeNode): boolean => {
//   if (root === null) return true;

//   const l = root.left;
//   const r = root.right;

//   if (!l && !r) return true;

//   const ll = l?.left;
//   const lr = l?.right;

//   const rl = r?.left;
//   const rr = r?.right;

//   if (!l && r) {
//     if (rl || rr) {
//       return false;
//     }
//   }

//   if (!r && l) {
//     if (ll || lr) {
//       return false;
//     }
//   }

//   if (l && r) {
//     if ((ll?.left || ll?.right || lr?.left || lr?.right) && !rl && !rr) {
//       return false;
//     }

//     if ((rl?.left || rl?.right || rr?.left || rr?.right) && !ll && !lr) {
//       return false;
//     }
//   }

//   return code(l) && code(r);
// };
