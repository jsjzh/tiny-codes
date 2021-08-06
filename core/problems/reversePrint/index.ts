/* eslint-disable no-param-reassign */

import { IListNode } from '../../shared/listNode';

/**
 * reversePrint
 *
 * 输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。
 *
 * 0 <= 链表长度 <= 10000
 *
 * 输入：head = [1, 3, 2]
 * 输出：[2, 3, 1]
 */

export const code1 = (head: IListNode): number[] => {
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

// export const code2 = (head: IListNode): number[] => {}
