import { code1 } from '.';
import TreeNode from '../../shared/treeNode';

const l1 = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)));

it('code1 test1', () => expect(code1(l1)).toEqual([3, 2, 1]));
