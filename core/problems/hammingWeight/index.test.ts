import { code1 } from '.';

it('code1 test1', () => expect(code1(11)).toBe(3));
it('code1 test2', () => expect(code1(128)).toBe(1));
it('code1 test3', () => expect(code1(4294967293)).toBe(31));
