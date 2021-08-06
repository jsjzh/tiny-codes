import { code1 } from '.';

it('code1 test1', () => expect(code1(3)).toEqual([1, 3, 3, 1]));
it('code1 test2', () => expect(code1(9)).toEqual([1, 9, 36, 84, 126, 126, 84, 36, 9, 1]));
