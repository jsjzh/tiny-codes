import { getFileName } from '../utils';
import Logger from '../shared/logger';
import ListNode from '../shared/listNode';

const logger = new Logger(getFileName(__filename));

// 将两个升序链表合并为一个新的升序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
// https://assets.leetcode.com/uploads/2020/10/03/merge_ex1.jpg

// 两个链表的节点数目范围是 [0, 50]
// -100 <= Node.val <= 100
// l1 和 l2 均按非递减顺序排列

type IListNode = ListNode | null;

const code = (l1: IListNode, l2: IListNode): IListNode => {
  if (l1 === null) {
    return l2;
  } else if (l2 === null) {
    return l1;
  } else if (l1.val < l2.val) {
    l1.next = code(l1.next, l2);
    return l1;
  } else {
    l2.next = code(l1, l2.next);
    return l2;
  }
};

// const best = (l1: IListNode, l2: IListNode): IListNode => {
//   if (l1 === null) {
//     return l2;
//   } else if (l2 === null) {
//     return l1;
//   } else if (l1.val < l2.val) {
//     l1.next = best(l1.next, l2);
//     return l1;
//   } else {
//     l2.next = best(l1, l2.next);
//     return l2;
//   }
// };

export default () => {
  const l1 = new ListNode(1, new ListNode(2, new ListNode(4)));
  const l2 = new ListNode(1, new ListNode(3, new ListNode(4)));

  // const l3 = new ListNode(2);
  // const l4 = new ListNode(1);

  logger.timeStart();
  logger.log(JSON.stringify(code(l1, l2)));
  logger.timeEnd();

  // logger.timeStart();
  // logger.log('best', JSON.stringify(best(l1, l2)));
  // logger.timeEnd();
};
