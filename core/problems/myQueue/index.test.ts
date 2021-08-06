import { MyQueue } from '.';

it('MyQueue test1', () => {
  const myQueue = new MyQueue();
  expect(myQueue).toBeInstanceOf(MyQueue);
  expect(myQueue.push(1)).toBeUndefined();
  expect(myQueue.push(2)).toBeUndefined();
  expect(myQueue.peek()).toBe(1);
  expect(myQueue.pop()).toBe(1);
  expect(myQueue.empty()).toBeFalsy();
});
