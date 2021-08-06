import { code1 } from '.';

it('code1 test1', () => {
  const s = ['h', 'e', 'l', 'l', 'o'];
  code1(s);
  expect(s).toEqual(['o', 'l', 'l', 'e', 'h']);
});

it('code1 test2', () => {
  const s = ['H', 'a', 'n', 'n', 'a', 'h'];
  code1(s);
  expect(s).toEqual(['h', 'a', 'n', 'n', 'a', 'H']);
});
