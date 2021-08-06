import { code1, code2 } from '.';

const arr1 = [1, 2, 3, 1];
const k1 = 3;
const arr2 = [1, 0, 1, 1];
const k2 = 1;
const arr3 = [1, 2, 3, 1, 2, 3];
const k3 = 2;

it('code1 test1', () => expect(code1(arr1, k1)).toBeTruthy());
it('code1 test2', () => expect(code1(arr2, k2)).toBeTruthy());
it('code1 test3', () => expect(code1(arr3, k3)).toBeFalsy());

it('code2 test1', () => expect(code2(arr1, k1)).toBeTruthy());
it('code2 test2', () => expect(code2(arr2, k2)).toBeTruthy());
it('code2 test3', () => expect(code2(arr3, k3)).toBeFalsy());
