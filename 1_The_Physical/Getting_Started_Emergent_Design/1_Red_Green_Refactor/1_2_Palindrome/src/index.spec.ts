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
    it.each([
        "bill",
        "slipped",
        "ghost",
    ])('knows that %s is not a palindrome', (str) => {
        expect(palindromeChecker(str)).toBeFalsy();
    });
})