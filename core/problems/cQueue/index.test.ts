import { CQueue } from '.';

it('CQueue test1', () => {
  const cQueue = new CQueue();
  expect(cQueue).toBeInstanceOf(CQueue);
  expect(cQueue.appendTail(3)).toBeUndefined();
  expect(cQueue.deleteHead()).toBe(3);
  expect(cQueue.deleteHead()).toBe(-1);
});

it('CQueue test2', () => {
  const cQueue = new CQueue();
  expect(cQueue).toBeInstanceOf(CQueue);
  expect(cQueue.deleteHead()).toBe(-1);
  expect(cQueue.appendTail(5)).toBeUndefined();
  expect(cQueue.appendTail(2)).toBeUndefined();
  expect(cQueue.deleteHead()).toBe(5);
  expect(cQueue.deleteHead()).toBe(2);
});
