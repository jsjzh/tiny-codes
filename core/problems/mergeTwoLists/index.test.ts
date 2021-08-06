import { code1, code2 } from '.';
import ListNode from '../../shared/listNode';

it('code1 test1', () => {
  const l1 = new ListNode(1, new ListNode(2, new ListNode(4)));
  const l2 = new ListNode(1, new ListNode(3, new ListNode(4)));

  const k = new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(4))))));

  expect(code1(l1, l2)).toEqual(k);
});

it('code2 test1', () => {
  const l1 = new ListNode(1, new ListNode(2, new ListNode(4)));
  const l2 = new ListNode(1, new ListNode(3, new ListNode(4)));

  const k = new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(4))))));

  expect(code2(l1, l2)).toEqual(k);
});
