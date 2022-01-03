test('1012', () => {
  expect(1+1).toBe(2);
  const array = Array(10).fill(null);
  for(let i = 0; i < array.length; i++) {
    array[i] = Array(7).fill(0);
  }
  array[0][0] = 1;
  expect(array[0][0]).toBe(1);
  console.log(array[0], array[1][0]);
  array[1][0] = 1;
  array[1][1] = 1;
  array[4][2] = 1;
  array[4][3] = 1;
  array[4][5] = 1;
  array[2][4] = 1;
  array[3][4] = 1;
  array[7][4] = 1;
  array[8][4] = 1;
  array[9][4] = 1;
  array[7][5] = 1;
  array[8][5] = 1;
  array[9][5] = 1;
  array[7][6] = 1;
  array[8][6] = 1;
  array[9][6] = 1;
  console.log(array);
  expect(array[0][0]).toBe(1);
  expect(array[2][2]).toBe(0);
});
