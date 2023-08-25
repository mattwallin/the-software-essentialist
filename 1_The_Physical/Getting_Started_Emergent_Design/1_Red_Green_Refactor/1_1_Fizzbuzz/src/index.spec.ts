import fizzbuzz from "./fizzbuzz";



describe("fizzbuzz", () => {
    it.each([
        [1, '1'],
        [2, '2'],
        [3, 'fizz'],
        [5, 'buzz'],
        [15, 'fizzbuzz'],
        [45, 'fizzbuzz']
    ])('entered: %i, expected: %s', (num, expected) => {
        expect(fizzbuzz(num)).toBe(expected);
    });
});