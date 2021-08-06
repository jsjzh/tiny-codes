import { code1 } from '.';

it('code1 test1', () => expect(code1([1, 2, 2, 1], [2, 2])).toEqual([2]));
it('code1 test2', () => expect(code1([4, 9, 5], [9, 4, 9, 8, 4])).toEqual([4, 9]));
