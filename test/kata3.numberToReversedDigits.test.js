const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  it("returns a reversed array of the number's digits", () => {

    expect(numberToReversedDigits(743)).toBe("[3, 4, 7]");
    expect(numberToReversedDigits(94321)).toBe('[1, 2, 3, 4, 9]');
    expect(numberToReversedDigits(321)).toBe('[1, 2, 3]');

  });
});
