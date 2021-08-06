import { code1 } from '.';
import ListNode from '../../shared/listNode';

const l1 = new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3)))));
const l2 = new ListNode(1, new ListNode(2, new ListNode(3)));

it('code1 test1', () => expect(code1(l1)).toEqual(l2));
