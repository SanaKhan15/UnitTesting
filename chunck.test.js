const chunckArr = require('./chunk')

test('chunk function exist or not', () => {
  expect(chunckArr).toBeDefined();
});

test('chunked value', () => {
  const number = [1, 2, 3, 4, 5, 6]
  const len = 2
  const chuckedArr = chunckArr(number, len)
  expect(chuckedArr).toEqual([[1, 2], [3, 4], [5, 6]]);
});