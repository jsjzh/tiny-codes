/* eslint-disable no-param-reassign */
import { getFileName } from '../utils';
import Logger from '../shared/logger';
import ListNode, { IListNode } from '../shared/listNode';

const logger = new Logger(getFileName(__filename));

// 存在一个按升序排列的链表，给你这个链表的头节点 head，请你删除所有重复的元素，使每个元素只出现一次。
// 返回同样按升序排列的结果链表。

// 链表中节点数目在范围 [0, 300] 内
// -100 <= Node.val <= 100
// 题目数据保证链表已经按升序排列

// https://assets.leetcode.com/uploads/2021/01/04/list2.jpg
// 输入：head = [1,1,2,3,3]
// 输出：[1,2,3]

const code = (head: IListNode): IListNode => {
  if (!head || !head.next) return head;

  let _head = head;

  while (head?.next) {
    if (head.val === head.next.val) {
      head.next = head.next.next;
    } else {
      head = head.next;
    }
  }

  return _head;
};

// const better = (head: IListNode): IListNode => {};

export default () => {
  const l1 = new ListNode(1);
  l1.next = new ListNode(1);
  l1.next.next = new ListNode(1);
  l1.next.next.next = new ListNode(3);
  l1.next.next.next.next = new ListNode(3);

  logger.timeStart();
  logger.log(JSON.stringify(code(l1)));
  logger.timeEnd();

  // logger.timeStart();
  // logger.log('better', JSON.stringify(better(l1, l2)));
  // logger.timeEnd();
};
