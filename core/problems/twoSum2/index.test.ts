import { code1 } from '.';

it('code1 test1', () => expect(code1([2, 7, 11, 15], 9)).toEqual([1, 2]));
it('code1 test2', () => expect(code1([5, 25, 75], 100)).toEqual([2, 3]));
