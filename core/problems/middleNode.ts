/* eslint-disable no-param-reassign */
import { getFileName } from '../utils';
import Logger from '../shared/logger';
import ListNode, { IListNode } from '../shared/listNode';

const logger = new Logger(getFileName(__filename));

// 给定一个头结点为 head 的非空单链表，返回链表的中间结点。
// 如果有两个中间结点，则返回第二个中间结点。
// 给定链表的结点数介于 1 和 100 之间。

// 输入：[1,2,3,4,5]
// 输出：此列表中的结点 3 (序列化形式：[3,4,5])
// 返回的结点值为 3 。(测评系统对该结点序列化表述是 [3,4,5])。
// 注意，我们返回了一个 ListNode 类型的对象 ans，这样：
// ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, 以及 ans.next.next.next = NULL.

// 输入：[1,2,3,4,5,6]
// 输出：此列表中的结点 4 (序列化形式：[4,5,6])
// 由于该列表有两个中间结点，值分别为 3 和 4，我们返回第二个结点。

const code = (head: IListNode): IListNode => {
  if (!head || !head.next) return head;

  let slow: ListNode = head;
  let fast: IListNode = head;

  while (fast?.next) {
    slow = slow.next as ListNode;
    fast = fast.next ? fast.next.next : fast.next;
  }

  return slow;
};

// const better = (head: IListNode): IListNode => {};

export default () => {
  const l1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))));

  logger.time(() => logger.log(JSON.stringify(code(l1))));

  // logger.time(() => logger.log(better(l1, 1)));
};
