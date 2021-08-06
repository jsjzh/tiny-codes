import { code1 } from '.';

it('code1 test1', () => expect(code1('ccc')).toBe(3));
it('code1 test2', () => expect(code1('abccccdd')).toBe(7));
it('code1 test3', () => expect(code1('ababababa')).toBe(9));
