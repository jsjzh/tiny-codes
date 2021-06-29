/* eslint-disable no-param-reassign */
import { getFileName } from '../utils';
import Logger from '../shared/logger';
import ListNode, { IListNode } from '../shared/listNode';

const logger = new Logger(getFileName(__filename));

// 给你单链表的头节点 head，请你反转链表，并返回反转后的链表。

// 链表中节点的数目范围是 [0, 5000]
// -5000 <= Node.val <= 5000

// https://assets.leetcode.com/uploads/2021/02/19/rev1ex1.jpg
// 输入：head = [1,2,3,4,5]
// 输出：[5,4,3,2,1]

// https://assets.leetcode.com/uploads/2021/02/19/rev1ex2.jpg
// 输入：head = [1,2]
// 输出：[2,1]

// 输入：head = []
// 输出：[]

// 进阶：链表可以选用迭代或递归方式完成反转。你能否用两种方法解决这道题？

const code = (head: IListNode): IListNode => {
  if (!head || !head.next) return head;
  return head;
};

// const better = (head: IListNode): IListNode => {};

export default () => {
  const l1 = new ListNode(1, new ListNode(2, new ListNode(4)));
  // const l2 = new ListNode(1, new ListNode(3, new ListNode(4)));

  // const l3 = new ListNode(2);
  // const l4 = new ListNode(1);

  logger.time(() => logger.log(JSON.stringify(code(l1))));

  // logger.time(() => logger.log('better', JSON.stringify(better(l1))));
};
