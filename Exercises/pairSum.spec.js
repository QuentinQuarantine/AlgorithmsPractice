import pairSum, { testParams } from './pairSum'

describe('pairSum', () => {
  testParams.forEach(([input, expected, name]) => {
    it(`${name} - input: {${input}} - expected: {${expected}}`, () => {
      expect(pairSum(...input)).toEqual(expected)
    })
  })
})
