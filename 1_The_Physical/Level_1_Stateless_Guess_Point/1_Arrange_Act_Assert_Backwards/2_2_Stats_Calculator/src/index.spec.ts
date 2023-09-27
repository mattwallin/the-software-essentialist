import statsCalc from "./index"

describe('stats calculator', () => {
    it.each([
        [[1, 2], [1, 2, 2, 0]],
        [[1, 2, 3, 4, 5], [1, 5, 5, 0]],
        [[-5, 5, 3, 2], [-5, 5, 4, 0]],
        [[], []]
      ])('knows that %j will equal %j', (intArr, expected) => {
        expect(statsCalc(intArr)).toEqual(expected);
      });
})