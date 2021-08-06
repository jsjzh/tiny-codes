import { code1 } from '.';

it('code1 test1', () => expect(code1(1)).toBeTruthy());
it('code1 test2', () => expect(code1(2)).toBeFalsy());
it('code1 test3', () => expect(code1(3)).toBeFalsy());
it('code1 test4', () => expect(code1(4)).toBeFalsy());
it('code1 test10', () => expect(code1(10)).toBeTruthy());
