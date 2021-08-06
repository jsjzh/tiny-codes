import { code1 } from '.';
import TreeNode from '../../shared/treeNode';

const root1 = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)));
const root2 = new TreeNode(1, null, new TreeNode(2));

it('code1 test1', () => expect(code1(root1)).toEqual([1, 3, 2]));
it('code1 test2', () => expect(code1(root2)).toEqual([1, 2]));
