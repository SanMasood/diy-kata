const { reachDestination } = require("../src");

describe("reachDestination", () => {
  test("returns string with estimated time of arrival", () => {

    expect(reachDestination(44, 10)).toBe("I should be there in 4.5 hours.");
    expect(reachDestination(90, 10)).toBe("I should be there in 9 hours.");
    expect(reachDestination(78, 10)).toBe("I should be there in 8 hours.");


  });
});
