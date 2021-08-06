import { code1, code2 } from '.';

it('code1 test1', () => expect(code1([7, 1, 5, 3, 6, 4])).toBe(5));
it('code1 test2', () => expect(code1([7, 6, 4, 3, 1])).toBe(0));

it('code2 test1', () => expect(code2([7, 1, 5, 3, 6, 4])).toBe(5));
it('code2 test2', () => expect(code2([7, 6, 4, 3, 1])).toBe(0));
