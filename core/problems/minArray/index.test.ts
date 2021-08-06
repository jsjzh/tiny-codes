import { code1 } from '.';

it('code1 test1', () => expect(code1([3, 4, 5, 1, 2])).toBe(1));
it('code1 test2', () => expect(code1([2, 2, 2, 0, 1])).toBe(0));
