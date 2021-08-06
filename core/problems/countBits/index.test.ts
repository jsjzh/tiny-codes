import { code1, code2 } from '.';

const k1 = 2;
const k2 = 5;
const arr1 = [0, 1, 1];
const arr2 = [0, 1, 1, 2, 1, 2];

it('code1 test1', () => expect(code1(k1)).toEqual(arr1));
it('code1 test2', () => expect(code1(k2)).toEqual(arr2));

it('code2 test1', () => expect(code2(k1)).toEqual(arr1));
it('code2 test2', () => expect(code2(k2)).toEqual(arr2));
