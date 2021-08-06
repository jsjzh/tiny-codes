import { code1 } from '.';
import TreeNode from '../../shared/treeNode';

const l1 = new TreeNode(3, new TreeNode(9), new TreeNode(2, new TreeNode(5), new TreeNode(7)));
const l2 = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(3), new TreeNode(3, new TreeNode(4), new TreeNode(4))),
  new TreeNode(2),
);
const l3 = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(3, new TreeNode(4))),
  new TreeNode(2, null, new TreeNode(3, null, new TreeNode(4))),
);
const l4 = new TreeNode(1, null, new TreeNode(2, null, new TreeNode(3)));

it('code1 test1', () => expect(code1(l1)).toBeTruthy());
it('code1 test2', () => expect(code1(l2)).toBeFalsy());
it('code1 test3', () => expect(code1(l3)).toBeFalsy());
it('code1 test4', () => expect(code1(l4)).toBeFalsy());
