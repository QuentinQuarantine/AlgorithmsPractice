import areSimilar, { testParams } from './areSimilar';

describe('areSimilar', () => {
  testParams.forEach(([input, expected, name]) => {
    it(`${name} - input: {${input}} - expected: {${expected}}`, () => {
      expect(areSimilar(...input)).toEqual(expected);
    });
  });
});
