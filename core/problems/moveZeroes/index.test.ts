import { code1 } from '.';

it('code1 test1', () => {
  const nums = [0, 1, 0, 3, 12];
  code1(nums);
  expect(nums).toEqual([1, 3, 12, 0, 0]);
});
