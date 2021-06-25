import { getFileName } from '../utils';
import Logger from '../shared/logger';
import TreeNode, { ITreeNode } from '../shared/treeNode';

const logger = new Logger(getFileName(__filename));

// 给你一个整数数组 nums，其中元素已经按升序排列，请你将其转换为一棵高度平衡二叉搜索树。

// 高度平衡二叉树：是一棵满足「每个节点的左右两个子树的高度差的绝对值不超过 1」的二叉树。

// 二叉搜索树：
// 若它的左子树不空，则左子树上所有结点的值均小于它的根结点的值；
// 若它的右子树不空，则右子树上所有结点的值均大于它的根结点的值；
// 它的左、右子树也分别为二叉排序树。
// ps: 其实就是升序数组中位数做根节点，左边是左子树，右边是右子树

// 1 <= nums.length <= 10^4
// -10^4 <= nums[i] <= 10^4
// nums 按严格递增顺序排列

// 输入：nums = [-10,-3,0,5,9]
// 输出：[0,-3,9,-10,null,5]
//        0
//    -3     9
// -10   n 5   n
// https://assets.leetcode.com/uploads/2021/02/18/btree1.jpg
// 解释：[0,-10,5,null,-3,null,9] 也将被视为正确答案
//       0
//  -10     5
// n   -3 n   9
// https://assets.leetcode.com/uploads/2021/02/18/btree2.jpg

// 输入：nums = [1,3]
// 输出：[3,1]
//   3
// 1   n
// https://assets.leetcode.com/uploads/2021/02/18/btree.jpg
// 解释：[1,3] 也将被视为正确答案
//   1
// 3   n
// https://assets.leetcode.com/uploads/2021/02/18/btree.jpg

const code = (nums: number[]): ITreeNode => {
  const len = nums.length;

  if (len === 1) return new TreeNode(nums[0]);
  if (!len) return null;

  const isOdd = !!(len % 2);

  const center = isOdd ? (len + 1) / 2 : len / 2 - 1;
  let root = isOdd ? nums[center - 1] : nums[center];
  let l = nums.slice(0, center);
  let r = nums.slice(center + 1);

  console.log('l', l);
  console.log('r', r);

  return new TreeNode(root, code(l), code(r));
};

// const best = (nums: number[]): ITreeNode => {};

export default () => {
  logger.timeStart();
  code([-10, -3, 0, 5, 9]);
  // logger.log(code([-10, -3, 0, 5, 9]));
  logger.timeEnd();

  // logger.timeStart();
  // logger.log(best(l, r));
  // logger.timeEnd();
};
