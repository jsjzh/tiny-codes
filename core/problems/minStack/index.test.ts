import { MinStack } from '.';

it('MinStack test1', () => {
  const minStack = new MinStack();
  expect(minStack).toBeInstanceOf(MinStack);
  expect(minStack.push(-2)).toBeUndefined();
  expect(minStack.push(0)).toBeUndefined();
  expect(minStack.push(-3)).toBeUndefined();
  expect(minStack.getMin()).toBe(-3);
  expect(minStack.pop()).toBeUndefined();
  expect(minStack.top()).toBe(0);
  expect(minStack.getMin()).toBe(-2);
});
