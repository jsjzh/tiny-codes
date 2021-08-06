import { code1 } from '.';

const arr = [1, 0, 0, 0, 1];

it('code1 test1', () => expect(code1(arr, 1)).toBeTruthy());
it('code1 test2', () => expect(code1(arr, 2)).toBeFalsy());
