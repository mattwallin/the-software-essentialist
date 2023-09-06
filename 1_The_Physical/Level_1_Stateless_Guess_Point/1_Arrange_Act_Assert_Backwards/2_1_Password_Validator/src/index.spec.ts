import passwordvalidator from "./index"

describe('password validator', () => {
  it.each([
    "12345",
])('knows that %s IS a valid password', (str) => {
    expect(passwordvalidator(str)).toHaveProperty('isValid', true);
});

it.each([
  "1234",
  "1234567890123456"
])('knows that %s IS NOT a valid password', (str) => {
  expect(passwordvalidator(str)).toHaveProperty('isValid', false);
  expect(passwordvalidator(str)).toHaveProperty('errors', ["Password must be within 5 and 15 characters"]);

});
})


