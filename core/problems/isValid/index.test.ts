import { code1 } from '.';

it('code1 test1', () => expect(code1('([)]')).toBeFalsy());
it('code1 test2', () => expect(code1('{[]}')).toBeTruthy());
it('code1 test3', () => expect(code1('()[]{}')).toBeTruthy());
it('code1 test4', () => expect(code1('{{')).toBeFalsy());
