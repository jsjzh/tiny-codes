import { code1, code2 } from '.';

import ListNode from '../../shared/listNode';

const l = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
const k = new ListNode(4, new ListNode(5));

it('code1 test1', () => expect(code1(l, 2)).toEqual(k));

it('code2 test1', () => expect(code2(l, 2)).toEqual(k));
