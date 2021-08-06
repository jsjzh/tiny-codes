import { code1 } from '.';

it('code1 test1', () => expect(code1([5, 7, 7, 8, 8, 10], 8)).toBe(2));
it('code1 test2', () => expect(code1([5, 7, 7, 8, 8, 10], 6)).toBe(0));
