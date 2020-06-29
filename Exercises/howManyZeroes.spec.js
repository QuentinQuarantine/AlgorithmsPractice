import howManyZeroes, { testParams } from './howManyZeroes'

describe('howManyZeroes', () => {
  testParams.forEach(([input, expected, name]) => {
    it(`${name} - input: {${input}} - expected: {${expected}}`, () => {
      expect(howManyZeroes(...input)).toEqual(expected)
    })
  })
})
