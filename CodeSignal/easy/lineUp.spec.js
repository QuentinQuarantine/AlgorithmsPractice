import lineUp, { testParams } from './lineUp';

describe('lineUp', () => {
  testParams.forEach(([input, expected, name]) => {
    it(`${name} - input: {${input}} - expected: {${expected}}`, () => {
      expect(lineUp(...input)).toEqual(expected);
    });
  });
});
