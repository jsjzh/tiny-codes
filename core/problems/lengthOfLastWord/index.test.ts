import { code1 } from '.';

it('code1 test1', () => expect(code1(' hel lo wo rld ')).toBe(3));
it('code1 test2', () => expect(code1('')).toBe(0));
