import findSubstrings, { testParams } from './findSubstrings'

describe('findSubstrings', () => {
  testParams.forEach(([input, expected, name]) => {
    it(`${name} - input: {${input}} - expected: {${expected}}`, () => {
      expect(findSubstrings(...input)).toEqual(expected)
    })
  })
})
