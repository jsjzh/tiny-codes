import { code1, code2 } from '.';

it('code1 test1', () => expect(code1(2)).toBe(1));
it('code1 test2', () => expect(code1(3)).toBe(2));
it('code1 test3', () => expect(code1(4)).toBe(3));

it('code2 test1', () => expect(code2(2)).toBe(1));
it('code2 test2', () => expect(code2(3)).toBe(2));
it('code2 test3', () => expect(code2(4)).toBe(3));
