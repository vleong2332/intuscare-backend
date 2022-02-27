import * as math from '../math';

describe('sum', () => {
  [
    { a: 2, b: 2, output: 4 },
    { a: -2, b: -2, output: -4 },
    { a: -2, b: 2, output: 0 },
    { a: 2, b: -2, output: 0 },
    { a: 0, b: 0, output: 0 },
    { a: 0, b: undefined, output: null },
  ].forEach(({ a, b, output }) => {
    it(`returns ${output} when adding together ${a} and ${b}`, () => {
      expect(math.sum(a, b)).toEqual(output);
    });
  });
});

describe('subtract', () => {
  [
    { a: 2, b: 2, output: 0 },
    { a: -2, b: -2, output: 0 },
    { a: -2, b: 2, output: -4 },
    { a: 2, b: -2, output: 4 },
    { a: 0, b: 0, output: 0 },
    { a: undefined, b: 0, output: null },
  ].forEach(({ a, b, output }) => {
    it(`returns ${output} when subtracting ${a} from ${b}`, () => {
      expect(math.subtract(a, b)).toEqual(output);
    });
  });
});

describe('divide', () => {
  [
    { a: 2, b: 2, output: 1 },
    { a: 1, b: 2, output: 0.5 },
    { a: 2, b: 1, output: 2 },
    { a: 21, b: -1, output: -21 },
    { a: 21, b: 0, output: null },
    { a: 21, b: undefined, output: null },
  ].forEach(({ a, b, output }) => {
    it(`returns ${output} when dividing ${a} by ${b}`, () => {
      expect(math.divide(a, b)).toEqual(output);
    });
  });
});

describe('multiply', () => {
  [
    { a: 2, b: 100, output: 200 },
    { a: 3, b: 2, output: 6 },
    { a: 2, b: 1, output: 2 },
    { a: 21, b: -1, output: -21 },
    { a: 21, b: undefined, output: null },
  ].forEach(({ a, b, output }) => {
    it(`returns ${output} when multiplying ${a} by ${b}`, () => {
      expect(math.multiply(a, b)).toEqual(output);
    });
  });
});

describe('mean', () => {
  [
    { a: [1, 2, 34, 1, 21], output: 11.8 },
    { a: [0, 0, 0, 0], output: 0 },
    { a: [0, 1, null], output: null },
    { a: [], output: null },
  ].forEach(({ a, b, output }) => {
    it(`returns ${output} as the mean of ${a.length} numbers`, () => {
      expect(math.mean(a)).toEqual(output);
    });
  });
});
