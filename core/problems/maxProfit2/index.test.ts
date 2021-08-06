import { code1 } from '.';

it('code1 test1', () => expect(code1([7, 1, 5, 3, 6, 4])).toBe(7));
it('code1 test2', () => expect(code1([1, 2, 3, 4, 5])).toBe(4));
it('code1 test3', () => expect(code1([7, 6, 4, 3, 1])).toBe(0));
