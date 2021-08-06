import { code1, code2 } from '.';

const arr1 = [1, 2, 3, 4];
const arr2 = [1, 3, 2, 4];

it('code1 test1', () => expect(code1(arr1)).toEqual(arr2));

it('code2 test1', () => expect(code2(arr1)).toEqual(arr2));
