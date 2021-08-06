import { code1 } from '.';

it('code1 test1', () => expect(code1('anagram', 'nagaram')).toBeTruthy());
it('code1 test2', () => expect(code1('rat', 'car')).toBeFalsy());
