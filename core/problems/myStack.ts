import { getFileName } from '../utils';
import Logger from '../shared/logger';

const logger = new Logger(getFileName(__filename));

// 请你仅使用两个队列实现一个后入先出（LIFO）的栈，并支持普通队列的全部四种操作（push、top、pop 和 empty）。

// 实现 MyStack 类：
// void push(int x) 将元素 x 压入栈顶。
// int pop() 移除并返回栈顶元素。
// int top() 返回栈顶元素。
// boolean empty() 如果栈是空的，返回 true；否则，返回 false。

// 1 <= x <= 9
// 最多调用 100 次 push、pop、top 和 empty
// 每次调用 pop 和 top 都保证栈不为空

// 注意：

// 你只能使用队列的基本操作 —— 也就是 push to back、peek/pop from front、size 和 is empty 这些操作。
// 你所使用的语言也许不支持队列。你可以使用 list（列表）或者 deque（双端队列）来模拟一个队列，只要是标准的队列操作即可。

// 输入：
// ["MyStack", "push", "push", "top", "pop", "empty"]
// [[], [1], [2], [], [], []]
// 输出：
// [null, null, null, 2, 2, false]
// 解释：
// MyStack myStack = new MyStack();
// myStack.push(1);
// myStack.push(2);
// myStack.top(); // 返回 2
// myStack.pop(); // 返回 2
// myStack.empty(); // 返回 False

// 进阶：你能否实现每种操作的均摊时间复杂度为 O(1) 的栈？换句话说，执行 n 个操作的总时间复杂度 O(n)，尽管其中某个操作可能需要比其他操作更长的时间。你可以使用两个以上的队列。

class MyStack {
  arr: number[];

  constructor() {
    this.arr = [];
  }

  push(x: number): void {
    this.arr.push(x);
  }

  pop(): number {
    return this.arr.pop() as number;
  }

  top(): number {
    return this.arr[this.arr.length - 1];
  }

  empty(): boolean {
    return !!(this.arr.length === 0);
  }
}

// let MyStack = function() {
//   this.queue = [];
//   this._queue = [];
// };

// MyStack.prototype.push = function(x) {
//   this.queue.push(x);
// };

// MyStack.prototype.pop = function() {
//   while(this.queue.length > 1){
//       this._queue.push(this.queue.shift());
//   }
//   let ans = this.queue.shift();
//   while(this._queue.length){
//       this.queue.push(this._queue.shift());
//   }
//   return ans;
// };

// MyStack.prototype.top = function() {
//   return this.queue.slice(-1)[0];
// };

// MyStack.prototype.empty = function() {
//   return !this.queue.length;
// };

export default () => {
  logger.time(() => {
    const myStack = new MyStack();
    myStack.push(1);
    myStack.push(2);
    logger.log(myStack.top());
    logger.log(myStack.pop());
    logger.log(myStack.empty());
  });
};
