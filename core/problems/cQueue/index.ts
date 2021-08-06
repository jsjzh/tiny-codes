/**
 * cQueue
 *
 * 用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead，分别完成在队列尾部插入整数和在队列头部删除整数的功能。
 * 若队列中没有元素，deleteHead 操作返回 -1
 *
 * 1 <= values <= 10000
 * 最多会对 appendTail、deleteHead 进行 10000 次调用
 *
 * 输入：
 * ["CQueue", "appendTail", "deleteHead", "deleteHead"]
 * [[], [3], [], []]
 * 输出：[null, null, 3, -1]
 *
 * 输入：
 * ["CQueue", "deleteHead", "appendTail", "appendTail", "deleteHead", "deleteHead"]
 * [[], [], [5], [2], [], []]
 * 输出：[null, -1, null, null, 5, 2]
 */

export class CQueue {
  list: number[];

  constructor() {
    this.list = [];
  }

  appendTail(value: number): void {
    this.list.push(value);
  }

  deleteHead(): number {
    const item = this.list.shift();
    return item === undefined ? -1 : item;
  }
}
