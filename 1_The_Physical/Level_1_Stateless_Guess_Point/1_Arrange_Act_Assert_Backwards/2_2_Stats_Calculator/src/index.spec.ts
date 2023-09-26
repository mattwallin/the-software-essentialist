import statsCalc from "./index"

describe('stats calculator', () => {
    it.each([
        [[1, 2]],
      ])('knows that %j ', (intArr) => {
        expect(statsCalc(intArr)).toBeTruthy();
      });

})