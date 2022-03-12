const { NumberAndRomanConversion } = require('../src/roman_numerals_main')

//Arrange, act, assert
describe('NumberAndRomanConversion', () => {
  test('it will display romanised form from number', () => {
    const input = 2439
    const expectedresult = 'MMCDXXXIX'
    const actuaresult = NumberAndRomanConversion(input)
    expect(actuaresult).toBe(expectedresult)
  })
})

describe('NumberAndRomanConversion', () => {
  test('it will display romanised form from number', () => {
    const input = 'MCMLXXXIV'
    const expectedresult = 1984
    const actuaresult = NumberAndRomanConversion(input)
    expect(actuaresult).toBe(expectedresult)
  })
})

describe('NumberAndRomanConversion', () => {
  test('it will display integer form from roman numerals', () => {
    const input = 'MMCDXXXIX'
    const expectedresult = 2439
    const actuaresult = NumberAndRomanConversion(input)
    expect(actuaresult).toBe(expectedresult)
  })
})

describe('NumberAndRomanConversion', () => {
  test('it will display integer form from roman numerals', () => {
    const input = 'MCMLXXXIV'
    const expectedresult = 1984
    const actuaresult = NumberAndRomanConversion(input)
    expect(actuaresult).toBe(expectedresult)
  })
})
