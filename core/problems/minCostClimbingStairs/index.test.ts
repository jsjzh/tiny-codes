import { code1, code2 } from '.';

it('code1 test1', () => expect(code1([10, 15, 20])).toBe(15));
it('code1 test2', () => expect(code1([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])).toBe(6));

it('code2 test1', () => expect(code2([10, 15, 20])).toBe(15));
it('code2 test2', () => expect(code2([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])).toBe(6));
