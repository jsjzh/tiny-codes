import { code1 } from '.';
import ListNode from '../../shared/listNode';

const l = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));

it('code1 test1', () => expect(code1(l)).toEqual([5, 4, 3, 2, 1]));
