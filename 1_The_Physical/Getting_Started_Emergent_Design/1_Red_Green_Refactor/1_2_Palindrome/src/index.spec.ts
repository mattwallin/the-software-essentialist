import palindromeChecker from "./index"

describe('palindrome checker', () => {
    it.each([
        "mom",
        "dad",
        "Mom",
        "Dad"
    ])('knows that %s is a palindrome', (str) => {
        expect(palindromeChecker(str)).toBeTruthy();
    });
})