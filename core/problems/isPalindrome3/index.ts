import { IListNode } from '../../shared/listNode';

/**
 * isPalindrome3
 *
 * 请判断一个链表是否为回文链表。
 *
 * 输入: 1 -> 2
 * 输出: false
 *
 * 输入: 1 -> 2 -> 2 -> 1
 * 输出: true
 *
 * 进阶：
 * 你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
 */

export const code1 = (head: IListNode): boolean => {
  if (!head) return false;
  if (!head.next) return true;

  const arr: number[] = [];

  let currentNode: IListNode = head;

  while (currentNode) {
    arr.push(currentNode.val);
    currentNode = currentNode.next;
  }

  let i = 0;

  while (i < arr.length / 2) {
    if (arr[i] !== arr[arr.length - 1 - i]) return false;
    i++;
  }

  return true;
};

// export const code2 = (head: IListNode): boolean => {};
