/* eslint-disable no-param-reassign */

import ListNode, { IListNode } from '../../shared/listNode';

/**
 * removeElements
 *
 * 给你一个链表的头节点 head 和一个整数 val，请你删除链表中所有满足 Node.val == val 的节点，并返回新的头节点。
 *
 * 列表中的节点数目在范围 [0, 10^4] 内
 * 1 <= Node.val <= 50
 * 0 <= val <= 50
 *
 * 输入：head = [1, 2, 6, 3, 4, 5, 6], val = 6
 * 输出：[1, 2, 3, 4, 5]
 *
 * 输入：head = [], val = 1
 * 输出：[]
 *
 * 输入：head = [7, 7, 7, 7], val = 7
 * 输出：[]
 */

export const code1 = (head: IListNode, val: number): IListNode => {
  if (!head) return null;

  let resultNode: ListNode = new ListNode();
  let headNode = resultNode;
  let currentNode: IListNode = head;

  while (currentNode) {
    if (currentNode.val === val) {
      currentNode = currentNode.next;
      // 这里有个比较坑的地方，因为在下面有个
      // resultNode = resultNode.next
      // 而 resultNode.next = currentNode
      // 所以如果 currentNode.next 是要被过滤的
      // 那就会导致最后的 resultNode 指向 currentNode
      if (currentNode === null) resultNode.next = null;
    } else {
      resultNode.next = currentNode;
      currentNode = currentNode.next;
      resultNode = resultNode.next;
    }
  }

  return headNode.next;
};

// export const code2 = (head: IListNode, val: number): IListNode => {};

