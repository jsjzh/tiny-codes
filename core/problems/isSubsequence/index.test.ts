import { code1 } from '.';

it('code1 test1', () => expect(code1('abc', 'ahbgdc')).toBeTruthy());
it('code1 test2', () => expect(code1('axc', 'ahbgdc')).toBeFalsy());
