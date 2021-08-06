import { code1, code2 } from '.';

it('code1 test1', () => expect(code1('leetcode')).toBeFalsy());
it('code1 test2', () => expect(code1('abc')).toBeTruthy());

it('code2 test1', () => expect(code2('leetcode')).toBeFalsy());
it('code2 test2', () => expect(code2('abc')).toBeTruthy());
