import { code1 } from '.';
import TreeNode from '../../shared/treeNode';

const l1 = new TreeNode(
  4,
  new TreeNode(2, new TreeNode(1), new TreeNode(3)),
  new TreeNode(7, new TreeNode(6), new TreeNode(9)),
);

const k = new TreeNode(
  4,
  new TreeNode(7, new TreeNode(9), new TreeNode(6)),
  new TreeNode(2, new TreeNode(3), new TreeNode(1)),
);

it('code1 test1', () => expect(code1(l1)).toEqual(k));
