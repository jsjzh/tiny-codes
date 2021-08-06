import { code1, code2 } from '.';

const arr1 = [3, 2, 1];
const k1 = 2;
const n1 = [1, 2];

const arr2 = [0, 1, 2, 1];
const k2 = 1;
const n2 = [0];

it('code1 test1', () => expect(code1(arr1, k1)).toEqual(n1));
it('code1 test2', () => expect(code1(arr2, k2)).toEqual(n2));

it('code2 test1', () => expect(code2(arr1, k1)).toEqual(n1));
it('code2 test2', () => expect(code2(arr2, k2)).toEqual(n2));
