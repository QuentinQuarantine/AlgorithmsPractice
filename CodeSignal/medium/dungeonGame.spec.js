import dungeonGame, { testParams } from './dungeonGame';

describe('dungeonGame', () => {
  testParams.forEach(([input, expected, name]) => {
    it(`${name} - input: {${input}} - expected: {${expected}}`, () => {
      expect(dungeonGame(...input)).toEqual(expected);
    });
  });
});
