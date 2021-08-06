import { code1 } from '.';

it('code1 test1', () => expect(code1('A man, a plan, a canal: Panama')).toBeTruthy());
it('code1 test2', () => expect(code1('race a car')).toBeFalsy());
