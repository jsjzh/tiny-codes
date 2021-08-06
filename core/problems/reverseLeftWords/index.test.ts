import { code1 } from '.';

it('code1 test1', () => expect(code1('abcdefg', 2)).toBe('cdefgab'));
it('code1 test2', () => expect(code1('lrloseumgh', 6)).toBe('umghlrlose'));
