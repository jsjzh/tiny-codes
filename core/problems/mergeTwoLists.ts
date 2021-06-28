/* eslint-disable no-param-reassign */
import { getFileName } from '../utils';
import Logger from '../shared/logger';
import ListNode, { IListNode } from '../shared/listNode';

const logger = new Logger(getFileName(__filename));

// 将两个升序链表合并为一个新的升序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
// https://assets.leetcode.com/uploads/2020/10/03/merge_ex1.jpg

// 两个链表的节点数目范围是 [0, 50]
// -100 <= Node.val <= 100
// l1 和 l2 均按非递减顺序排列

const code = (l1: IListNode, l2: IListNode): IListNode => {
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

// const better = (l1: IListNode, l2: IListNode): IListNode => {
//   if (l1 === null) {
//     return l2;
//   } else if (l2 === null) {
//     return l1;
//   } else if (l1.val < l2.val) {
//     l1.next = better(l1.next, l2);
//     return l1;
//   } else {
//     l2.next = better(l1, l2.next);
//     return l2;
//   }
// };

export default () => {
  const l1 = new ListNode(1, new ListNode(2, new ListNode(4)));
  const l2 = new ListNode(1, new ListNode(3, new ListNode(4)));

  // const l3 = new ListNode(2);
  // const l4 = new ListNode(1);

  logger.time(() => logger.log(JSON.stringify(code(l1, l2))));

  // logger.time(() => logger.log('better', JSON.stringify(better(l1, l2))));
};
