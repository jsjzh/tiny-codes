import { code1 } from '.';

it('code1 test1', () => expect(code1('aaaaa', 'bba')).toBe(-1));
it('code1 test2', () => expect(code1('hello', 'll')).toBe(2));
