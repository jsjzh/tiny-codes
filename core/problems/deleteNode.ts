/* eslint-disable no-param-reassign */
import { getFileName } from '../utils';
import Logger from '../shared/logger';
import ListNode, { IListNode } from '../shared/listNode';

const logger = new Logger(getFileName(__filename));

// 给定单向链表的头指针和一个要删除的节点的值，定义一个函数删除该节点。
// 返回删除后的链表的头节点。
// 题目保证链表中节点的值互不相同

// 输入: head = [4,5,1,9], val = 5
// 输出: [4,1,9]
// 解释: 给定你链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -> 1 -> 9.

// 输入: head = [4,5,1,9], val = 1
// 输出: [4,5,9]
// 解释: 给定你链表中值为 1 的第三个节点，那么在调用了你的函数之后，该链表应变为 4 -> 5 -> 9.

const code = (head: IListNode, val: number): IListNode => {
  if (!head) return head;
  if (head.val === val) return head.next;

  let pre: ListNode = head;
  let current: IListNode = head.next;

  while (current) {
    if (current.val === val) {
      pre.next = current.next;
      break;
    }
    pre = current;
    current = current.next;
  }

  return head;
};

// const better = (head: IListNode, val: number): IListNode => {};

export default () => {
  const list = new ListNode(
    1,
    new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))),
  );

  logger.time(() => logger.log(code(list, 2)));

  // logger.time(() => logger.log(better(list)));
};
