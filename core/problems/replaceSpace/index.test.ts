import { code1, code2 } from '.';

it('code1 test1', () => expect(code1('We are happy.')).toBe('We%20are%20happy.'));

it('code2 test1', () => expect(code2('We are happy.')).toBe('We%20are%20happy.'));
