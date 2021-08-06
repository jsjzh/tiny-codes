import { code1, code2, code3 } from '.';

const arr1 = [1, 2, 3, 1];
const arr2 = [1, 2, 3, 4];
const arr3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

it('code1 test1', () => expect(code1(arr1)).toBeTruthy());
it('code1 test2', () => expect(code1(arr2)).toBeFalsy());
it('code1 test3', () => expect(code1(arr3)).toBeTruthy());

it('code2 test1', () => expect(code2(arr1)).toBeTruthy());
it('code2 test2', () => expect(code2(arr2)).toBeFalsy());
it('code2 test3', () => expect(code2(arr3)).toBeTruthy());

it('code3 test1', () => expect(code3(arr1)).toBeTruthy());
it('code3 test2', () => expect(code3(arr2)).toBeFalsy());
it('code3 test3', () => expect(code3(arr3)).toBeTruthy());
