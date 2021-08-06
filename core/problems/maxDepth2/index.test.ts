import { code1 } from '.';
import TreeNode from '../../shared/treeNode';

const l1 = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));

it('code1 test1', () => expect(code1(l1)).toBe(3));
