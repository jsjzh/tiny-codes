import { code1 } from '.';

it('code1 test1', () =>
  expect(code1(9)).toEqual([
    [2, 3, 4],
    [4, 5],
  ]));

it('code1 test2', () =>
  expect(code1(15)).toEqual([
    [1, 2, 3, 4, 5],
    [4, 5, 6],
    [7, 8],
  ]));
