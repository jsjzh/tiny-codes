import { code1 } from '.';

it('code1 test1', () => expect(code1([0, 1, 3])).toBe(2));
it('code1 test2', () => expect(code1([0, 1, 2, 3, 4, 5, 6, 7, 9])).toBe(8));
