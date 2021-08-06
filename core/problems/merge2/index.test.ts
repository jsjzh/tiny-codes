import { code1 } from '.';

it('code1 test1', () => {
  let arr = [1, 2, 3, 0, 0, 0];
  code1(arr, 3, [2, 5, 6], 3);
  expect(arr).toEqual([1, 2, 2, 3, 5, 6]);
});
