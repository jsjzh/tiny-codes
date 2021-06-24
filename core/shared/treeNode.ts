export default class TreeNode {
  val: number;
  left: ITreeNode;
  right: ITreeNode;
  constructor(val?: number, left?: ITreeNode, right?: ITreeNode) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export type ITreeNode = TreeNode | null;
