import { code1 } from '.';

it('code1 test1', () => expect(code1('egg', 'add')).toBeTruthy());
it('code1 test2', () => expect(code1('foo', 'bar')).toBeFalsy());
it('code1 test3', () => expect(code1('paper', 'title')).toBeTruthy());
