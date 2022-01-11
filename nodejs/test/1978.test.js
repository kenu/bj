const run = require('../src/1978');

test('1978', () => {
  const input2 = `3
2 3 4`;
  expect(run(input2)).toBe(2);

  const input3 = `2
6 11`;
  expect(run(input3)).toBe(1);

  const input = `5
1 3 5 7 11`;
  expect(run(input)).toBe(4);

});
