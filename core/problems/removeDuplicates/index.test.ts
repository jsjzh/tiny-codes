import { code1, code2 } from '.';

it('code1 test1', () => {
  const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
  expect(code1(nums)).toBe(5);
  expect(nums).toEqual([0, 1, 2, 3, 4]);
});

it('code2 test1', () => {
  const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
  expect(code2(nums)).toBe(5);
  expect(nums).toEqual([0, 1, 2, 3, 4, 2, 2, 3, 3, 4]);
});
