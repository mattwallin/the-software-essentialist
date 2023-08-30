import fizzbuzz from "./fizzbuzz";

//Have the function throw an error if num is < 1 or > 100

describe("fizzbuzz", () => {
    it.each([
        [1, '1'],
        [2, '2'],
        [3, 'fizz'],
        [5, 'buzz'],
        [15, 'fizzbuzz'],
        [45, 'fizzbuzz'],
        [0, 'Number can not be higher than 100 or lower than 1'],
        [101, 'Number can not be higher than 100 or lower than 1']
    ])('entered: %i, expected: %s', (num, expected) => {
        expect(fizzbuzz(num)).toBe(expected);
    });
});