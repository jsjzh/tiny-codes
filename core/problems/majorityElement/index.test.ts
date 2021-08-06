import { code1, code2 } from '.';

it('code1 test1', () => expect(code1([3, 2, 3])).toBe(3));
it('code1 test2', () => expect(code1([2, 2, 1, 1, 1, 2, 2])).toBe(2));

it('code2 test1', () => expect(code2([3, 2, 3])).toBe(3));
it('code2 test2', () => expect(code2([2, 2, 1, 1, 1, 2, 2])).toBe(2));
