/* eslint-disable no-param-reassign */
import { getFileName } from '../utils';
import Logger from '../shared/logger';
import ListNode, { IListNode } from '../shared/listNode';

const logger = new Logger(getFileName(__filename));

// 输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。

// 0 <= 链表长度 <= 10000

// 输入：head = [1,3,2]
// 输出：[2,3,1]

const code = (head: IListNode): number[] => {
  if (!head) return [];
  if (!head.next) return [head.val];

  const arr: number[] = [];
  let currentNode: IListNode = head;

  while (currentNode) {
    arr.unshift(currentNode.val);
    currentNode = currentNode.next;
  }

  return arr;
};

// const better = (head: IListNode): number[] => {}

export default () => {
  const list = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));

  logger.time(() => logger.log(code(list)));

  // logger.time(() => logger.log(better(list)));
};
