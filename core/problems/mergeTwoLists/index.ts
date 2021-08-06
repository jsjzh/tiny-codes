/* eslint-disable no-param-reassign */

import ListNode, { IListNode } from '../../shared/listNode';

/**
 * mergeTwoLists
 *
 * 将两个升序链表合并为一个新的升序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 * https://assets.leetcode.com/uploads/2020/10/03/merge_ex1.jpg
 *
 * 两个链表的节点数目范围是 [0, 50]
 * -100 <= Node.val <= 100
 * l1 和 l2 均按非递减顺序排列
 */

export const code1 = (l1: IListNode, l2: IListNode): IListNode => {
  const newListNode = new ListNode(-1);
  let preListNode = newListNode;

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      preListNode.next = new ListNode(l1.val);
      l1 = l1.next;
    } else {
      preListNode.next = new ListNode(l2.val);
      l2 = l2.next;
    }
    preListNode = preListNode.next;
  }

  preListNode.next = l1 === null ? l2 : l1;

  return newListNode.next;
};

export const code2 = (l1: IListNode, l2: IListNode): IListNode => {
  if (l1 === null) {
    return l2;
  } else if (l2 === null) {
    return l1;
  } else if (l1.val < l2.val) {
    l1.next = code2(l1.next, l2);
    return l1;
  } else {
    l2.next = code2(l1, l2.next);
    return l2;
  }
};
