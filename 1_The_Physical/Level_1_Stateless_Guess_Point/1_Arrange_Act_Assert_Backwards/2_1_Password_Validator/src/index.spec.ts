import passwordvalidator from "./index"

describe('password validator', () => {
  it.each([
    "12345",
])('knows that %s is a valid password', (str) => {
    expect(passwordvalidator(str)).toHaveProperty('isValid', true);
});
})


