import { code1, code2 } from '.';
import ListNode from '../../shared/listNode';

const node = new ListNode(2, new ListNode(0, new ListNode(4)));
node.next = node;
const l1 = new ListNode(3, node);

it('code1 test1', () => expect(code1(l1)).toBeTruthy());

it('code2 test1', () => expect(code2(l1)).toBeTruthy());
