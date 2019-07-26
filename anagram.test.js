const anagram = require('./anagram')

test('function exist or not', () => {
  expect(anagram).toBeDefined()
})

test('to check the anagram', () => {
  expect(anagram('cinema', 'iceman')).toBeTruthy()
})