import { code1 } from '.';
import ListNode from '../../shared/listNode';

const l1 = new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(1))));
const l2 = new ListNode(1, new ListNode(2));

it('code1 test1', () => expect(code1(l1)).toBeTruthy());
it('code1 test2', () => expect(code1(l2)).toBeFalsy());
