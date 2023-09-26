import statsCalc from "./index"

describe('stats calculator', () => {
    it.each([
        [[1, 2], 2],
        [[1, 2, 3, 4, 5], 5],
        [[], 0]
      ])('knows that %j has %j elements in the sequence', (intArr, expected) => {
        expect(statsCalc(intArr)).toEqual(expected);
      });
})