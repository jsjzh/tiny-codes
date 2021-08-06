import { code1, code2 } from '.';

it('code1 test1', () => expect(code1(1)).toBeTruthy());
it('code1 test2', () => expect(code1(16)).toBeTruthy());
it('code1 test3', () => expect(code1(3)).toBeFalsy());
it('code1 test4', () => expect(code1(4)).toBeTruthy());
it('code1 test5', () => expect(code1(5)).toBeFalsy());

it('code2 test1', () => expect(code2(1)).toBeTruthy());
it('code2 test2', () => expect(code2(16)).toBeTruthy());
it('code2 test3', () => expect(code2(3)).toBeFalsy());
it('code2 test4', () => expect(code2(4)).toBeTruthy());
it('code2 test5', () => expect(code2(5)).toBeFalsy());
