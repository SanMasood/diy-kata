const { getEmployerRole } = require("../src");

describe("getEmployerRole", () => {
  test("returns the employee's role in the company", () => {
    expect(
      getEmployerRole("Lisa", [
        { name: "Bart", role: "Big bro" },
        { name: "Lisa", role: "Good Sister" },
        { name: "Maggie", role: "Baby" }
      ])
    ).toBe("Good Sister");
  });
});
