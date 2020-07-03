import shareTheBill, { testParams } from './shareTheBill'

describe('shareTheBill', () => {
  testParams.forEach(([input, expected, name]) => {
    it(`${name} - input: {${input}} - expected: {${expected}}`, () => {
      expect(shareTheBill(...input)).toEqual(expected)
    })
  })
})
