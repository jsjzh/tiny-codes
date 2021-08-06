/* eslint-disable no-param-reassign */

import { IListNode } from '../../shared/listNode';

/**
 * reverseList
 *
 * 给你单链表的头节点 head，请你反转链表，并返回反转后的链表。
 *
 * 链表中节点的数目范围是 [0, 5000]
 * -5000 <= Node.val <= 5000
 *
 * 进阶：链表可以选用迭代或递归方式完成反转。你能否用两种方法解决这道题？
 *
 * https://assets.leetcode.com/uploads/2021/02/19/rev1ex1.jpg
 * 输入：head = [1, 2, 3, 4, 5]
 * 输出：[5, 4, 3, 2, 1]
 *
 * https://assets.leetcode.com/uploads/2021/02/19/rev1ex2.jpg
 * 输入：head = [1, 2]
 * 输出：[2, 1]
 *
 * 输入：head = []
 * 输出：[]
 *
 */

export const code1 = (head: IListNode): IListNode => {
  if (!head || !head.next) return head;

  let prev: IListNode = null;
  let curr: IListNode = head;

  while (curr) {
    const next: IListNode = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
};

// export const code2 = (head: IListNode): IListNode => {};
