export default class ListNode {
  val: number;
  next: IListNode;
  constructor(val?: number, next?: IListNode) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export type IListNode = ListNode | null;
