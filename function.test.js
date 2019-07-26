const functions = require('./function')

// beforeEach(() => function1())
// afterEach(() => function2())

beforeAll(() => function1())
afterAll(() => function2())

const function1 = () => { console.log('initialized') }
const function2 = () => { console.log('closed') }

test('add 2+2 is equal to 4', () => {
  expect(functions.add(2, 2)).toBe(4)
})

test('add 2+2 is not equal to 5', () => {
  expect(functions.add(2, 2)).not.toBe(5)
})

test('null value', () => {
  expect(functions.isNull()).toBeNull()
})

test('check value', () => {
  expect(functions.checkValue(undefined)).toBeFalsy()
})

test('check object', () => {
  expect(functions.createUser()).toEqual({
    firstName: 'sana',
    lastName: 'khan'
  })
})

test('Should be under 1600', () => {
  const val1 = 1200;
  const val2 = 100;
  expect(val1 + val2).toBeLessThan(1700)
});

//Regex
test('There is no I in the class', () => {
  expect('classi').not.toMatch(/I/)
})

//Array

test('Admin should be in userName', () => {
  userName = ['Sana', 'khan', 'Admin'];
  expect(userName).toContain('Admin');
})

//async

// test('userFetch name should be ', () => {
//    expect.assertions(1);
//    return functions.fetchUser().then(data => { expect(data.name).toEqual("Leanne Graham") });
