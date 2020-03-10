const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () => {
    it("returns an array like this: [human-years, Cat-Years, Dog-Years]", () => {

        expect(humanCatDogYears(13)).toBe("[13,68,79]");
        expect(humanCatDogYears(56)).toBe('[56,240,294]');
        expect(humanCatDogYears(90)).toBe('[90,376,464]');


    });
});

// Look Ma, no handlebars!!!
