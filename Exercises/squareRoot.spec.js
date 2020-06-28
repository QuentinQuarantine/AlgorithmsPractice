import squareRoot, { testParams } from './squareRoot'

describe('squareRoot', () => {
  testParams.forEach(([input, expected, name]) => {
    it(`${name} - input: {${input}} - expected: {${expected}}`, () => {
      expect(squareRoot(...input)).toEqual(expected)
    })
  })
})
