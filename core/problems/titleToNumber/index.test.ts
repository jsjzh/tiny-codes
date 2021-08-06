import { code1, code2 } from '.';

it('code1 test1', () => expect(code1('AB')).toBe(28));
it('code1 test2', () => expect(code1('ZY')).toBe(701));

it('code2 test1', () => expect(code2('AB')).toBe(28));
it('code2 test2', () => expect(code2('ZY')).toBe(701));
