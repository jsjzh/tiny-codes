import { code1, code2 } from '.';

it('code1 test1', () => expect(code1([2, 2, 1])).toBe(1));
it('code1 test2', () => expect(code1([4, 1, 2, 1, 2])).toBe(4));

it('code2 test1', () => expect(code2([2, 2, 1])).toBe(1));
it('code2 test2', () => expect(code2([4, 1, 2, 1, 2])).toBe(4));
