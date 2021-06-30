/* eslint-disable no-param-reassign */
import { getFileName } from '../utils';
import Logger from '../shared/logger';
import ListNode, { IListNode } from '../shared/listNode';

const logger = new Logger(getFileName(__filename));

// 给你两个单链表的头节点 headA 和 headB，请你找出并返回两个单链表相交的起始节点。如果两个链表没有交点，返回 null。
// 题目数据保证整个链式结构中不存在环。
// 注意，函数返回结果后，链表必须保持其原始结构。

// listA 中节点数目为 m
// listB 中节点数目为 n
// 0 <= m, n <= 3 * 10^4
// 1 <= Node.val <= 10^5
// 0 <= skipA <= m
// 0 <= skipB <= n
// 如果 listA 和 listB 没有交点，intersectVal 为 0
// 如果 listA 和 listB 有交点，intersectVal == listA[skipA + 1] == listB[skipB + 1]

// 进阶：你能否设计一个时间复杂度 O(n) 、仅用 O(1) 内存的解决方案？

// 图示两个链表在节点 c1 开始相交：
// https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/14/160_statement.png

// https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/14/160_example_1.png
// 输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3
// 输出：Intersected at '8'
// 解释：相交节点的值为 8（注意，如果两个链表相交则不能为 0）。
// 从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为 [5,0,1,8,4,5]。
// 在 A 中，相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。

// https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/14/160_example_2.png
// 输入：intersectVal = 2, listA = [0,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
// 输出：Intersected at '2'
// 解释：相交节点的值为 2（注意，如果两个链表相交则不能为 0）。
// 从各自的表头开始算起，链表 A 为 [0,9,1,2,4]，链表 B 为 [3,2,4]。
// 在 A 中，相交节点前有 3 个节点；在 B 中，相交节点前有 1 个节点。

// https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/14/160_example_3.png
// 输入：intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
// 输出：null
// 解释：从各自的表头开始算起，链表 A 为 [2,6,4]，链表 B 为 [1,5]。
// 由于这两个链表不相交，所以 intersectVal 必须为 0，而 skipA 和 skipB 可以是任意值。
// 这两个链表不相交，因此返回 null。

const code = (headA: IListNode, headB: IListNode): IListNode => {
  if (!headA || !headB) return null;
  if (headA === headB) return headA;

  const set = new Set();

  let current: IListNode = headA;

  while (current) {
    if (!current) break;
    set.add(current);
    current = current.next;
  }

  current = headB;

  while (current) {
    if (!current) break;
    if (set.has(current)) return current;
    current = current.next;
  }

  return null;
};

const better = (headA: IListNode, headB: IListNode): IListNode => {
  if (!headA || !headB) return null;
  if (headA === headB) return headA;

  let AC: IListNode = headA;
  let BC: IListNode = headB;

  while (AC !== BC) {
    // 这个方法着实妙，这里 AC !== BC 是用来判断是否两者都是 null
    // AC 运行完再把指针放到 headB，因为 headA.length + headB.length 是相等的
    // 不管是先运行 headA 还是 headB，所以两者交叉运行后，如果是交叉的，那肯定会在交叉点汇合
    AC = AC === null ? headB : AC.next;
    BC = BC === null ? headA : BC.next;
  }
  return AC;
};

export default () => {
  const l = new ListNode(8, new ListNode(4, new ListNode(5)));
  const l1 = new ListNode(4, new ListNode(1, l));
  const l2 = new ListNode(5, new ListNode(0, new ListNode(1, l)));
  const l3 = new ListNode(1);

  logger.time(() => logger.log(code(l1, l2)));
  logger.time(() => logger.log(code(l3, l3)));

  logger.time(() => logger.log(better(l1, l2)));
  logger.time(() => logger.log(better(l3, l3)));
};
