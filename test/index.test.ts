const sum = (a: number, b: number) => a + b;

test('测试 1 + 2 是否等于 3', () => {
  expect(sum(1, 2)).toBe(3);
});
