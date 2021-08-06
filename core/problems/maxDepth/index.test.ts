import { code1, code2 } from '.';
import TreeNode from '../../shared/treeNode';

const l1 = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(3, new TreeNode(2)), new TreeNode(4)),
  new TreeNode(2, new TreeNode(4), new TreeNode(3)),
);

const l2 = new TreeNode(3, new TreeNode(9), new TreeNode(2, new TreeNode(1), new TreeNode(7)));

it('code1 test1', () => expect(code1(l1)).toBe(4));
it('code1 test2', () => expect(code1(l2)).toBe(3));

it('code2 test1', () => expect(code2(l1)).toBe(4));
it('code2 test2', () => expect(code2(l2)).toBe(3));
