import { code1, code2 } from '.';

import ListNode from '../../shared/listNode';

const l = new ListNode(8, new ListNode(4, new ListNode(5)));
const l1 = new ListNode(4, new ListNode(1, l));
const l2 = new ListNode(5, new ListNode(0, new ListNode(1, l)));
const l3 = new ListNode(1);

it('code1 test1', () => expect(code1(l1, l)).toEqual(l));
it('code1 test2', () => expect(code1(l2, l)).toEqual(l));
it('code1 test3', () => expect(code1(l3, l)).toBeNull());

it('code2 test1', () => expect(code2(l1, l)).toEqual(l));
it('code2 test2', () => expect(code2(l2, l)).toEqual(l));
it('code2 test3', () => expect(code2(l3, l)).toBeNull());
