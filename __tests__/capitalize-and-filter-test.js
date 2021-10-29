const capitalizeAndFilter = require("../src/capitalize-and-filter");

describe("tests a function that returns all the strings in an array in capitalized form and filters out any strings beginning with f or F", () => {
  it("returns ['You', 'Did', 'A', 'Job'] when given the array ['you', 'did', 'a', 'fantastic', 'job']", () => {
    const testArray = ["you", "did", "a", "fantastic", "job"];

    const expectation = ["You", "Did", "A", "Job"];

    const actual = capitalizeAndFilter(testArray);

    expect(actual).toEqual(expectation);
  });
});
