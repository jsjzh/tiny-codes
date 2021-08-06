import { code1 } from '.';

it('code1 test1', () => {
  let nums1 = [1, 2, 3, 0, 0, 0];
  code1(nums1, 3, [2, 5, 6], 3);
  expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);
});
