import fractal, { testParams, move90degrees } from './fractal';

describe('fractal', () => {
  testParams.forEach(([input, expected, name]) => {
    it(`${name} - input: {${input}} - expected: {${expected}}`, () => {
      expect(fractal(...input)).toEqual(expected);
    });
  });
});

describe('move90degrees', () => {
  describe('n = 1', () => {
    it('test 1', () => {
      const input = [
        [' ', '_', ' '],
        [' ', '_', '|'],
      ];
      const expectedOutput = [
        [' ', ' ', ' '],
        ['|', '_', '|'],
      ];
      expect(move90degrees(input)).toMatchObject(expectedOutput);
    });
    it('extrapolated test 1', () => {
      const input = [
        [' ', '_', ' ', ' ', ' ', ' ', ' '],
        [' ', '_', '|', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' '],
      ];
      const expectedOutput = [
        [' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', '|', '_', '|'],
        [' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' '],
      ];
      expect(move90degrees(input)).toMatchObject(expectedOutput);
    });
    it('test 2', () => {
      const input = [
        [' ', ' ', ' '],
        ['|', '_', '|'],
      ];
      const expectedOutput = [
        [' ', '_', ' '],
        ['|', '_', ' '],
      ];
      expect(move90degrees(input)).toMatchObject(expectedOutput);
    });
  });
  describe('n = 2', () => {
    it('test 1', () => {
      const input = [
        [' ', ' ', ' ', '_', '_', '_', ' '],
        ['|', '_', '|', ' ', ' ', '_', '|'],
        [' ', '_', ' ', ' ', '|', '_', ' '],
        ['|', ' ', '|', '_', '_', '_', '|'],
      ];
      const expectedOutput = [
        [' ', '_', ' ', ' ', ' ', '_', ' '],
        [' ', '_', '|', ' ', '|', '_', ' '],
        ['|', ' ', ' ', '_', ' ', ' ', '|'],
        ['|', '_', '|', ' ', '|', '_', '|'],
      ];
      expect(move90degrees(input)).toMatchObject(expectedOutput);
    });
  });
});
