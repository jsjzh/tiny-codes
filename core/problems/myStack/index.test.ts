import { MyStack } from '.';

it('MyStack test1', () => {
  const myStack = new MyStack();
  expect(myStack).toBeInstanceOf(MyStack);
  expect(myStack.push(1)).toBeUndefined();
  expect(myStack.push(2)).toBeUndefined();
  expect(myStack.top()).toBe(2);
  expect(myStack.pop()).toBe(2);
  expect(myStack.empty()).toBeFalsy();
});
