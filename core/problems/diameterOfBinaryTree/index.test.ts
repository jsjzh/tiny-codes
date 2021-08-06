import { code1 } from '.';
import TreeNode from '../../shared/treeNode';

const l1 = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3));

it('code1 test1', () => expect(code1(l1)).toBe(3));
