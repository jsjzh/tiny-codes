/**
 * minStack
 *
 * 设计一个支持 push，pop，top 操作，并能在常数时间内检索到最小元素的栈。
 * push(x) —— 将元素 x 推入栈中。
 * pop() —— 删除栈顶的元素。
 * top() —— 获取栈顶元素。
 * getMin() —— 检索栈中的最小元素。
 *
 * pop、top 和 getMin 操作总是在非空栈上调用。
 *
 * 输入：
 * ["MinStack","push","push","push","getMin","pop","top","getMin"]
 * [[],[-2],[0],[-3],[],[],[],[]]
 * 输出：
 * [null,null,null,null,-3,null,0,-2]
 * 解释：
 * MinStack minStack = new MinStack();
 * minStack.push(-2);
 * minStack.push(0);
 * minStack.push(-3);
 * minStack.getMin();   --> 返回 -3.
 * minStack.pop();
 * minStack.top();      --> 返回 0.
 * minStack.getMin();   --> 返回 -2.
 */

export class MinStack {
  arr: number[];
  minArr: number[];

  constructor() {
    this.arr = [];
    this.minArr = [Infinity];
  }

  push(val: number): void {
    this.arr.push(val);
    // 这里是一个很讨巧的做法，维护了一个辅助栈，在每次 push 的时候加入一个 min 值
    // 然后在 pop 的时候同步移除一个，这样的好处就是可以保证不会因为移除而丢失当前数组的最小值
    // 因为每个值在辅助栈中都有对应的 index，假如他是最小的，那他在被移除的时候，辅助栈也会移除这个 index
    this.minArr.push(Math.min(this.minArr[this.minArr.length - 1], val));
  }

  pop(): void {
    this.arr.pop();
    this.minArr.pop();
  }

  top(): number {
    return this.arr[this.arr.length - 1];
  }

  getMin(): number {
    return this.minArr[this.minArr.length - 1];
  }
}
