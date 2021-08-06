import { code1 } from '.';
import TreeNode from '../../shared/treeNode';

const root = new TreeNode(0, new TreeNode(-10, null, new TreeNode(-3)), new TreeNode(5, null, new TreeNode(9)));

it('code1 test1', () => expect(code1([-10, -3, 0, 5, 9])).toEqual(root));
