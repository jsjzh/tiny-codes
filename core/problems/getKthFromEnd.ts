/* eslint-disable no-param-reassign */
import { getFileName } from '../utils';
import Logger from '../shared/logger';
import ListNode, { IListNode } from '../shared/listNode';

const logger = new Logger(getFileName(__filename));

// 输入一个链表，输出该链表中倒数第 k 个节点。为了符合大多数人的习惯，本题从 1 开始计数，即链表的尾节点是倒数第 1 个节点。

// 例如，一个链表有 6 个节点，从头节点开始，它们的值依次是 1、2、3、4、5、6。这个链表的倒数第 3 个节点是值为 4 的节点。

// 输入：head = 1->2->3->4->5, k = 2.
// 输出：4->5.

const code = (head: IListNode, k: number): IListNode => {
  let currentNode: IListNode = head;

  while (currentNode) {
    let tempNode: IListNode = currentNode;
    let t = k;
    while (t) {
      tempNode = tempNode.next as ListNode;
      t--;
    }
    if (tempNode === null) return currentNode;
    else currentNode = currentNode.next;
  }

  return currentNode;
};

const better = (head: IListNode, k: number): IListNode => {
  if (!head) return null;

  let front: IListNode = head;
  let back: ListNode = head;

  while (k) {
    if (!front) return back;
    front = front.next;
    k--;
  }

  while (back) {
    if (!front) return back;
    back = back.next as ListNode;
    front = front.next;
  }

  return null;
};

export default () => {
  const list = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));

  logger.time(() => logger.log(code(list, 2)));

  logger.time(() => logger.log(better(list, 2)));
};
