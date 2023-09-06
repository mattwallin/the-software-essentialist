import passwordvalidator from "./index"

describe('password validator', () => {
  it.each([
    "1234",
    "1234567890123456"
  ])('knows that %s IS NOT within 5 and 15 characters', (str) => {
    expect(passwordvalidator(str)).toHaveProperty('isValid', false);
    expect(passwordvalidator(str)).toHaveProperty('errors', ["Password must be within 5 and 15 characters"]);

  });

  it.each([
    "Roots",
    "Joker",
  ])('knows that %s DOES NOT contain a digit', (str) => {
    expect(passwordvalidator(str)).toHaveProperty('isValid', false);
    expect(passwordvalidator(str)).toHaveProperty('errors', ["Password must contain a digit"]);

  });
})


