import { code1 } from '.';

it('code1 test1', () => expect(code1([4, 3, 2, 1])).toEqual([4, 3, 2, 2]));
it('code1 test2', () => expect(code1([9, 9, 9, 9])).toEqual([1, 0, 0, 0, 0]));
