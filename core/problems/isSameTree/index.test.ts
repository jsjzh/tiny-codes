import { code1 } from '.';
import TreeNode from '../../shared/treeNode';

const l1 = new TreeNode(1, new TreeNode(2), new TreeNode(1));
const r1 = new TreeNode(1, new TreeNode(1), new TreeNode(2));

const l2 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
const r2 = new TreeNode(1, new TreeNode(2), new TreeNode(3));

it('code1 test1', () => expect(code1(l1, r1)).toBeFalsy());
it('code1 test2', () => expect(code1(l2, r2)).toBeTruthy());
