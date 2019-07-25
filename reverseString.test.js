const reverseString = require('./reverseString')

test('to check reverse string', () => {
  expect(reverseString).toBeDefined();
});

test('check reverse string', () => {
  expect(reverseString('hello')).toEqual('olleh')
});