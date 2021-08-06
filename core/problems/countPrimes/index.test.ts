import { code1 } from '.';

const n1 = 10;
const k1 = 4;
const n2 = 0;
const k2 = 0;
const n3 = 1;
const k3 = 0;

it('code1 test1', () => expect(code1(n1)).toBe(k1));
it('code1 test2', () => expect(code1(n2)).toBe(k2));
it('code1 test3', () => expect(code1(n3)).toBe(k3));
