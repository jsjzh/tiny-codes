import { code1 } from '.';

it('code1 test1', () => expect(code1([0, 1, 2, 4, 5, 7])).toEqual(['0->2', '4->5', '7']));
it('code1 test2', () => expect(code1([0, 2, 3, 4, 6, 8, 9])).toEqual(['0', '2->4', '6', '8->9']));
